"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbPool = void 0;
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();
exports.dbPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
//# sourceMappingURL=database.js.map