import express from 'express'
import {
	createMeasurement,
	getAllMeasurements,
	getMeasurementEntryById,
	updateMeasurementEntry,
	deleteMeasurementEntry,
} from '../controllers/measurementEntry.controller.js'

const router = express.Router()

router.post('/', createMeasurement)
router.get('/', getAllMeasurements)
router.get('/:id', getMeasurementEntryById)
router.put('/:id', updateMeasurementEntry)
router.delete('/:id', deleteMeasurementEntry)

export default router
