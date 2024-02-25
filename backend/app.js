import express from 'express';
import router from './routers/routes.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv/config';

// const cookieParser = require("cookie-parser");
import cors from 'cors';
const  port = 3000;


// console.log('log connection db ' + connectDB);
const app = express();

// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:3000", "http://localhost:8080", "http://localhost:5173"], credentials: true }));
// console.log(router);
app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})