import express from 'express';
import { db } from '../lib/db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).json(await db.employee.findMany());
});

router.post('/', async (req, res) => {
  try {
    await db.employee.create({
      data: req.body,
    });
    res.status(200).json({
      success: true,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e,
    });
  }
});

export default router;
