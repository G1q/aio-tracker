import mongoose from 'mongoose'

const measurementCategorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
			required: false,
		},
		units: [
			{
				name: {
					type: String,
				},
				multiplier: {
					type: Number,
					default: 1,
				},
			},
		],
		type: {
			type: String,
			enum: ['default', 'custom'],
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

export const MeasurementCategory = mongoose.model('MeasurementCategory', measurementCategorySchema)
