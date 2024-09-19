const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type:DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    imageUrl : {
        type: DataTypes.STRING,
    },
    tags: {
        type: DataTypes.Array(DataTypes.STRING)
    },
    discount: {
        type: DataTypes.FLOAT,
    },
})


module.exports = Product;