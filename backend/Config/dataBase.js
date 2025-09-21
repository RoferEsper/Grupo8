const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'trabajopractico1'
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la database:', err);
        return;
    }
    console.log('Conexión exitosa a la database');
});

module.exports = connection;