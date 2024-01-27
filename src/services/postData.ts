import { RequestHandler } from 'express';
import { db } from '../lib/db.js';
import { checkModelExistence } from '../lib/utils.js';

const postData: RequestHandler = async (req: any, res) => {
  const modelName = req.params.model;
  const model = db[modelName] as any;
  checkModelExistence(modelName, res);

  if (!model.fields?.OrganizationId) {
    delete req.body.OrganizationId;
  }

  try {
    const data = await model.create({
      data: req.body,
    });

    res.status(200).json({
      success: true,
      data,
    });
  } catch (e) {
    console.log('🛑 ~ constdeleteData:RequestHandler= ~ e:', e);
    return res
      .status(500)
      .json({ message: 'An error occurred while creating data', error: e });
  }
};

export default postData;
