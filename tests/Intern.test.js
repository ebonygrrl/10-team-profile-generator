const Employee = require('./Employee.test.js');

class Intern extends Employee {
    constructor(name,id,email,role,school) {
        super(name,id,email,role);
        this.school = school;
    }

    getSchool() {
        console.log(this.school);
    }
}

const staff = new Intern('Tori',1,'email@email.com','Intern','SIUC');

staff.getSchool();