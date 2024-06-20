import { Diary } from '../models/diary.model.js';

export const createDiary = async (req, res) => {
	try {
		const { userId } = req.body;
		const newDiary = new Diary({ user: userId });
		const savedDiary = await newDiary.save();
		res.status(201).json(savedDiary);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const getAllWaterMeasurements = async (req, res) => {
	try {
		const waterMeasurementEntries = await WaterMeasurement.find();
		res.status(200).json(waterMeasurementEntries);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const getWaterMeasurement = async (req, res) => {
	try {
		const category = await WaterMeasurement.findById(req.params.id);
		if (!category) {
			return res.status(404).json({ error: 'Category not found' });
		}
		res.status(200).json(category);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const updateWaterMeasurement = async (req, res) => {
	try {
		const updatedCategory = await WaterMeasurement.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!updatedCategory) {
			return res.status(404).json({ error: 'Category not found' });
		}
		res.status(200).json(updatedCategory);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const deleteWaterMeasurement = async (req, res) => {
	try {
		const deleteWaterEntry = await WaterMeasurement.findByIdAndDelete(
			req.params.id
		);
		if (!deleteWaterEntry) {
			return res.status(404).json({ error: 'Entry not found' });
		}
		res.status(200).json({ message: 'Entry deleted' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
