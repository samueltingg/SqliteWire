import Database from "better-sqlite3";

// Open or create database file
const db = new Database("app.db");

// Create users table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE
  )
`);

const insertUser = db.prepare("INSERT INTO users (username) VALUES (?)");

// Run the query
try {
  const info = insertUser.run("samuel"); // replace with username variable

  console.log("User inserted with ID:", info.lastInsertRowid);
} catch (err: any) {
  if (err.code === "SQLITE_CONSTRAINT_UNIQUE") {
    console.error("Username already exists!");
  } else {
    throw err;
  }
}
export default db;
