const { default: expect } = require('expect');
const { describe, it } = require('jest-circus');
const Employee = require('../lib/Employee');


describe('Employee class', () => {
    it('should output employee information', () => {
        const name = "Tori";
        const id = 1;
        const email = 'email@email.com'
        const staff = new Employee('Tori',1,'email@email.com');
        
        expect(name).toEqual(staff.name);
        expect(id).toEqual(staff.id);
        expect(email).toEqual(staff.email);        
    });

    describe('getName', () => {
        it('checks first name has been entered', () => {
            const staff = new Employee('Tori',1,'email@email.com');

            expect(staff.getName()).toBe(true);
        });
    });

});