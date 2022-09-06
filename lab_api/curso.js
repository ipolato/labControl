import Sequelize from 'sequelize';
const database = require('./db');

const Curso = database.define('curso', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    }    
})
