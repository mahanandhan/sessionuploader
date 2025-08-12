import express from 'express';
import { getData, postData } from '../controller/data.controller.js';

const router = express.Router();

router.post('/upload', postData)
router.get('/get-data', getData);
export default router;