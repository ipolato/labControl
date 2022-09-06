import Sequelize from 'sequelize';

const sequelize = new Sequelize('lab', 'lab', 'labcontrol', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
})

module.exports = sequelize;