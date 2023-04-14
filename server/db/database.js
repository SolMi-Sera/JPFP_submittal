const Sequelize = require('sequelize');
const dbUrl = 'postgres://localhost:5432/acme_schools_db';
const db = new Sequelize(dbUrl, { logging: false });

module.exports = db;
