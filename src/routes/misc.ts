import express from 'express';
import { barcodeController } from '../controllers/barcodeController.js';
import { employeeByBarcodeController } from '../controllers/employeeByBarcodeController.js';

const router = express.Router();

router.post('/barcode/check', barcodeController);
router.post('/barcode/get-employee', employeeByBarcodeController);

export default router;
