import express from 'express';
import {
	updateWaterEntries,
	getWaterEntries,
	deleteWaterEntry,
} from '../controllers/diary.controller.js';

const router = express.Router();

router.get('/water/:userId', getWaterEntries);
router.put('/water/update/:userId', updateWaterEntries);
router.put('/water/delete/:userId', deleteWaterEntry);

export default router;
