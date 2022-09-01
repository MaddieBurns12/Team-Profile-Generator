const Employee = require('../lib/Employee');
describe('sets employee', () => {
    const employee = new Employee('Dave', 1, 'dave@example.com', 'employee');
    let { name: name, id: id, email: email, role: role} = employee
    describe('sets employee settings', () => {
      it('prints employee name', () => {
        expect(name).toBe('Dave');
      });
      it('prints employee ID', () => {
        expect(id).toBe(1);
      });
      it('prints employee email', () => {
        expect(email).toBe('dave@example.com');
      });
      it('prints employee role', () => {
        expect(role).toBe('employee');
      });
    });
});
describe('tests getName', () => {
    const employee = new Employee();
    it('should return employee name', () => {
        expect(employee.getName()).toEqual(employee.name)
    })
    });
describe('tests getID', () => {
    const employee = new Employee();
    it('should return employee ID', () => {
        expect(employee.getId()).toEqual(employee.id)
    })
    });
describe('tests getEmail', () => {
    const employee = new Employee();
    it('should return employee email', () => {
        expect(employee.getEmail()).toEqual(employee.email)
    })
    });
describe('tests getRole', () => {
    const employee = new Employee();
    it('should return employee role', () => {
        expect(employee.getRole()).toEqual(employee.role)
    })
    });
