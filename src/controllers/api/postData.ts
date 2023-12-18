import { RequestHandler } from 'express';
import { db } from '../../lib/db.js';

const postData: RequestHandler = async (req: any, res) => {
  const model = req.params.model;
  if (model in db === false) {
    return res
      .status(400)
      .json({ error: `Model ${model.toUpperCase()} does not exist` });
  }
  try {
    await (db[model] as any).create({
      data: req.body,
    });
    res.status(200).json({
      success: true,
    });
  } catch (e) {
    res.status(500).json({ error: 'An error occurred while posting data' });
  }
};

export default postData;
