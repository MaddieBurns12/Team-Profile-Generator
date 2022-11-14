// extend 'employee'

// in addition, engineer has:

// github: github username
// getGithub()
// getRole() = overridden to return Engineer

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() { 
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;