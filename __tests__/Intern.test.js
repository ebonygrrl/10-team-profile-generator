const Intern = require('../lib/Intern');

describe('Intern class', () => {
    it('should output employee information', () => {
        const staff = new Intern('Tori',1,'email@email.com','SIU');
        
        expect(staff.school).toEqual('SIU');      
    });

    describe('getSchool', () => {
        it('returns school name if value uses letters only', () => {
            const staff = new Intern('Tori',1,'email@email.com','SIU');

            expect(staff.getSchool()).toBe('SIU');
        });
    });

    describe('getRole', () => {
        it('returns employee role if valid', () => {
            const staff = new Intern('Tori',1,'email@email.com','SIU');

            expect(staff.getRole()).toBe('Intern');
        });
    });

});