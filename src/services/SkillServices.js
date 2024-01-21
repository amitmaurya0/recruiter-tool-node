const {  skills } = require('../models');

const SkillService = {};

SkillService.getSkills = async () => {
    try {
        const data = await skills.findAll({ attributes: ['id', 'skillName'] });
        if(data)
        
            return data.map(item => ({ name: item.skillName, id: item.id }));
        else
            throw('Unable to fetch skills')
    } catch (error) {
        throw('Unable to fetch skills.');
    }
}

module.exports = SkillService;


