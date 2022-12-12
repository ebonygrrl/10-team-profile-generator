const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, role, office) {
        super(name, id, email, role); 
        this.office = office;
    }

    getOfficeNum() {
        return this.office;
    } 
}

//const staff = new Manager('Tori',1,'email@email.com','Manager',482);
//console.log(staff);
// staff.getOfficeNum();

module.exports = Manager;

