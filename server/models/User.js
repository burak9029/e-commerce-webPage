const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const bcrypt = require('bcryptjs');

const User = sequelize.define('User', {
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}),

//sifreyi gizlemek icin methot

User.beforeCreate(async(user)=>{
    user.password = await bcrypt.hash(user.password, 10)
});

module.exports = User;