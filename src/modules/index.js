
var router      = require('express').Router();
var candidates        = require('./candidates');

var skills  = require('./skills');

router.use('/candidates', candidates);
router.use('/skills', skills);


module.exports = router;
