const Sequelize = require('sequelize')

const dbName = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;


// const database = new Sequelize(dbName, user, password, {
//   host: process.env.DB_HOST,
//   port: port,
//   dialect: 'mysql', 
//   logging: false,
//   dialectOptions: {
//     ssl: {
// 		rejectUnauthorized: false
// 	},
//   },
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000,
//   },

//   // SQLite only
//   // storage: 'path/to/database.sqlite'
// });

  // Or you can simply use a connection uri
var database = new Sequelize(process.env.DATABASE_URL,{
	dialect: "mysql",
	"dialectOptions": {
		"ssl": {
			rejectUnauthorized: false
		},
	},
	logging: false,
	sync: true 
  });
module.exports  = database; 
