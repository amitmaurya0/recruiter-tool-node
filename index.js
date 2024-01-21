var express= require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config()

var port = process.env.PORT || 8001;
var sequelize = require('./config/database');

var appRoutes = require('./src/route');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(cors({credentials: true, origin: true}));
appRoutes(app);
sequelize.sync({  }).then(() => {
  app.listen(port, function(){
    console.log("Running on port : "+port);
  })
})


