import { RequestHandler } from 'express';
import { db } from '../lib/db.js';
import { checkModelExistence } from '../lib/utils.js';

const getData: RequestHandler = async (req: any, res) => {
  const modelName = req.params.model;
  const model = db[modelName] as any;

  const id = parseInt(req.query.id);
  const organizationId = parseInt(req.query.organizationId);

  checkModelExistence(modelName, res);

  try {
    if (id) {
      const data = await model.findUnique({
        where: {
          Id: id,
        },
      });
      return res.status(200).json(data);
    }

    const data = await model.findMany({
      where: {
        OrganizationId: model.fields?.OrganizationId && organizationId,
      },
    });

    res.status(200).json(data);
  } catch (e) {
    console.log('🛑 ~ constdeleteData:RequestHandler= ~ e:', e);

    return res
      .status(500)
      .json({ message: 'An error occurred while retrieving data', error: e });
  }
};

export default getData;
