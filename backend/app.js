const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
console.log(dotenv);
const port = 3000;

connectDB();
const app = express();

// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})