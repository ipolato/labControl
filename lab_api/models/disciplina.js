const Sequelize = require('sequelize');
const database = require('../db');

const Curso = require('./curso');
const Usuario = require('./usuario');


const Disciplina = database.define('disciplina', {
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

Disciplina.belongsTo(Curso, {
    constraint: true,
    foreignKey: 'idCurso',
})

Disciplina.belongsTo(Usuario, {
    constraint: true,
    foreignKey: 'idUsuario',
})


Curso.hasMany(Disciplina, {
    foreignKey: 'idCurso',
})

Usuario.hasMany(Disciplina, {
    foreignKey: 'idUsuario',
})



module.exports = Disciplina;