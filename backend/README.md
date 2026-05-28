# Dentoplant — Backend (Flask)

Flask + SQLAlchemy alapú API, ami a Dentoplant weboldal admin felületét és blog adatait szolgálja ki. A frontend a `../frontend` mappában található.

## Stack

- **Flask 3** + **Flask-SQLAlchemy 3.1** + **Flask-Migrate** (Alembic)
- **Flask-Session** filesystem alapú szerver-oldali session
- **Flask-Limiter** rate-limiting
- **Flask-Cors** CORS a frontend felé
- Session-cookie alapú auth + **CSRF token** kötelező minden mutáló kérésnél (POST/PUT/PATCH/DELETE)

## Indítás (development)

### 1. Virtuális környezet és függőségek

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 2. Környezeti változók

Hozz létre egy `.env` fájlt a `backend/` mappában:

```env
SECRET_KEY=valami-hosszu-random-string-min-32-karakter
RUN_MODE=development
FRONTEND_URL=http://localhost:3000
```

> `SECRET_KEY` generálás: `python -c "import secrets; print(secrets.token_urlsafe(48))"`

### 3. Adatbázis inicializálása

Az `instance/` mappa automatikusan létrejön, és egy SQLite adatbázis (`tanker.db` — örökölt név, később átnevezhető) lesz benne. Migrations futtatása:

```bash
python run.py migrate upgrade
```

### 4. Admin user létrehozása

```bash
python run.py create-admin
# Email + jelszó interaktívan
```

A jelszó követelménye: **min. 8 karakter, kis- + nagybetű, szám, speciális karakter (`@$!%*?&`)**.

### 5. Szerver indítása

```bash
python run.py serve --host 127.0.0.1 --port 5000
```

A frontend ezután `http://localhost:5000`-ra fog hívni (lásd `frontend/.env.local`-t).

## Frontend bekötés

A frontend `frontend/.env.local`-ban kell egy sor:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Ezután a `/blog` és `/admin` oldalak automatikusan a backenddel kommunikálnak.

## API áttekintés

### Publikus endpointok (autentikáció nem kell)

| Method | Útvonal                              | Leírás                                      |
| ------ | ------------------------------------ | ------------------------------------------- |
| GET    | `/api/blog/public/posts`             | Publikált cikkek listája                    |
| GET    | `/api/blog/public/posts/<slug>`      | Publikált cikk slug alapján                 |
| GET    | `/api/health`                        | Health-check                                |
| GET    | `/api/ping`                          | Ping                                        |

### Admin endpointok (session + CSRF + `is_admin` kötelező)

| Method | Útvonal                  | Leírás                       |
| ------ | ------------------------ | ---------------------------- |
| GET    | `/api/blog/posts`        | Összes cikk (draft is)       |
| GET    | `/api/blog/posts/<id>`   | Cikk ID alapján              |
| POST   | `/api/blog/posts`        | Új cikk létrehozása          |
| PUT    | `/api/blog/posts/<id>`   | Cikk módosítása              |
| DELETE | `/api/blog/posts/<id>`   | Cikk törlése                 |
| POST   | `/api/upload`            | Kép feltöltése (multipart)   |

### Auth endpointok

| Method | Útvonal             | Leírás                                       |
| ------ | ------------------- | -------------------------------------------- |
| GET    | `/auth/csrf-token`  | CSRF token kiadása a session-höz             |
| POST   | `/auth/login`       | Bejelentkezés (`{email, password, remember}`) — CSRF kötelező |
| POST   | `/auth/logout`      | Kijelentkezés — CSRF kötelező                |
| GET    | `/auth/check`       | Authenticated-e? Gyors check                 |
| GET    | `/auth/me`          | Aktuális user adatai                         |

### CSRF flow

```
1. Frontend: GET /auth/csrf-token        → { csrfToken: "..." }   (cookie set)
2. Frontend: POST /auth/login            → header X-CSRF-Token: <token>
                                           body { email, password, remember }
3. Frontend: bármi mutáló kérés          → header X-CSRF-Token: <token>
```

A session cookie automatikusan kíséri a kéréseket (`fetch(..., { credentials: 'include' })`).

## Blog cikk adatformátum

```json
{
  "id": 1,
  "slug": "alveolus-prezervacio-miert-fontos-a-foghuzas-utani-csontmegorzes",
  "title": "Alveolus prezerváció — miért fontos?",
  "content": "<p>HTML tartalom…</p>",
  "excerpt": "Rövid lead…",
  "cover_image": "/api/upload/files/abc123.jpg",
  "category": { "slug": "implantologia", "name": "Implantológia" },
  "author": { "name": "Dr. Maráz Kinga", "slug": "dr-maraz-kinga" },
  "reading_minutes": 8,
  "is_published": true,
  "published_at": "2025-07-22T10:00:00",
  "created_at": "2025-07-20T...",
  "updated_at": "2025-07-22T..."
}
```

A `category` és `author` lehet `null`. A `content` HTML stringként van eltárolva — a frontend `dangerouslySetInnerHTML`-lel jeleníti meg a `.prose-blog` stílussal. **A backend felelőssége, hogy a tárolt HTML sanitizált legyen** (ha nyers HTML-t fogadsz el a kliensoldali editorból, futtass rá pl. `bleach`-et a `create_post` / `update_post` előtt).

## Hasznos CLI parancsok

```bash
python run.py serve                   # szerver indítása
python run.py migrate upgrade         # legújabb migration-re upgrade
python run.py migrate migrate -m "..."  # új migration generálása modellváltás után
python run.py migrate-status          # melyik revisionön áll
python run.py db init                 # friss DB sémájának felépítése (migrations nélkül)
python run.py db drop                 # MINDEN tábla törlése (vigyázat!)
python run.py create-admin            # új admin user
python run.py show-users              # összes user kiírása
python run.py set-password            # jelszó módosítása
python run.py test-db                 # DB kapcsolat teszt
```

## Production-ról dióhéjban

- `RUN_MODE=production` env
- `DATABASE_URL=postgresql+psycopg://user:pass@host:5432/dentoplant`
- `FRONTEND_URL=https://dentoplant.hu`
- `SECRET_KEY=...` (hosszú random)
- `SESSION_COOKIE_DOMAIN=.dentoplant.hu` ha aldomain közös
- Gunicorn: `gunicorn --bind 0.0.0.0:5000 wsgi:app`
- Vagy Docker: lásd `Dockerfile`

## Tisztításra váró örökölt részek

Ez a backend egy korábbi *Tanker Hungary* projektből származik. A nem releváns
részek később kitakaríthatók:

- `app/blueprints/stations.py` + `app/models/station.py` (üzemanyag állomások — nincs használva)
- `app/blueprints/contact.py` + `app/models/contact.py` (Dentoplantnál külön kapcsolat-űrlap kellhet, ha igen, áttartható)
- `seed_stations.py` (CLI seed script)
- `instance/tanker.db` → később átnevezhető pl. `dentoplant.db`-re a `DATABASE_URL`-ben
