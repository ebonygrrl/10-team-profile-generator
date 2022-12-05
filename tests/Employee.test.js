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

    // describe('getId', () => {
    //     it('returns true if number is valid', () => {
    //         const staff = new Employee('Tori',1,'email@email.com');

    //         expect(staff.getId()).toBe(true);
    //     });
    //     it('returns false if number not valid', () => {
    //         const staff = new Employee('tori booker',101,'email@email.com');

    //         expect(staff.getId()).toBe(false);
    //     });
    // });

    // describe('getEmail', () => {
    //     it('returns true if email is valid', () => {
    //         const staff = new Employee('Tori',1,'email@email.com');

    //         expect(staff.getEmail()).toBe(true);
    //     });
    //     it('returns false if email not valid', () => {
    //         const staff = new Employee('Tori',1,'email@emailcom');

    //         expect(staff.getEmail()).toBe(false);
    //     });
    //     it('returns false if email not valid', () => {
    //         const staff = new Employee('Tori',1,'emailemail.com');

    //         expect(staff.getEmail()).toBe(false);
    //     });
    // });

});