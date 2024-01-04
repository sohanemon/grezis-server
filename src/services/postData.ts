import { RequestHandler } from 'express';
import { db } from '../lib/db.js';
import { checkModelExistence } from '../lib/utils.js';

const postData: RequestHandler = async (req: any, res) => {
  const model = req.params.model;
  checkModelExistence(model, res);
  const organizationId = parseInt(req.query.organizationId);

  try {
    const data = await (db[model] as any).create({
      data: {
        ...req.body,
        OrganizationId: organizationId,
      },
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
