const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}

//const staff = new Intern('Tori',1,'email@email.com','Intern','s5%');
//staff.getSchool();

module.exports = Intern;