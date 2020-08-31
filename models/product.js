const sequelize = require('sequelize');

const seq = require('../database');

const product = seq.define('product',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title:{
        type: sequelize.STRING,
        allowNull: false,
    },
    price:{
        type: sequelize.DOUBLE,
        allowNull: false,
    }
});

module.exports = product;