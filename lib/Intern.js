const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}

//const staff = new Intern('Tori',1,'email@email.com','SIU');
//staff.getSchool();

module.exports = Intern;