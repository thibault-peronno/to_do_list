import mysql from "mysql2";
import dotenv from "dotenv/config";

let connectDB;

  connectDB = mysql.createConnection({
    host: process.env.HOST ,
    port: process.env.PORT ,
    user: process.env.USER_MYSQL ,
    password: process.env.PASSWORD_MYSQL ,
    database: process.env.DATABASE_MYSQL ,
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
