const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect((err) => {
    if (err) {
        console.log("Error to connect to MYSQL: " + err)
    } else {
        console.log("Connected to MYSQL")
    }
})

module.exports = connection;

