import mongoose from 'mongoose';

const diarySchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		water: [
			{
				quantity: Number,
				date: Date,
				time: String,
			},
		],
	},
	{
		timestamps: true,
	}
);

export const Diary = mongoose.model('Diary', diarySchema);
