const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name,id,email);
        this.school = school;
    }

    getSchool() {
        let valid = /^[A-Z][a-z]+$/g;
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

//const staff = new Intern('Tori',1,'email@email.com','SIU');
//staff.getSchool();

module.exports = Intern;