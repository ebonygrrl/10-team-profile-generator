const Manager = require('../lib/Manager');

describe('Manager class', () => {
    it('returns true if employee information matches', () => {
        const staff = new Manager('Tori',1,'email@email.com',482);
        
        expect(staff.name).toEqual('Tori');
        expect(staff.id).toEqual(1);
        expect(staff.email).toEqual('email@email.com'); 
        expect(staff.office).toEqual(482);      
    });

    describe('getOfficeNum', () => {
        it('returns true if not blank', () => {
            const staff = new Manager('Tori',1,'email@email.com',482);

            expect(staff.getOfficeNum()).toBe(482);
        });
    });

    describe('getRole', () => {
        it('returns true if Manager', () => {
            const staff = new Manager('Tori',1,'email@email.com',482);

            expect(staff.getRole()).toBe('Manager');
        });
    });

});