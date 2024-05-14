import mongoose from 'mongoose'

const measurementCategorySchema = new Schema(
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

const MeasurementCategory = mongoose.model('MeasurementCategory', measurementCategorySchema)

module.exports = MeasurementCategory
