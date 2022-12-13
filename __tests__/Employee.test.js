const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it('should output employee information', () => {
        const staff = new Employee('Tori',1,'email@email.com');
        
        expect(staff.name).toEqual('Tori');
        expect(staff.id).toEqual(1);
        expect(staff.email).toEqual('email@email.com');     
    });

    describe('getName', () => {
        it('returns employee\'s first name', () => {
            const staff = new Employee('Tori',1,'email@email.com');

            expect(staff.getName()).toBe('Tori');
        });
        it('returns employee\'s first name and capitalized', () => {
            const staff = new Employee('tori booker',1,'email@email.com');

            expect(staff.getName()).toBe('Tori');
        });
    });

    describe('getId', () => {
        it('returns true if number', () => {
            const staff = new Employee('Tori',55,'email@email.com');

            expect(staff.getId()).toBe(55);
        });
    });

    describe('getEmail', () => {
        it('returns email address if email is valid', () => {
            const staff = new Employee('Tori',1,'tori@usa.com');

            expect(staff.getEmail()).toBe('tori@usa.com');
        });
    });

    describe('getRole', () => {
        it('returns Employee role if valid', () => {
            const staff = new Employee('Tori',1,'tori@usa.com');

            expect(staff.getRole()).toBe('Employee');
        });
    });

});