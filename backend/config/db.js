import mysql from "mysql2";
import dotenv from "dotenv/config";

let connectDB;

  connectDB = mysql.createConnection({
    host: process.env.HOST || 'mysqldb',
    port: process.env.PORT || '3306',
    user: process.env.USER_MYSQL || 'Thibault_to_do_list',
    password: process.env.PASSWORD_MYSQL || 'Tberp876$39nGdeLp',
    database: process.env.DATABASE_MYSQL || 'to_do_list',
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
