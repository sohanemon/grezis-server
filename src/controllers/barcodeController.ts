import { RequestHandler } from 'express';
import { db } from '../lib/db.js';

export const barcodeController: RequestHandler = async (req, res) => {
  const { barcode } = req.body;
  if (!barcode) {
    return res.status(400).json({ message: 'Barcode is required' });
  }

  try {
    const existentBarcode = await db.employee.findFirst({
      where: { Barcode: barcode },
    });

    if (existentBarcode) {
      return res.status(404).json({ message: 'Barcode not available' });
    }
    return res.status(200).json({ message: 'Barcode available' });
  } catch (error) {
    console.log('🛑 ~ barcode ~ error:', error);
    return res.status(500).json({ message: 'Error getting barcode' });
  }
};
