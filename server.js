import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log('connected to db'))
    .catch(err => console.log(err));

app.listen(port, () => {
    console.log(`server is running on port http://127.0.0.1:${port}`);
});
