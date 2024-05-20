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
		type: {
			type: String,
			enum: ['default', 'custom'],
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
		},
	},
	{
		timestamps: true,
	}
)

export const MeasurementEntry = mongoose.model('MeasurementEntry', measurementEntrySchema)
