const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456gitt',
    database: 'Reprise'
});

module.exports = connection;