import { MeasurementEntry } from '../models/measurementEntry.model.js'

export const createMeasurement = async (req, res) => {
	try {
		const { value, unit, category, date, time, type, createdBy } = req.body
		const newMeasurementEntry = new MeasurementEntry({
			value,
			unit,
			type,
			category,
			date,
			time,
			createdBy,
		})
		const savedMeasurementEntry = await newMeasurementEntry.save()
		res.status(201).json(savedMeasurementEntry)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export const getAllMeasurements = async (req, res) => {
	try {
		const measurementEntries = await MeasurementEntry.find()
		res.status(200).json(measurementEntries)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export const getMeasurementEntryById = async (req, res) => {
	try {
		const category = await MeasurementEntry.findById(req.params.id)
		if (!category) {
			return res.status(404).json({ error: 'Category not found' })
		}
		res.status(200).json(category)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export const updateMeasurementEntry = async (req, res) => {
	try {
		const updatedCategory = await MeasurementEntry.findByIdAndUpdate(req.params.id, req.body, { new: true })
		if (!updatedCategory) {
			return res.status(404).json({ error: 'Category not found' })
		}
		res.status(200).json(updatedCategory)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export const deleteMeasurementEntry = async (req, res) => {
	try {
		const deletedCategory = await MeasurementEntry.findByIdAndDelete(req.params.id)
		if (!deletedCategory) {
			return res.status(404).json({ error: 'Category not found' })
		}
		res.status(200).json({ message: 'Category deleted' })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}
