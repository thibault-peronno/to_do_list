const mysql      = require('mysql');
const connectDB = async () => {
    try{
       const connection = mysql.createConnection({
            host     : process.env.HOST,
            user     : process.env.USER,
            password : process.env.PASSWORD,
            database: process.env.DATABASE
          });
          console.log('connexion successfull',  connection);
    } catch (error) {
        console.error('error connecting: ' + err.stack);
    return;
    }
} 

module.exports = connectDB;