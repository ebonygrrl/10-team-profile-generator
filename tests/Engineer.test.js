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
        it('returns GitHub username if username is valid', () => {
            const github = 'ebonygrrl';
            const staff = new Engineer('Tori',1,'email@email.com','ebonygrrl');

            expect(staff.getGithub()).toBe(github);
        });
        it('returns username with no spaces', () => {
            const github = 'ebonygrrl';
            const staff = new Engineer('Tori',1,'email@emailcom','ebony grrl');

            expect(staff.getGithub()).toBe(github);
        });
        it('returns false if username is blank', () => {
            const staff = new Engineer('Tori',1,'email@emailcom','');

            expect(staff.getGithub()).toBe(false);
        });
    });

});