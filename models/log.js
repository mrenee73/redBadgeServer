const { DataTypes } = require('sequelize');
const db = require("../db");

const Log = db.define("log", {
    nameOfBeer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    brewery: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    style: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    abv:{
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    ibu: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },

});

module.exports = Log;