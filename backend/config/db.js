import mysql from "mysql2";
import dotenv from "dotenv/config";

console.log(
  process.env.HOST,
  process.env.PORT,
  process.env.USER,
  process.env.PASSWORD,
  process.env.DATABASE
);

// const connectDB = mysql.createConnection({
//   // host: process.env.HOST,
//   port: process.env.PORT,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
// });

/**
 * to test with root user
 */
const connectDB = mysql.createConnection({
  host: '',
  port: process.env.PORT,
  user: 'root',
  password: 'secret',
  database: 'to_do_list_test',
});

'connectDB : ' + connectDB.connect(function(err) {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
 
  console.log('Connected to database');
 });
// connectDB.connect(function (err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connectDB.threadId);
// });

export default connectDB;
