import express from 'express';
import { createController } from '../controllers/createController.js';
import { deleteController } from '../controllers/deleteController.js';
import { readController } from '../controllers/readController.js';
import { updateController } from '../controllers/updateController.js';
import { employeeByWorkTimeStatusController } from '../controllers/employeeByWorkTimeStatusController.js';

const router = express.Router();

router.get('/workTime', employeeByWorkTimeStatusController);
router.get('/:model', readController);
router.post('/:model', createController);
router.patch('/:model', updateController);
router.delete('/:model', deleteController);

export default router;
