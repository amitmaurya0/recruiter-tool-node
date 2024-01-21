'use strict';

var fs        = require('fs');
var path      = require('path');
var sequelize      = require('../../config/database');
var basename  = path.basename(__filename);
const Sequelize = require('sequelize');

var db        = {};

// var a = 1;
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
    //a++;
  });

//let  b = 1;
Object.keys(db).forEach(modelName => {
  //console.log(modelName, b);
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
  //b++;
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;