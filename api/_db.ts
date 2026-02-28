import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, '../database.db');

let db: Database.Database | null = null;

export function getDatabase(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    
    // Initialize Database
    db.exec(`
      CREATE TABLE IF NOT EXISTS pgs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        location TEXT,
        distance TEXT,
        price INTEGER,
        image TEXT,
        tags TEXT
      );

      CREATE TABLE IF NOT EXISTS roommates (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        course TEXT,
        year TEXT,
        age INTEGER,
        image TEXT,
        isOnline INTEGER,
        budget TEXT,
        area TEXT,
        hobbies TEXT,
        studyHabits TEXT,
        smokingPreference TEXT,
        tags TEXT,
        initials TEXT
      );

      CREATE TABLE IF NOT EXISTS saved_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        itemId INTEGER,
        type TEXT,
        UNIQUE(itemId, type)
      );

      CREATE TABLE IF NOT EXISTS comparisons (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        itemId INTEGER,
        type TEXT,
        UNIQUE(itemId, type)
      );
    `);

    // Seed Data if empty
    const pgsCount = db.prepare('SELECT count(*) as count FROM pgs').get() as { count: number };
    if (pgsCount.count === 0) {
      const insertPg = db.prepare('INSERT INTO pgs (name, location, distance, price, image, tags) VALUES (?, ?, ?, ?, ?, ?)');
      insertPg.run('Al-Hidayat Premium PG', 'Jamia Nagar', '850m away', 8500, 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80', '["Trusted"]');
      insertPg.run('Greenwood Residency', 'Okhla Vihar', '850m away', 10000, 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', '["Trusted"]');
      insertPg.run('Elite Boys Hostel', 'Batla House', '850m away', 6500, 'https://images.unsplash.com/photo-1514432324607-2e4c9ad629d9?w=400&q=80', '[]');
    }

    const roommatesCount = db.prepare('SELECT count(*) as count FROM roommates').get() as { count: number };
    if (roommatesCount.count === 0) {
      const insertRoommate = db.prepare('INSERT INTO roommates (name, course, year, age, image, isOnline, budget, area, hobbies, studyHabits, smokingPreference, tags, initials) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
      insertRoommate.run('Ananya Sharma', 'B.Tech', '3rd Year', 21, 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', 1, '₹5k - ₹7k', 'Jamia Nagar', '["Cricket", "Photography"]', 'Late Night', 'Non-Smoker', '["Early Bird", "Studious"]', 'AS');
      insertRoommate.run('Rohan Verma', 'Mass Comm', '1st Year', 19, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', 0, '₹8k - ₹10k', 'Okhla Vihar', '["Gaming", "Traveling"]', 'Group Study', 'Occasional', '["Night Owl", "Gamer"]', 'RV');
      insertRoommate.run('Zain Khan', 'Psychology', '2nd Year', 20, null, 0, '₹6k - ₹8k', 'Batla House', '["Gym", "Reading"]', 'Early Morning', 'Non-Smoker', '["Fitness Freak", "Clean Freak"]', 'ZK');
    }
  }
  
  return db;
}
