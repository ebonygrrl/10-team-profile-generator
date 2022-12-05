const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name,id,email,office) {
        super(name,id,email);
        this.office = office;        
        this.role  = 'Manager';
    }

    getOfficeNum() {
        console.log(this.office);
    }
}

module.exports = Manager;