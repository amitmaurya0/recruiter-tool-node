var candidates  = require('./candidates');
var routes = require('express').Router();


routes.get('/', candidates.getCandidates);
routes.get('/:candidateId', candidates.getCandidateDetail);
routes.post('/:candidateId?', candidates.saveDetails);



module.exports = routes;
