const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')
const Users = require('./user.model')

const Task = db.define('task', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
   title: {
    allowNull: false,
    type: DataTypes.STRING,

   },
   description: {
    allowNull: false, 
    type: DataTypes.STRING
   },
   response: {
    type: DataTypes.STRING
   },
   calification: {
    type: DataTypes.INTEGER
   },
   uname: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
        model: Users, 
        key: 'firstName, lastName'
    }
   }
})

module.exports = Task