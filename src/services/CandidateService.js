const { calculateScore } = require('../Utils');
const { candidates, skills, candidate_skills, sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

const CandidateService = {};

CandidateService.getCandidates = async () => {
    try {
        const data = candidates.findAll();
        if(data)
            return data;
        else
            throw new Error('Unable to fetch candidates')
    } catch (error) {
        throw new Error('Unable to fetch candidates.');
    }
}

CandidateService.getCandidate = async (candidateId) => {
    try {
        const data = await candidates.findOne({ where: { id: candidateId } });
        if(data){
            const candidateSkills = await sequelize.query(
                `select cs.id, cs.skillId, skills.skillName as name from candidate_skills cs
                    LEFT JOIN skills ON skills.id = cs.skillId
                    WHERE cs.candidateId = ${candidateId}
                `,
                { type: QueryTypes.SELECT }
                );
             const details = data.toJSON();
            const candidateScore = calculateScore(details.nodeExperience, details.reactExperience);
            return {
                ...details,
                candidateSkills,
                candidateScore
            }
        } else
            throw new Error('Unable to fetch candidate')
    } catch (error) {
        console.log(error);
        throw new Error('Unable to fetch candidate.');
    }
}

CandidateService.create = async function(data) {
    try {
        console.log(data);
      const resp = await candidates.create(data);
      if(resp) {
        return resp;
      } else {
        throw new Error('Unable to create candidate.');
      }
    } catch (error) {
        console.log(error);
        throw new Error('Unable to create candidate.');
    }
}

CandidateService.update = async function(id, data, fields) {
    try {
      const resp = await candidates.update(data,{
                                                where: { id },
                                                fields: fields
                                              }
                                        );
      if(resp[0] == 1) {
        return true;
      } else {
        throw new Error('Unable to update candidate.');
      }
    } catch (error) {
        throw new Error('Unable to update candidate.');
    }
}

CandidateService.insertSkills = async function(skillIds, candidateId) {
    try {
        const skills = skillIds.split(",");
        // deleting the old skills
        await candidate_skills.destroy({ where: { candidateId } })
        //creating an array for bulk create again for inserting the skills
        const cretaeSkills = skills.map(item => ({ skillId: item, candidateId }))
        const resp = await candidate_skills.bulkCreate(cretaeSkills);
        if(resp) {
            return true;
        } else {
            throw new Error('Unable to update candidate skills.');
        }
    } catch (error) {
        console.log(error);
        throw new Error('Unable to update candidate skills.');
    }
}


  


module.exports = CandidateService;