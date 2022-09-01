

// employee parent class with the following properties and methods:

// name
// id
// email
// getName()
// getID()
// getEmail()
// getRole() = returns 'employee'

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "employee";
    }
    getName() {
      return this.name;
    }
    getId() {
      return this.id;
    }
    getEmail() {
      return this.email;
    }
    getRole() {
      return this.role;
    }
  }
  
module.exports = Employee;