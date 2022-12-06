const Intern = require('../lib/Intern');


describe('Intern class', () => {
    it('should output employee information', () => {
        const name = "Tori";
        const id = 1;
        const email = 'email@email.com';
        const school = 'SIU';
        const staff = new Intern('Tori',1,'email@email.com','SIU');
        
        expect(name).toEqual(staff.name);
        expect(id).toEqual(staff.id);
        expect(email).toEqual(staff.email);  
        expect(school).toEqual(staff.school);      
    });

    describe('getSchool', () => {
        it('returns school name if value uses letters only', () => {
            const school = 'SIU';
            const staff = new Intern('Tori',1,'email@email.com','SIU');

            expect(staff.getSchool()).toBe(school);
        });
        it('returns error message if school name has numbers or special characters', () => {
            const error = 'Please remove any numbers or special characters.';

            const staff = new Intern('Tori',1,'email@emailcom','S8&');

            expect(staff.getSchool()).toBe(error);
        });
    });

});