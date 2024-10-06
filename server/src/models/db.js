const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'slash789654',
    database: 'Reprise'
});

module.exports = connection;