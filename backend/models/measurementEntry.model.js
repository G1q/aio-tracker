import mongoose from 'mongoose'

const measurementEntrySchema = new mongoose.Schema(
	{
		value: {
			type: Number,
			required: true,
		},
		unit: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		date: {
			type: String,
		},
		time: {
			type: String,
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

const MeasurementEntry = mongoose.model('MeasurementEntry', measurementEntrySchema)

module.exports = MeasurementEntry
