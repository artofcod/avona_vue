const mysql = require("mysql");

// For database connection MYSQL
function getConnection() {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "run"
    });
}

module.exports = getConnection();