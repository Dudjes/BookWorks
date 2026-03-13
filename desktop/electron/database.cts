import Database from "better-sqlite3";
import path from "path";
import { app } from "electron";

const dbPath = path.join(app.getPath("userData"), "database.sqlite");
const db = new Database(dbPath);

console.log("Database location:", dbPath);

db.prepare(`
  CREATE TABLE IF NOT EXISTS customers (
    userID INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT NOT NULL,
    updated_at TEXT
  )
`).run();