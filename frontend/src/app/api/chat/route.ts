import { NextResponse } from "next/server";
import { answerChat } from "@/lib/chat-knowledge";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "bad_request", reason: "invalid_json" }, { status: 400 });
  }

  const message =
    body && typeof body === "object" && "message" in body && typeof body.message === "string"
      ? body.message.trim()
      : "";

  if (!message) {
    return NextResponse.json({ error: "bad_request", reason: "missing_message" }, { status: 400 });
  }

  return NextResponse.json({
    reply: answerChat(message.slice(0, 800)),
    source: "faq",
  });
}
