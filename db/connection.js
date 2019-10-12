const mysql = require("mysql");

// For database connection MYSQL
function getConnection() {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "users"
    });
}

module.exports = getConnection();