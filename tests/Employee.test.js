const Employee = require('../lib/Employee');


describe('Employee class', () => {
    it('should output employee information', () => {
        const name = "Tori";
        const id = 1;
        const email = 'email@email.com';
        const staff = new Employee('Tori',1,'email@email.com');
        
        expect(staff.name).toEqual(name);
        expect(staff.id).toEqual(id);
        expect(staff.email).toEqual(email);        
    });

    describe('getName', () => {
        it('returns employee\'s first name', () => {
            const name = "Tori";
            const staff = new Employee('Tori',1,'email@email.com');

            expect(staff.getName()).toBe(name);
        });
        it('returns employee\'s first name and capitalized', () => {
            const name = "Tori";
            const staff = new Employee('tori booker',1,'email@email.com');

            expect(staff.getName()).toBe(name);
        });
    });

    describe('getId', () => {
        it('returns true if number is 0-99', () => {
            const id = 55;
            const staff = new Employee('Tori',55,'email@email.com');

            expect(staff.getId()).toBe(id);
        });
        it('returns false if number higher than 99', () => {
            const id = 99;
            const staff = new Employee('tori booker',101,'email@email.com');

            expect(staff.getId()).toBe(id);
        });
    });

    describe('getEmail', () => {
        it('returns email address if email is valid', () => {
            const email = 'abooker77@yahoo.com';
            const staff = new Employee('Tori',1,'abooker77@yahoo.com');

            expect(staff.getEmail()).toBe(email);
        });
        it('returns error message if email is invalid', () => {
            const error = 'Invalid email.';
            const staff = new Employee('Tori',1,'email@emailcom');

            expect(staff.getEmail()).toBe(error);
        });
        it('returns error message if email is invalid', () => {
            const error = 'Invalid email.';
            const staff = new Employee('Tori',1,'emailemail.com');

            expect(staff.getEmail()).toBe(error);
        });
    });

});