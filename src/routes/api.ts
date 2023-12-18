import express from 'express';
import getData from '../controllers/api/getData.js';
import postData from '../controllers/api/postData.js';

const router = express.Router();

router.get('/:model', getData);
router.post('/:model', postData);

export default router;
