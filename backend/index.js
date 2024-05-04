import 'dotenv/config'
import express, { json } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_DB_URI).then(res => console.log(`Connected to database!`)).catch(err => console.log(err))

app.listen(process.env.API_PORT, () => {
    console.log(`Server is running on port ${process.env.API_PORT}`)
})