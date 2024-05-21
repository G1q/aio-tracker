import 'dotenv/config'
import express, { json } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

// Import routes
import measurementCategoryRoutes from './routes/measurementCategory.routes.js'
import measurementEntryRoutes from './routes/measurementEntry.routes.js'
import waterRoutes from './routes/water.routes.js'

const app = express()
app.use(cors())
app.use(express.json())

mongoose
	.connect(process.env.MONGO_DB_URI)
	.then((res) => console.log(`Connected to database!`))
	.catch((err) => console.log(err))

// Middlewares
app.use('/api/v1/measurementCategories', measurementCategoryRoutes)
app.use('/api/v1/measurements', measurementEntryRoutes)
app.use('/api/v1/water', waterRoutes)

app.listen(process.env.API_PORT, () => {
	console.log(`Server is running on port ${process.env.API_PORT}`)
})
