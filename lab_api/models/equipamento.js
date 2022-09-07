const Sequelize = require('sequelize');
const database = require('../db');

const Curso = require('./curso');
const Local = require('./local');

const Equipamento = database.define('equipamento', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    patrimonio: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    estado: {
        type: Sequelize.ENUM('normal','manutenção','quebrado'),
        defaultValue: 'normal',
        allowNull: false,

    },
    marca: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    especificação: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    procedimento: Sequelize.STRING,
})

Equipamento.belongsTo(Curso, {
    constraint: true,
    foreignKey: 'idCurso',
})

Equipamento.belongsTo(Local, {
    constraint: true,
    foreignKey: 'idLocal',
})

Curso.hasMany(Equipamento, {
    foreignKey: 'idCurso',
})

Local.hasMany(Equipamento, {
    foreignKey: 'idLocal',
})


module.exports = Equipamento;