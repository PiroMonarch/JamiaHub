import { VercelRequest, VercelResponse } from '@vercel/node';
import { getDatabase } from './_db';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const db = getDatabase();

    if (req.method === 'GET') {
      const comparisons = db.prepare('SELECT * FROM comparisons').all();
      return res.status(200).json(comparisons);
    }

    if (req.method === 'POST') {
      const { itemId, type } = req.body;
      
      if (!itemId || !type) {
        return res.status(400).json({ error: 'Missing itemId or type' });
      }

      const exists = db.prepare('SELECT * FROM comparisons WHERE itemId = ? AND type = ?').get(itemId, type);
      if (exists) {
        db.prepare('DELETE FROM comparisons WHERE itemId = ? AND type = ?').run(itemId, type);
        return res.status(200).json({ success: true, action: 'removed' });
      } else {
        // Limit to 3 items for comparison
        const count = db.prepare('SELECT count(*) as count FROM comparisons WHERE type = ?').get(type) as { count: number };
        if (count.count >= 3) {
          return res.status(400).json({ error: 'Max 3 items allowed for comparison' });
        }
        db.prepare('INSERT INTO comparisons (itemId, type) VALUES (?, ?)').run(itemId, type);
        return res.status(200).json({ success: true, action: 'added' });
      }
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
}
