import express from 'express';
import { createServer as createViteServer } from 'vite';
import { createServer } from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = new Database('database.db');

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
    type TEXT, -- 'pg' or 'roommate'
    UNIQUE(itemId, type)
  );

  CREATE TABLE IF NOT EXISTS comparisons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    itemId INTEGER,
    type TEXT, -- 'pg' or 'roommate'
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

async function startServer() {
  const app = express();
  const server = createServer(app);
  const wss = new WebSocketServer({ server });
  const PORT = 3000;

  app.use(express.json());

  // WebSocket Logic
  wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
      try {
        const data = JSON.parse(message.toString());
        // Broadcast to all other clients
        wss.clients.forEach((client) => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
          }
        });
      } catch (e) {
        console.error('Error parsing message:', e);
      }
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });

  // API Routes
  app.get('/api/pgs', (req, res) => {
    const pgs = db.prepare('SELECT * FROM pgs').all();
    const pgsWithParsedTags = pgs.map((pg: any) => ({
      ...pg,
      tags: JSON.parse(pg.tags)
    }));
    res.json(pgsWithParsedTags);
  });

  app.get('/api/roommates', (req, res) => {
    const roommates = db.prepare('SELECT * FROM roommates').all();
    const roommatesWithParsedData = roommates.map((r: any) => ({
      ...r,
      hobbies: JSON.parse(r.hobbies),
      tags: JSON.parse(r.tags),
      isOnline: Boolean(r.isOnline)
    }));
    res.json(roommatesWithParsedData);
  });

  // Saved Items API
  app.get('/api/saved', (req, res) => {
    const saved = db.prepare('SELECT * FROM saved_items').all();
    res.json(saved);
  });

  app.post('/api/saved', (req, res) => {
    const { itemId, type } = req.body;
    try {
      const exists = db.prepare('SELECT * FROM saved_items WHERE itemId = ? AND type = ?').get(itemId, type);
      if (exists) {
        db.prepare('DELETE FROM saved_items WHERE itemId = ? AND type = ?').run(itemId, type);
        res.json({ success: true, action: 'removed' });
      } else {
        db.prepare('INSERT INTO saved_items (itemId, type) VALUES (?, ?)').run(itemId, type);
        res.json({ success: true, action: 'added' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Database error' });
    }
  });

  // Comparisons API
  app.get('/api/compare', (req, res) => {
    const comparisons = db.prepare('SELECT * FROM comparisons').all();
    res.json(comparisons);
  });

  app.post('/api/compare', (req, res) => {
    const { itemId, type } = req.body;
    try {
      const exists = db.prepare('SELECT * FROM comparisons WHERE itemId = ? AND type = ?').get(itemId, type);
      if (exists) {
        db.prepare('DELETE FROM comparisons WHERE itemId = ? AND type = ?').run(itemId, type);
        res.json({ success: true, action: 'removed' });
      } else {
        // Limit to 3 items for comparison
        const count = db.prepare('SELECT count(*) as count FROM comparisons WHERE type = ?').get(type) as { count: number };
        if (count.count >= 3) {
           return res.status(400).json({ error: 'Max 3 items allowed for comparison' });
        }
        db.prepare('INSERT INTO comparisons (itemId, type) VALUES (?, ?)').run(itemId, type);
        res.json({ success: true, action: 'added' });
      }
    } catch (error) {
        console.error(error);
      res.status(500).json({ error: 'Database error' });
    }
  });


  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
