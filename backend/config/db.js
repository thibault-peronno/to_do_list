import mysql from "mysql2";
import dotenv from "dotenv/config";

let connectDB;

  connectDB = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    reconnect: true,
  });

  connectDB.connect(function(err) {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to database');
   });



export default connectDB;
