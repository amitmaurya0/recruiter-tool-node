const validator = require("validator");

// Function to calculate the computed score
const calculateScore = (nodeJsExperience, reactJsExperience) => {
    // Implement your scoring logic here
    // For simplicity, assuming each year of experience adds a score of 1
    const nodeJsScore = getExperienceScore(nodeJsExperience);
    const reactJsScore = getExperienceScore(reactJsExperience);
    return nodeJsScore + reactJsScore;
  };
  
// Function to get the experience score based on years of experience
const getExperienceScore = (years) => {
    if (years < 1) return 1;
    if (years >= 1 && years <= 2) return 2;
    return 3;
};


const validateUser = (name, email, phone) => {
 

  // Validate name
  if (!validator.isLength(name, { min: 1 })) {
    throw new Error('Name is required.');
  }

  // Validate email
  if (!validator.isEmail(email)) {
    throw new Error('Invalid email address.');
  }

  // Validate phone number
  if (!validator.isMobilePhone(phone, 'en-IN', { strictMode: false })) {
    throw new Error('Invalid phone number.');
  }

  return true;
};

module.exports = { calculateScore, validateUser }