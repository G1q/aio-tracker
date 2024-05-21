import express from 'express'
import {
	createWaterMeasurement,
	getAllWaterMeasurements,
	getWaterMeasurement,
	updateWaterMeasurement,
	deleteWaterMeasurement,
} from '../controllers/water.controller.js'

const router = express.Router()

router.post('/', createWaterMeasurement)
router.get('/', getAllWaterMeasurements)
router.get('/:id', getWaterMeasurement)
router.put('/:id', updateWaterMeasurement)
router.delete('/:id', deleteWaterMeasurement)

export default router
