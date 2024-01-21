var skills  = require('./skills');
var routes = require('express').Router();


routes.get('/', skills.getSkills);



module.exports = routes;
