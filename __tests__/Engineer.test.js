const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    it('returns true if github info matches', () => {
        const staff = new Engineer('Tori',1,'email@email.com','ebonygrrl');
        
        expect(staff.github).toEqual('ebonygrrl');      
    });

    describe('getGithub', () => {
        it('returns true if username is valid', () => {
            const staff = new Engineer('Tori',1,'email@email.com','ebonygrrl');

            expect(staff.getGithub()).toBe('ebonygrrl');
        });
        it('returns false if username with no spaces', () => {
            const staff = new Engineer('Tori',1,'email@emailcom','ebony grrl');

            expect(staff.getGithub()).toBe('ebonygrrl');
        });
    });

    describe('getRole', () => {
        it('returns true if valid', () => {
            const staff = new Engineer('Tori',1,'email@emailcom','ebonygrrl');

            expect(staff.getRole()).toBe('Engineer');
        });
    });

});