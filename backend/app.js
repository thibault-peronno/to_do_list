const express = require('express');
const connectDB = require('./config/db');
const router = require('./routers/routes.js')
const dotenv = require('dotenv').config();
console.log(dotenv);
const port = 3000;

connectDB();
// console.log('log connection db ' + connectDB());
const app = express();

// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
console.log(router);
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})