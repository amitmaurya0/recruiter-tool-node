
var modules =require('./modules');

module.exports = function(app){
	app.use('/api/v1/', modules);
}