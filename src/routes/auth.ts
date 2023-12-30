import express from 'express';
import { signupController } from '../controllers/signupController.js';
import { loginController } from '../controllers/loginController.js';

const router = express.Router();

router.post('/signup', signupController);
router.post('/login', loginController);

export default router;
