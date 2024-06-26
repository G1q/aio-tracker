import express from 'express';
import {
	updateWaterEntries,
	getWaterEntries,
	deleteWaterEntry,
	getWaterEntriesByDate,
} from '../controllers/diary.controller.js';

const router = express.Router();

router.get('/water/:userId', getWaterEntries);
router.get('/water/grouped/:userId', getWaterEntriesByDate);

router.put('/water/update/:userId', updateWaterEntries);
router.put('/water/delete/:userId', deleteWaterEntry);

export default router;
