const Sequelize = require('sequelize');
const database = require('../db');

const Curso = require('./curso');
const Usuario = require('./usuario');

const Local = database.define('local', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    sala: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: Sequelize.STRING,
})

Local.belongsTo(Curso, {
    constraint: true,
    foreignKey: 'idCurso',
})

Local.belongsTo(Usuario, {
    constraint: true,
    foreignKey: 'idUsuario',
})

Curso.hasMany(Local, {
    foreignKey: 'idCurso',
})

Usuario.hasMany(Local, {
    foreignKey: 'idUsuario',
})


module.exports = Local;