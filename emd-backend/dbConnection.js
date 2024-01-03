const mysql = require("mysql2");

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'emd'
})

dbConnection.connect(err => {
    if(err){
        console.log("db connection error", JSON.stringify(err, undefined, 2));
    }else{
        console.log("DB connected Successfully");
    }
})

module.exports = dbConnection;