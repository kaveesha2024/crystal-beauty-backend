import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './api/api.js';
import authUserMiddleware from "./middleware/authUserMiddleware.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(cors());
app.use(authUserMiddleware)
mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log('connected to db'))
    .catch(err => console.log(err));

app.use('/api', router);

app.listen(port, () => {
    console.log(`server is running on port http://127.0.0.1:${port}`);
});
