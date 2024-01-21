
const { validateUser } = require('../../Utils');
const CandidateService = require('../../services/CandidateService');


const candidates = {};

candidates.getCandidates = async (req, res) => {
    try {
        const resp = await CandidateService.getCandidates();
        res.json({ status: true, candidates: resp })
    } catch (error) {
        res.json({ status: false, message: error.message })
    }
}
candidates.getCandidateDetail = async (req, res) => {
    try {
        const { candidateId } = req.params;
        const resp = await CandidateService.getCandidate(candidateId);
        res.json({ status: true, details: resp })
    } catch (error) {
        res.json({ status: false, message: error.message })
    }
}
candidates.saveDetails = async (req, res) => {
    try {
        const { candidateId } = req.params;
        const { name, email, phone, highestEducation, nodeExperience, reactExperience, currentStatus, comment, skillIds } = req.body;
        //validate a valid name, email and phone
        validateUser(name, email, phone);
        
        const data = { name, email, phone, highestEducation, nodeExperience, reactExperience, currentStatus, comment }
        console.log(candidateId);
        if(!!candidateId) {
            console.log("Inside update", candidateId)
            const fields = ['name', 'email', 'phone', 'highestEducation', 'nodeExperience', 'reactExperience', 'currentStatus', 'comment']
            const resp = CandidateService.update(candidateId, data, fields);
            const skillResp = CandidateService.insertSkills(skillIds, candidateId);
            res.json({ status: true, message: 'Candidate updated successfully.' })
        } else {
           
            const resp = await CandidateService.create(data);
            const skillResp = await CandidateService.insertSkills(skillIds, resp.id);
            res.json({ status: true, message: 'Candidate created successfully.' })
        }
    } catch (error) {
        res.json({ status: false, message: error.message })
    }
}

module.exports = candidates;