import mongoose from 'mongoose';
import { Diary } from '../models/diary.model.js';

export const getAllWaterMeasurements = async (req, res) => {
	try {
		const waterMeasurementEntries = await WaterMeasurement.find();
		res.status(200).json(waterMeasurementEntries);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const getWaterEntries = async (req, res) => {
	try {
		const userDiary = await Diary.findOne({
			user: req.params.userId,
		});

		if (!userDiary) {
			return res.status(404).json({ error: 'No diary found!' });
		}

		res.status(200).json(userDiary.water.sort((a, b) => b.date - a.date));
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const updateWaterEntries = async (req, res) => {
	try {
		const diary = await Diary.findOne({ user: req.params.userId });

		if (!diary) return res.status(404).json({ error: 'No diary found!' });

		const waterEntries = [...diary.water, req.body];

		const updatedDiary = await Diary.findByIdAndUpdate(diary._id, {
			water: waterEntries,
		});

		res.status(200).json(updatedDiary);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const deleteWaterEntry = async (req, res) => {
	try {
		const diary = await Diary.findOneAndUpdate(
			{ user: req.params.userId },
			req.body
		);

		if (!diary) return res.status(404).json({ error: 'No diary found!' });

		res.status(200).json({ message: 'Entry deleted successfully!' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const getWaterEntriesByDate = async (req, res) => {
	const userId = req.params.userId;

	if (!userId) {
		return res.status(404).send('User ID not found!');
	}

	try {
		const groupedEntries = await Diary.aggregate([
			{ $match: { user: new mongoose.Types.ObjectId(userId) } },
			{ $unwind: '$water' },
			{
				$group: {
					_id: '$water.date',
					totalQuantity: { $sum: '$water.quantity' },
				},
			},
			{
				$project: {
					_id: 0,
					date: '$_id',
					totalQuantity: 1,
				},
			},
			{ $sort: { date: -1 } },
		]);

		res.status(200).json(groupedEntries);
	} catch (error) {
		console.error('Error aggregating water consumption:', error);
	}
};
