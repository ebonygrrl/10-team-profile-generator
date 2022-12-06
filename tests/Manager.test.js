const Manager = require('../lib/Manager');


describe('Manager class', () => {
    it('should output employee information', () => {
        const name = "Tori";
        const id = 1;
        const email = 'email@email.com';
        const office = 482;
        const staff = new Manager('Tori',1,'email@email.com',482);
        
        expect(name).toEqual(staff.name);
        expect(id).toEqual(staff.id);
        expect(email).toEqual(staff.email);  
        expect(office).toEqual(staff.office);      
    });

    describe('getOfficeNum', () => {
        it('returns office number if less than 4 digits', () => {
            const office = 482;
            const staff = new Manager('Tori',1,'email@email.com',482);

            expect(staff.getOfficeNum()).toBe(office);
        });
        it('returns 999 if office number is more than 3 digits', () => {
            const office = 999;
            const staff = new Manager('Tori',1,'email@emailcom',1000);

            expect(staff.getOfficeNum()).toBe(office);
        });
    });

});