const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email); 
        this.office = office;
    }

    getOfficeNum() {
        return this.office;
    } 
}

//const staff = new Manager('Tori',1,'email@email.com',482);
//console.log(staff);
// staff.getOfficeNum();

module.exports = Manager;

