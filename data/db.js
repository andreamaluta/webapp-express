const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: "",
    port: "",
    user: "",
    password: "",
    database: ""
})

connection.connect((err) => {
    if (err) {
        console.log("Error to connect to MYSQL: " + err)
    } else {
        console.log("Connected to MYSQL")
    }
})

module.exports = connection;

