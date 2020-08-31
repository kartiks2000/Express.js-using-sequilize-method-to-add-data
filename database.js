const Sequelize = require('sequelize');

const seq = new Sequelize('mydatabase','root','kartiksaxena',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = seq;

