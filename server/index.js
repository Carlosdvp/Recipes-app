import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { userRouter } from './src/routes/users.js'
import { recipeRouter } from './src/routes/recipes.js'

dotenv.config()

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(express.json())
app.use(cors())

app.use('/auth', userRouter)
app.use('/recipes', recipeRouter)

mongoose.connect(process.env.DB_URL)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
