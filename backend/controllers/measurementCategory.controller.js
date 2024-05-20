import { MeasurementCategory } from '../models/measurementCategory.model.js'

export const createMeasurementCategory = async (req, res) => {
	try {
		const { name, description, type, units, createdBy } = req.body
		const newCategory = new MeasurementCategory({
			name,
			description,
			type,
			units,
			createdBy,
		})
		const savedCategory = await newCategory.save()
		res.status(201).json(savedCategory)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export const getAllMeasurementCategories = async (req, res) => {
	try {
		const categories = await MeasurementCategory.find()
		res.status(200).json(categories)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export const getMeasurementCategoryById = async (req, res) => {
	try {
		const category = await MeasurementCategory.findById(req.params.id)
		if (!category) {
			return res.status(404).json({ error: 'Category not found' })
		}
		res.status(200).json(category)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export const updateMeasurementCategory = async (req, res) => {
	try {
		const updatedCategory = await MeasurementCategory.findByIdAndUpdate(req.params.id, req.body, { new: true })
		if (!updatedCategory) {
			return res.status(404).json({ error: 'Category not found' })
		}
		res.status(200).json(updatedCategory)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export const deleteMeasurementCategory = async (req, res) => {
	try {
		const deletedCategory = await MeasurementCategory.findByIdAndDelete(req.params.id)
		if (!deletedCategory) {
			return res.status(404).json({ error: 'Category not found' })
		}
		res.status(200).json({ message: 'Category deleted' })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}
