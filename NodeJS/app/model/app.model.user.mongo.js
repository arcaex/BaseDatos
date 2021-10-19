var mongo = require('mongodb')
var mongoObjectID = require('mongodb').ObjectId;
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
        dbo.collection("users").find({}).toArray(
            function(err,res){
                if (err) throw err; 
                result(null,res);
                db.close();
            }
        )
    });
};

User.deleteUser = function deleteUser(id, result) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("¡Base de datos conectada!");
        var dbo = db.db("utnTest");
        var objectId = new mongoObjectID(id);
        dbo.collection("users").deleteOne({ "_id": objectId },
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
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("¡Base de datos conectada!");
        var dbo = db.db("utnTest");
        var objectId = new mongoObjectID(body.id);
        var query = { "_id" : objectId };
        var values = { $set : { "username": body.username , "password": body.password } };
        dbo.collection("users").updateOne( query , values ,
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


module.exports = User;