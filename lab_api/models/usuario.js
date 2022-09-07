const Sequelize = require('sequelize');
const database = require('../db');

const Curso = require('./curso');

const Usuario = database.define('usuario', {
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
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ra: Sequelize.STRING,
    role: {
        type: Sequelize.ENUM('comum','supervisor','admin'),
        defaultValue: 'comum',
        allowNull: false,
    },
})

Usuario.belongsTo(Curso, {
    constraint: true,
    foreignKey: 'idCurso',
})

Curso.hasMany(Usuario, {
    foreignKey: 'idCurso',
});

module.exports = Usuario;