
const SkillServices = require('../../services/SkillServices');


const skills = {};

skills.getSkills = async (req, res) => {
    try {
        const resp = await SkillServices.getSkills();
        res.json({ status: true, skills: resp })
    } catch (error) {
        res.json({ status: false, message: error.message })
    }
}

module.exports = skills;