const Engineer = require('../lib/Engineer.js');
describe('sets engineer', () => {
    const engineer = new Engineer('Dave', 2, 'dave2@example.com', 'engineer', 'davegit');
    let { name, id, email, github} = engineer;
    describe('sets engineer settings', () => {
      it('prints engineer name', () => {
        expect(name).toBe('Dave');
      });
      it('prints engineer ID', () => {
        expect(id).toBe(2);
      });
      it('prints employee email', () => {
        expect(email).toBe('dave2@example.com');
      });
    });
});

describe('tests inherited employee functions', () => {
    it('should return engineer name', () => {
        const engineer = new Engineer();
        expect(engineer.getName()).toEqual(engineer.name)
    })
    it('should return engineer ID', () => {
        const engineer = new Engineer();
        expect(engineer.getId()).toEqual(engineer.id)
    })
    it('should return engineer email', () => {
        const engineer = new Engineer();
        expect(engineer.getEmail()).toEqual(engineer.email)
    })
    it('should return engineer role', () => {
        const engineer = new Engineer();
        expect(engineer.getRole()).toEqual('engineer')
    })
})