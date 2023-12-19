import { RequestHandler } from 'express';
import { db } from '../lib/db.js';
import { checkModelExistence } from '../lib/utils.js';

const patchData: RequestHandler = async (req: any, res) => {
  const model = req.params.model;
  const id = req.query.id;

  checkModelExistence(model, res);

  try {
    const data = await (db[model] as any).update({
      where: {
        Id: parseInt(id),
      },
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

export default patchData;
