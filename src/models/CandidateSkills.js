const Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    const CandidatesSkills = sequelize.define('candidate_skills', {
      id: {  type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      candidateId: { type: Sequelize.INTEGER },
      skillId: { type: Sequelize.INTEGER },
      experience: { type: Sequelize.FLOAT },
    });

    /* CandidatesSkills.sync({ force: true }).then(()=>{
      console.log("Packages Table Created.");
    }) */
  
    return CandidatesSkills;
  }; 