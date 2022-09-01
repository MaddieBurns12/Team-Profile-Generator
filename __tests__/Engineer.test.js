const Engineer = require('../lib/Engineer.js');
describe('sets engineer', () => {
    const engineer = new Engineer('Dave', 2, 'dave2@example.com', 'davegitexample@github.com')
    let { name, id, email, github } = engineer;
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
      it('prints employee github', () => {
        expect(github).toBe('davegitexample@github.com');
    })
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

describe('tests getGithub', () => {
    const engineer = new Engineer();
    it('should return employee github', () => {
        expect(engineer.getGithub()).toEqual(engineer.github)
    })
    });

describe('tests getRole', () => {
    const engineer = new Engineer();
    it('should return updated employee role', () => {
        expect(engineer.getRole()).toEqual('engineer')
    })
    });