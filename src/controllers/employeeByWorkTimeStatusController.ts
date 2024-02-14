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
    const data = await db.employee.findMany({
      where: {
        WorkTime:
          status === 'true'
            ? {
                some: {
                  Status: null,
                },
              }
            : {
                some: {
                  Status: {
                    not: {
                      equals: true,
                    },
                  },
                },
              },
        OrganizationId: model.fields?.OrganizationId && organizationId,
      },
    });
    console.log(
      'result',
      await db.employee.findMany({
        where: {
          WorkTime: {
            some: {
              Status: true,
            },
          },
        },
      }),
    );
    return res.status(200).json(data);
  } catch (e) {
    console.log('🛑 ~ constdeleteData:RequestHandler= ~ e:', e);

    return res
      .status(500)
      .json({ message: 'An error occurred while retrieving data', error: e });
  }
};
