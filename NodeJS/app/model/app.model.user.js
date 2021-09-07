'user strict';

const pool = require('./app.dbconfig.js');

var User = function (user) {
    this.id_user = user.id_user;
    this.username = user.username;
    this.password = user.password;
    this.creator = user.creator;
};

User.getlistUsers = function getlistUser(result) {
    pool.query("call user_s(null)", function (error, response) {
        if (error) {
            result(null, error);
        } else {
            result(null, response);
        }
    });
};

User.deleteUser = function deleteUser(id_user, result) {
    pool.query("call user_d(?)", id_user ,function (error, response) {
        if (error) {
            result(null, error);
        } else {
            result(null, response);
        }
    });
};

module.exports = User;