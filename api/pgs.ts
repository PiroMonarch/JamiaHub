import { VercelRequest, VercelResponse } from '@vercel/node';
import { getDatabase } from './_db';

export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const db = getDatabase();
    const pgs = db.prepare('SELECT * FROM pgs').all();
    const pgsWithParsedTags = pgs.map((pg: any) => ({
      ...pg,
      tags: JSON.parse(pg.tags)
    }));
    res.status(200).json(pgsWithParsedTags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch PGs' });
  }
}
