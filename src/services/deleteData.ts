import { RequestHandler } from 'express';
import { db } from '../lib/db.js';
import { checkModelExistence } from '../lib/utils.js';

const deleteData: RequestHandler = async (req: any, res) => {
  const model = req.params.model;
  const id = parseInt(req.query.id);

  checkModelExistence(model, res);

  try {
    const data = await (db[model] as any).delete({
      where: {
        Id: id,
      },
    });
    return res.status(200).json({
      success: true,
      data,
    });
  } catch (e) {
    console.log('🛑 ~ constdeleteData:RequestHandler= ~ e:', e);

    return res
      .status(500)
      .json({ message: 'An error occurred while retrieving data', error: e });
  }
};

export default deleteData;
