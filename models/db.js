const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

//Create a connection to the database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user:dbConfig.USER,
    password:dbConfig.password,
    database:dbConfig.DB
});

//open the MysQL connection
connection.connect(error=>{
    if(error) throw error;
    console.log("Successfully connection to the database: "+dbConfig.DB);
});

module.exports = connection;