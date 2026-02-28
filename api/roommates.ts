import { VercelRequest, VercelResponse } from '@vercel/node';
import { getDatabase } from './_db';

export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const db = getDatabase();
    const roommates = db.prepare('SELECT * FROM roommates').all();
    const roommatesWithParsedData = roommates.map((r: any) => ({
      ...r,
      hobbies: JSON.parse(r.hobbies),
      tags: JSON.parse(r.tags),
      isOnline: Boolean(r.isOnline)
    }));
    res.status(200).json(roommatesWithParsedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch roommates' });
  }
}
