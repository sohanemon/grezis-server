import { RequestHandler } from 'express';
import { db } from '../lib/db.js';

export const employeeByWorkTimeStatusController: RequestHandler = async (
  req: any,
  res,
) => {
  const model = db['workTime'];

  const status = req.query.status;
  console.log(
    '💬 ~ constemployeeByWorkTimeStatusController:RequestHandler= ~ status:',
    status,
  );

  const organizationId = parseInt(req.query.organizationId);

  try {
    let data;
    if (status === 'true') {
      data = await db.workTime.findMany({
        where: {
          Status: true,
          OrganizationId: model.fields?.OrganizationId && organizationId,
        },
      });
    } else {
      data = await db.employee.findMany({
        where: {
          WorkTime: false,
          OrganizationId: model.fields?.OrganizationId && organizationId,
        },
      });
    }
    console.log(data);
    return res.status(200).json(data);
  } catch (e) {
    console.log('🛑 ~ constdeleteData:RequestHandler= ~ e:', e);

    return res
      .status(500)
      .json({ message: 'An error occurred while retrieving data', error: e });
  }
};
