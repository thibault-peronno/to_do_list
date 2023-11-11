import mysql from 'mysql';

const connectDB = async () => {
    try{
        mysql.createConnection({
            host     : process.env.HOST,
            user     : process.env.USER,
            password : process.env.PASSWORD,
            database: process.env.DATABASE
          });
          connection.connect();
          console.log('connexion successfull');
    } catch (error) {
        console.error('error connecting: ' + err.stack);
    return;
    }
} 

export default connectDB;