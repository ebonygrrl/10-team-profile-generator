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

const staff = new Manager();

staff.role = 'Manager';
staff.office = 322;

staff.getOfficeNum();
staff.getRole();