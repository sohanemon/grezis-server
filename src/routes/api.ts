import express from 'express';
import { createController } from '../controllers/createController.js';
import { deleteController } from '../controllers/deleteController.js';
import { readController } from '../controllers/readController.js';
import { updateController } from '../controllers/updateController.js';

const router = express.Router();

router.get('/:model', readController);
router.post('/:model', createController);
router.put('/:model', updateController);
router.delete('/:model', deleteController);

export default router;
