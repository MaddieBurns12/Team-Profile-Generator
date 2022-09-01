const Intern = require('../lib/Intern.js');
describe('sets intern', () => {
    const intern = new Intern('Dave', 3, 'dave3@example.com', 'NC State')
    let { name, id, email, school } = intern;
    describe('sets intern settings', () => {
      it('prints intern name', () => {
        expect(name).toBe('Dave');
      });
      it('prints intern ID', () => {
        expect(id).toBe(3);
      });
      it('prints intern email', () => {
        expect(email).toBe('dave3@example.com');
      });
      it('prints intern school', () => {
        expect(school).toBe('NC State');
    })
    });
});

describe('tests inherited employee functions', () => {
    it('should return intern name', () => {
        const intern = new Intern();
        expect(intern.getName()).toEqual(intern.name)
    })
    it('should return intern ID', () => {
        const intern = new Intern();
        expect(intern.getId()).toEqual(intern.id)
    })
    it('should return intern email', () => {
        const intern = new Intern();
        expect(intern.getEmail()).toEqual(intern.email)
    })
})