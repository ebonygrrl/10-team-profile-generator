const { default: expect } = require('expect');
const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('should output employee information', () => {
        const name = "Tori";
        const id = 1;
        const email = 'email@email.com'
        const staff = new Employee('Tori',1,'email@email.com');
        
        expect(name).toEqual(staff.name);
        expect(id).toEqual(staff.id);
        expect(email).toEqual(staff.email);        
    });
});