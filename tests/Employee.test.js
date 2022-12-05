const { default: expect } = require('expect');
const { describe, it } = require('jest-circus');
const Employee = require('../lib/Employee');


describe('Employee class', () => {
    it('should output employee information', () => {
        const name = "Tori";
        const id = 1;
        const email = 'email@email.com';
        const staff = new Employee('Tori',1,'email@email.com');
        
        expect(name).toEqual(staff.name);
        expect(id).toEqual(staff.id);
        expect(email).toEqual(staff.email);        
    });

    describe('getName', () => {
        it('returns true if first name valid', () => {
            const staff = new Employee('Tori',1,'email@email.com');

            expect(staff.getName()).toBe(true);
        });
        it('returns false if first name not valid', () => {
            const staff = new Employee('tori booker',1,'email@email.com');

            expect(staff.getName()).toBe(false);
        });
    });

    describe('getId', () => {
        it('returns true if number is valid', () => {
            const staff = new Employee('Tori',1,'email@email.com');

            expect(staff.getId()).toBe(true);
        });
        it('returns false if number not valid', () => {
            const staff = new Employee('tori booker',101,'email@email.com');

            expect(staff.getId()).toBe(false);
        });
    });

    describe('getEmail', () => {
        it('returns true if email is valid', () => {
            const staff = new Employee('Tori',1,'email@email.com');

            expect(staff.getEmail()).toBe(true);
        });
        it('returns false if email not valid', () => {
            const staff = new Employee('Tori',1,'email@emailcom');

            expect(staff.getEmail()).toBe(false);
        });
        it('returns false if email not valid', () => {
            const staff = new Employee('Tori',1,'emailemail.com');

            expect(staff.getEmail()).toBe(false);
        });
    });

});