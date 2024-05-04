import 'dotenv/config'
import express from 'express'


const app = express()

app.get('/', (req, res) => res.send('Test'))

app.listen(process.env.API_PORT, () => {
    console.log(`Server is running on port ${process.env.API_PORT}`)
})