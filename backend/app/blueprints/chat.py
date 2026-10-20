from __future__ import annotations

import json
import os
import urllib.error
import urllib.request

from flask import Blueprint, current_app, jsonify, request

from .. import limiter
from ..chat_knowledge import direct_answer, retrieve

bp = Blueprint("chat", __name__)

MAX_MESSAGE_LEN = 800
MAX_HISTORY = 8
SYMPTOM_HINTS = (
    "faj",
    "fáj",
    "duzzad",
    "verzik",
    "vérzik",
    "genny",
    "dagad",
    "mit szedjek",
    "antibiotikum",
    "sürgős",
    "sürgős",
    "emergency",
    "swollen",
    "bleeding",
    "diagnosis",
)

SYSTEM_PROMPT = """Te a Dentoplant Fogászati és Implantológiai Rendelő (Szeged) honlapjának asszisztense vagy.
Csak általános, nyilvános infót adsz: cím, nyitvatartás, bejelentkezés módja, szolgáltatások, tájékoztató árak, csapat, garancia.
Magyarul válaszolj, kivéve ha a vendég angolul ír.

Szabályok:
- Ne diagnosztizálj, ne javasolj gyógyszert, ne mondd meg, hogy kell-e húzni / gyökérkezelni / műteni egy adott panaszt.
- Ha tünetről vagy sürgősségről van szó: röviden mondd, hogy ez orvosi kérdés, hívják a +36 30 264 5024-et, és ne adj kezelési tervet.
- Ha a kérdésre van adat a tudásbázisban (nyitvatartás, cím, ár, szolgáltatás), azt add meg. Ne küldd telefonra, ha a választ tudod.
- Időpontot nem foglalsz. Csak akkor irányítsd a telefonra / /kapcsolat űrlapra, ha időpontot akar foglalni, vagy orvosi panasz van.
- Árat csak a kapott tudásból mondj, és tedd hozzá, hogy tájékoztató, a végleges díj vizsgálattól függ.
- Ha nem tudod, mondd ki, és add meg a telefont / emailt. Ne találj ki parkolót, TB-t, orvost, árat.
- Röviden, 2–6 mondat. Oldalhivatkozás sima útvonalként: /arak
"""


def _openai_reply(messages: list[dict[str, str]]) -> str | None:
    api_key = os.getenv("OPENAI_API_KEY", "").strip()
    if not api_key:
        return None
    model = os.getenv("OPENAI_MODEL", "gpt-4o-mini").strip() or "gpt-4o-mini"
    base = os.getenv("OPENAI_BASE_URL", "https://api.openai.com/v1").rstrip("/")
    payload = json.dumps(
        {
            "model": model,
            "temperature": 0.2,
            "max_tokens": 420,
            "messages": messages,
        }
    ).encode("utf-8")
    req = urllib.request.Request(
        f"{base}/chat/completions",
        data=payload,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=25) as resp:
            data = json.loads(resp.read().decode("utf-8"))
        choice = (data.get("choices") or [{}])[0]
        content = (choice.get("message") or {}).get("content")
        if isinstance(content, str) and content.strip():
            return content.strip()
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8", errors="replace")[:400]
        current_app.logger.error("OpenAI HTTP %s: %s", exc.code, body)
    except Exception as exc:
        current_app.logger.error("OpenAI call failed: %s", exc)
    return None


def _fallback(question: str, chunks: list[dict[str, str]]) -> str:
    folded = question.lower()
    canned = direct_answer(question)
    if canned:
        return canned
    if any(h in folded for h in SYMPTOM_HINTS):
        return (
            "Panaszra, fájdalomra vagy sürgős esetre itt nem tudok orvosi választ adni. "
            "Kérjük, hívja a rendelőt: +36 30 264 5024, vagy írjon az info@dentoplant.hu címre."
        )
    summary = chunks[0]["text"]
    if len(summary) > 520:
        summary = summary[:517] + "…"
    return summary


@bp.post("/chat")
@limiter.limit("30 per hour")
def chat():
    if not request.is_json:
        return jsonify({"error": "bad_request", "reason": "invalid_json"}), 400
    data = request.get_json(silent=True) or {}
    message = data.get("message")
    if not isinstance(message, str) or not message.strip():
        return jsonify({"error": "bad_request", "reason": "missing_message"}), 400
    message = message.strip()[:MAX_MESSAGE_LEN]

    raw_history = data.get("history") or []
    history: list[dict[str, str]] = []
    if isinstance(raw_history, list):
        for item in raw_history[-MAX_HISTORY:]:
            if not isinstance(item, dict):
                continue
            role = item.get("role")
            content = item.get("content")
            if role in {"user", "assistant"} and isinstance(content, str) and content.strip():
                history.append({"role": role, "content": content.strip()[:MAX_MESSAGE_LEN]})

    canned = direct_answer(message)
    if canned:
        return jsonify({"reply": canned, "source": "faq"})

    chunks = retrieve(message)
    knowledge = "\n\n".join(f"## {c['title']}\n{c['text']}" for c in chunks)
    llm_messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "system", "content": f"Tudásbázis:\n{knowledge}"},
        *history,
        {"role": "user", "content": message},
    ]
    reply = _openai_reply(llm_messages)
    source = "model" if reply else "knowledge"
    if not reply:
        reply = _fallback(message, chunks)
    return jsonify({"reply": reply, "source": source})
