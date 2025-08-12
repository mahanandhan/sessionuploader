import express, { Router } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './db/db.js';
import router from './router/data.router.js';
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send("Welcome to the Session Uploader Backend!");
})
app.use('/api/data', router)


app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})