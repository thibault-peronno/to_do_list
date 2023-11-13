import mysql from "mysql2";
import dotenv from 'dotenv/config';

// const connectDB = async () => {
//     try{
//         mysql.createConnection({
//             host     : process.env.HOST,
//             user     : process.env.USER,
//             password : process.env.PASSWORD,
//             database: process.env.DATABASE
//           });
//           console.log('connexion successfull');
//     } catch (error) {
//         console.log('error');
//         console.error('error connecting: ' + err.stack);
//     return;
//     }
// }
console.log(process.env.HOST,process.env.PORT, process.env.USER, process.env.PASSWORD, process.env.DATABASE,);

const connectDB = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connectDB.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

export default connectDB;
