const express = require('express');

app = express();

app.listen(3000,function(){console.log("API Inicializada en el Puerto:3000");});

const routes_user = require('./app/routes/app.route.user');

routes_user(app);

module.exports=app;