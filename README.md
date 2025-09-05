# SqliteWire
> A simple Fastify + SQLite demo showing how a frontend talks to a SQL database via REST.

---

## ✨ What it does
- Spins up a Fastify server on `http://localhost:3000`
- Uses `better-sqlite3` (sync, zero-config, single file `data.db`)
- Exposes clean endpoints for a `users` table

---

## 🚀 Quick Start

```bash
# 1. clone
git clone https://github.com/you/sqlitewire.git
cd sqlitewire

# 2. Run both frontend & backend containers
docker compose up -d
# Server listening on http://localhost:3000
# View frontend website at http://localhost:5173

# 3. View logs (optional)
docker compose logs -f

# 4. Stop the application
docker compose down

```

---

## 📡 Endpoints (v1)

| Method | Path        | Request Body                        | Description        |
|--------|-------------|-------------------------------------|--------------------|
| POST   | `/users`    | `{ "username": "Alice" }`           | Create user        |
| GET    | `/users`    | —                                   | List all users     |
| GET    | `/users/:id`| —                                   | Get single user    |
| PUT    | `/users/:id`| `{ "username": "Bob" }`             | Update user        |
| DELETE | `/users/:id`| —                                   | Delete user        |


## File Structure
```
app/
├── backend/
│   ├── src/
│   │   └── ...            # Fastify routes, controllers, etc.
│   ├── data/
│   │   └── app.db         # SQLite database file (persistent)
│   ├── package.json
│   ├── Dockerfile
│   ├── .dockerignore
│
├── frontend/
│   ├── src/
│   │   └── ...            # React components, pages, etc.
│   ├── public/
│   │   └── ...            # Static assets
│   ├── package.json
│   ├── Dockerfile
│   └── .dockerignore
│
├── docker-compose.yaml
└── README.md
```
