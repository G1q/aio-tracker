import express from 'express';
import { createDiary } from '../controllers/diary.controller.js';

const router = express.Router();

router.post('/', createDiary);

export default router;
