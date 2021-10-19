var mongo = require('mongodb')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/utnTest";


var User = function (user) {
    this.username = user.username;
    this.password = user.password;
    this.creator = user.creator;
};

User.getlistUsers = function getlistUser(result) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err; 
        console.log("¡Base de datos conectada!"); 
        var dbo = db.db("utnTest");
        var results = dbo.collection("users").find({});
        const arrayResult = [];
        results.forEach(element => {
            arrayResult.push(element);
        });
        console.log(arrayResult);
        result(null,arrayResult);
    });
};

User.deleteUser = function deleteUser(id_user, result) {

};

User.addUser = function addUser(body, result) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("¡Base de datos conectada!");
        var dbo = db.db("utnTest");
        dbo.collection("users").insertOne({ "username": body.username, "password": body.password, "creator": body.creator },
            function (err, res) {
                if (err) {
                    result(null, err);
                } else {
                    result(null, res);
                }
                db.close();
            });
    });
};

User.modifyUser = function modifyUser(body, result) {

};


module.exports = User;