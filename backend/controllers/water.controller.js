import { WaterMeasurement } from '../models/water.model.js'

export const createWaterMeasurement = async (req, res) => {
	try {
		const { quantity, date, time, type, createdBy } = req.body
		const newWaterMeasurementEntry = new WaterMeasurement({
			quantity,
			date,
			time,
			type,
			createdBy,
		})
		const savedWaterMeasurementEntry = await newWaterMeasurementEntry.save()
		res.status(201).json(savedWaterMeasurementEntry)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export const getAllWaterMeasurements = async (req, res) => {
	try {
		const waterMeasurementEntries = await WaterMeasurement.find()
		res.status(200).json(waterMeasurementEntries)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export const getWaterMeasurement = async (req, res) => {
	try {
		const category = await WaterMeasurement.findById(req.params.id)
		if (!category) {
			return res.status(404).json({ error: 'Category not found' })
		}
		res.status(200).json(category)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export const updateWaterMeasurement = async (req, res) => {
	try {
		const updatedCategory = await WaterMeasurement.findByIdAndUpdate(req.params.id, req.body, { new: true })
		if (!updatedCategory) {
			return res.status(404).json({ error: 'Category not found' })
		}
		res.status(200).json(updatedCategory)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export const deleteWaterMeasurement = async (req, res) => {
	try {
		const deleteWaterEntry = await WaterMeasurement.findByIdAndDelete(req.params.id)
		if (!deleteWaterEntry) {
			return res.status(404).json({ error: 'Entry not found' })
		}
		res.status(200).json({ message: 'Entry deleted' })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}
