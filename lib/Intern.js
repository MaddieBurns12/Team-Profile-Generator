// extend 'employee'

// in addition, Intern has:

// school
// getSchool()
// getRole() = overridden to return intern

const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() { 
        return 'intern';
    }
}

module.exports = Intern;