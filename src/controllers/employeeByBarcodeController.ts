import { RequestHandler } from 'express';
import { db } from '../lib/db.js';

export const employeeByBarcodeController: RequestHandler = async (req, res) => {
  const { barcode } = req.body;
  if (!barcode) {
    return res.status(400).json({ message: 'Barcode is required' });
  }

  try {
    const employee = await db.employee.findFirst({
      where: { Barcode: barcode },
    });

    if (!employee) {
      return res.status(404).json({ message: 'No employee found' });
    }
    return res.status(200).json(employee);
  } catch (error) {
    console.log('🛑 ~ employeeByBarcode ~ error:', error);
    return res.status(500).json({ message: 'Error getting employee' });
  }
};
