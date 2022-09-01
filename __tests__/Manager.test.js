const Manager = require('../lib/Manager.js');
describe('sets manager', () => {
    const manager = new Manager('Dave', 4, 'dave4@example.com', '123')
    let { name, id, email, office } = manager;
    describe('sets manager settings', () => {
      it('prints manager name', () => {
        expect(name).toBe('Dave');
      });
      it('prints manager ID', () => {
        expect(id).toBe(4);
      });
      it('prints manager email', () => {
        expect(email).toBe('dave4@example.com');
      });
      it('prints manager office number', () => {
        expect(office).toBe('123');
    })
    });
});

describe('tests inherited employee functions', () => {
    it('should return manager name', () => {
        const manager = new Manager();
        expect(manager.getName()).toEqual(manager.name)
    })
    it('should return manager ID', () => {
        const manager = new Manager();
        expect(manager.getId()).toEqual(manager.id)
    })
    it('should return manager email', () => {
        const manager = new Manager();
        expect(manager.getEmail()).toEqual(manager.email)
    })
})

describe('tests getOffice', () => {
    const manager = new Manager();
    it('should return manager office number', () => {
        expect(manager.getOffice()).toEqual(manager.office)
    })
    });

describe('tests getRole', () => {
    const manager = new Manager();
    it('should return updated employee role', () => {
        expect(manager.getRole()).toEqual('manager')
    })
    });