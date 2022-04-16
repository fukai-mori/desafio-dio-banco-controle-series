const mysql = require('mysql2');

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Blueocean712#',
    database: 'moviescontroll'
})

module.exports = Connection;
