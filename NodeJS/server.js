const express = require('express');
// const crypto = require('crypto');

app = express();
app.use(express.json())
app.listen(3000,function(){console.log("API Inicializada en el Puerto:3000");});

const routes_user = require('./app/routes/app.route.user');
const routes_user_mongo = require('./app/routes/app.route.user.mongo');

routes_user(app);
routes_user_mongo(app);

module.exports=app;