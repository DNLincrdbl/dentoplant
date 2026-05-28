# Dentoplant

A [dentoplant.hu](https://dentoplant.hu) — a Dentoplant Fogászati és Implantológiai Rendelő (Szeged) — weboldalának forráskódja.

## Repo szerkezet

```
dentoplant/
├── frontend/   # Next.js 16 + Tailwind v4 (publikus oldal + admin felület)
└── backend/    # Flask + SQLAlchemy (REST API a blog admin felülethez)
```

## Indítás (development)

### Backend

Részletes útmutató: [`backend/README.md`](./backend/README.md).

```bash
cd backend
python3.11 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
# .env létrehozása (lásd backend/README.md)
python run.py migrate upgrade
python run.py create-admin
python run.py serve --port 5001
```

### Frontend

```bash
cd frontend
npm install
echo "NEXT_PUBLIC_API_URL=http://localhost:5001" > .env.local
npm run dev
```

A frontend `http://localhost:3000`-en, a backend `http://localhost:5001`-en fut. Az admin felület a `/admin` útvonalon érhető el.

> **Megjegyzés**: macOS-en a `:5000` port az AirPlay Receiver-é, ezért használunk `:5001`-et.

## Stack

- **Frontend**: Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4, Lucide ikonok
- **Backend**: Flask 3, SQLAlchemy 2, Flask-Migrate (Alembic), Flask-Session, Flask-Limiter, SQLite (dev) / PostgreSQL (prod)
- **Auth**: session cookie + CSRF token (Flask-Session filesystem backend)
