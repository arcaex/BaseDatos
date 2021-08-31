'user strict';

const pool = require('./app.dbconfig.js');

var User = function (user) {
    this.username = user.username;
    this.password = user.id_categoria;
    this.creator = user.creator;
};

User.getlistUsers = function getlistUser(result) {
    pool.query("SELECT * FROM users", function (error, response) {
        if (error) {
            result(null, error);
        } else {
            result(null, response);
        }
    });
};

module.exports = User;