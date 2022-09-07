const Sequelize = require('sequelize');
const database = require('../db');

const Curso = database.define('curso', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = Curso;