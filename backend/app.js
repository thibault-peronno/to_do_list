import express from 'express';
import router from './routers/routes.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv/config';

import cors from 'cors';
const  port = 3000;

const app = express();

// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: ["https://to-do-list.thibault-peronno.fr"], credentials: true }));

app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})