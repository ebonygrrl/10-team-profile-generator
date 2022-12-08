const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email); 
        this.office = office;
    }

    // TODO: limit ID number to 3 digits
    getOfficeNum() {
        let number = this.office;
        number = Math.min(999, Math.max(0, number));
        //console.log(number);

        return number;
    }    

    getRole() {
        return 'Manager';
    }
}

// const staff = new Manager('Tori',1,'email@email.com',482);
// staff.getOfficeNum();

module.exports = Manager;

