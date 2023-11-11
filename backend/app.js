import express from 'express';
import router from './routers/routes.js';
import dotenv from 'dotenv';
console.log(dotenv);
// const cookieParser = require("cookie-parser");
import cors from 'cors';
const envConfig=dotenv.config();
const  port = 3000;


// console.log('log connection db ' + connectDB);
const app = express();

// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// console.log(router);
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})