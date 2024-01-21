const Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    const Skills = sequelize.define('skills', {
      id: {  type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      skillName: { type: Sequelize.STRING, allowNull: false },
    });


    /* Skills.sync({ force: true }).then(()=>{
      console.log("Packages Table Created.");
    }) */
  
    return Skills;
  }; 