import { RequestHandler } from 'express';
import { db } from '../lib/db.js';
import { checkModelExistence } from '../lib/utils.js';

const getData: RequestHandler = async (req: any, res) => {
  const model = req.params.model;
  const id = parseInt(req.query.id);

  checkModelExistence(model, res);

  try {
    if (id) {
      const data = await (db[model] as any).findUnique({
        where: {
          Id: id,
        },
      });
      return res.status(200).json(data);
    }

    const data = await (db[model] as any).findMany();
    res.status(200).json(data);
  } catch (e) {
    res
      .status(500)
      .json({ message: 'An error occurred while retrieving data', error: e });
  }
};

export default getData;
