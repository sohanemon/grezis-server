import { RequestHandler } from 'express';
import { db } from '../../lib/db.js';

const getData: RequestHandler = async (req: any, res) => {
  const model = req.params.model;
  if (model in db === false) {
    return res
      .status(400)
      .json({ error: `Model ${model.toUpperCase()} does not exist` });
  }
  try {
    const data = await (db[model] as any).findMany();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'An error occurred while retrieving data' });
  }
};

export default getData;
