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

User.addUser = function addUser(body, result) {
    pool.query("call user_i(?,?,?)", [body.username,body.password,body.creator] ,function (error, response) {
        if (error) {
            result(null, error);
        } else {
            result(null, response);
        }
    });
};

User.modifyUser = function modifyUser(body, result) {
    // const hashPassword = crypto.createHash('md5').update(body.password).digest("hex");
    const hashPassword = body.password;
    pool.query("call user_u(?,?,?,?,?)", [body.id_user,body.username,hashPassword,body.creator,body.id_client] ,function (error, response) {
        if (error) {
            result(null, error);
        } else {
            result(null, response);
        }
    });
};


module.exports = User;