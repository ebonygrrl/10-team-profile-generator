const Employee = require('./Employee.test.js');

class Manager extends Employee {
    constructor(name,id,email,role,office) {
        super(name,id,email,role);
        this.office = office;
    }

    getOfficeNum() {
        console.log(this.office);
    }
}

const staff = new Manager('Tori',1,'email@email.com','Manager',322);

staff.getOfficeNum();