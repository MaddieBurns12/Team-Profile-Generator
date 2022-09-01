// extend 'employee'

// in addition, manager has: 

// office number
// getRole() = overridden to return 'Manager'

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }
    getRole() { 
        return 'manager';
    }

}

module.exports = Manager; 