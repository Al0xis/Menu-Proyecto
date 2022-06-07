const mysql = require('mysql');
const { promisify } = require('util'); // promisify es un módulo que sirve para manejar las promesas

const connection = mysql.createPool({
    host: 'localhost',
    // user: 'rootPizzeria',
    // password: 'root',
    user: 'user',
    password: 'Contraseña_123',
    database: 'pizzeria_db',
})

connection.getConnection(
   (err, conn) => {
       if (err) {
           console.log('Problemas para conectar a la db' + err);
       }
       if (conn) {
           conn.release();
           console.log('¡DB conectada!');
       }
       return
   }
);

connection.query = promisify(connection.query);

module.exports = connection;