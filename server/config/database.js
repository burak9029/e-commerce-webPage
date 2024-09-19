const { Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect : 'postgres',
    
})
require('dotenv').config();

module.exports = sequelize;