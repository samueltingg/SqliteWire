# SqliteWire  
> A dead-simple Fastify + SQLite demo showing how a frontend talks to a SQL database via REST.

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

# 2. install
npm install

# 3. run
npm start
# Server listening on http://localhost:3000
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

