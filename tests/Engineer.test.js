const { default: expect } = require('expect');
const { describe, it } = require('jest-circus');
const Engineer = require('../lib/Engineer');


describe('Engineer class', () => {
    it('should output employee information', () => {
        const name = "Tori";
        const id = 1;
        const email = 'email@email.com';
        const github = 'ebonygrrl';
        const staff = new Engineer('Tori',1,'email@email.com','ebonygrrl');
        
        expect(name).toEqual(staff.name);
        expect(id).toEqual(staff.id);
        expect(email).toEqual(staff.email);  
        expect(github).toEqual(staff.github);      
    });

    describe('getGithub', () => {
        it('returns true if office number is less than 4 digits', () => {
            const staff = new Engineer('Tori',1,'email@email.com',482);

            expect(staff.getGithub()).toBe(true);
        });
        it('returns false if office number is more than 3 digits', () => {
            const staff = new Engineer('Tori',1,'email@emailcom',1000);

            expect(staff.getGithub()).toBe(false);
        });
    });

});