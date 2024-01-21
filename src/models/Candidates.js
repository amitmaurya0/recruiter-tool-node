const Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    const Candidates = sequelize.define('candidates', {
      id: {  type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
      phone: { type: Sequelize.STRING, allowNull: true },
      highestEducation: { type: Sequelize.STRING, allowNull: true },
      nodeExperience: { type: Sequelize.INTEGER, defaultValue:0 },
      reactExperience: { type: Sequelize.INTEGER, defaultValue:0 },
      expectedSalary: { type: Sequelize.INTEGER, defaultValue :0 },
      currentStatus: { type: Sequelize.ENUM, allowNull: true, values: ['IDEAL', 'CONTACTED', 'INTERVIEW SCHEDULED', 'OFFER EXTENDED', 'HIRED', 'REJECTED'], defaultValue: 'IDEAL' },
      comment: { type: Sequelize.TEXT, defaultValue: '' },
    });

    
      
    /* Candidates.sync({ alter: true }).then(()=>{
      console.log("Candidates Table Created.");
    }) */
  
    return Candidates;
  }; 