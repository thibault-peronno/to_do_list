import mysql from "mysql2";
import dotenv from "dotenv/config";

let connectDB;

setTimeout(()=> {

  connectDB = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });
  
  /**
   * to test with root user
   */
  // const connectDB = mysql.createConnection({
  //   host: '',
  //   port: process.env.PORT,
  //   user: 'root',
  //   password: 'secret',
  //   database: 'to_do_list_test',
  // });
  
  // 'connectDB : ' + connectDB.connect(function(err) {
  //   if (err) {
  //     console.error('Error connecting to database:', err);
  //     return;
  //   }
   
  //   console.log('Connected to database');
  //  });
  
   connectDB.connect((err) => {
    if(err) {
       console.error('Error connecting to database: ', err);
       setTimeout(() => {
         connectDB.connect();
       }, 2000);
    }
   });
   
   connectDB.on('error', (err) => {
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
       connectDB.connect();
    } else {
       throw err;
    }
   });
}, 5000)



export default connectDB;
