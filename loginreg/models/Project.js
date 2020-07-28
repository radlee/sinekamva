const Sequelize = require('sequelize');
const db = require('../database/db')

module.exports = db.sequelize.define(
    'project',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING
        },
        projectname: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        donation: {
            type: Sequelize.STRING
        },
        created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }

    },
    {
        timestamps: false
    }

)