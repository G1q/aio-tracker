import express from 'express'
import {
	createMeasurementCategory,
	getAllMeasurementCategories,
	getMeasurementCategoryById,
	updateMeasurementCategory,
	deleteMeasurementCategory,
} from '../controllers/measurementCategory.controller.js'

const router = express.Router()

router.post('/', createMeasurementCategory)
router.get('/', getAllMeasurementCategories)
router.get('/:id', getMeasurementCategoryById)
router.put('/:id', updateMeasurementCategory)
router.delete('/:id', deleteMeasurementCategory)

export default router
