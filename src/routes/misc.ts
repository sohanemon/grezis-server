import express from 'express';
import { barcodeController } from '../controllers/barcodeController.js';

const router = express.Router();

router.post('/barcode/check', barcodeController);

export default router;
