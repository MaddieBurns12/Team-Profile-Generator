// extend 'employee'

// in addition, engineer has:

// github: github username
// getGithub()
// getRole() = overridden to return Engineer

const Employee = require('./Employee');

class Engineer extends Employee {
    
    getRole() { 
        return 'engineer';
    }
}

module.exports = Engineer;