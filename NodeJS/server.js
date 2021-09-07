const express = require('express');
// const crypto = require('crypto');

app = express();
app.use(express.json())
app.listen(3000,function(){console.log("API Inicializada en el Puerto:3000");});

const routes_user = require('./app/routes/app.route.user');

routes_user(app);

module.exports=app;