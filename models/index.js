const db = require('../db');

const UserModel = require('./user');
const LogModel = require('./log');

module.exports = {
    dbConnection: db,
    UserModel,
    LogModel
};

UserModel.hasMany(LogModel);
LogModel.belongsTo(UserModel);