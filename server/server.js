import express from 'express';
import asyncHandler from 'express-async-handler';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import postRoutes from './routes/postRoutes.js';
// const cors = require("cors");
// const mongoose = require("mongoose")

dotenv.config()

connectDB()

const app = express();

//Body Parser
app.use(express.json());

//ROUTES
app.get("/", (req, res) => {
    res.send("API is running")
})

//Mount postRoutes
app.use('/posts', postRoutes)

//Custom Error Middleware calls:
app.use(notFound)
app.use(errorHandler)

//Environment Variables Implementation
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));