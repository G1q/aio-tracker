import mongoose from 'mongoose'

const waterMeasurementSchema = new mongoose.Schema(
	{
		quantity: {
			type: Number,
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

export const WaterMeasurement = mongoose.model('WaterMeasurement', waterMeasurementSchema)
