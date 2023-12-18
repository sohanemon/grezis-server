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
    const data = await (db[model] as any).create({
      data: req.body,
    });

    res.status(200).json({
      success: true,
      data,
    });
  } catch (e) {
    res
      .status(500)
      .json({ message: 'An error occurred while creating data', error: e });
  }
};

export default postData;
