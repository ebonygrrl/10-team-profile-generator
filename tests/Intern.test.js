const { default: expect } = require('expect');
const { describe, it } = require('jest-circus');
const Intern = require('../lib/Intern');


describe('Intern class', () => {
    it('should output employee information', () => {
        const name = "Tori";
        const id = 1;
        const email = 'email@email.com';
        const github = 'SIU';
        const staff = new Intern('Tori',1,'email@email.com','SIU');
        
        expect(name).toEqual(staff.name);
        expect(id).toEqual(staff.id);
        expect(email).toEqual(staff.email);  
        expect(github).toEqual(staff.github);      
    });

    describe('getSchool', () => {
        it('returns true if office number is less than 4 digits', () => {
            const staff = new Intern('Tori',1,'email@email.com',482);

            expect(staff.getSchool()).toBe(true);
        });
        it('returns false if office number is more than 3 digits', () => {
            const staff = new Intern('Tori',1,'email@emailcom',1000);

            expect(staff.getSchool()).toBe(false);
        });
    });

});