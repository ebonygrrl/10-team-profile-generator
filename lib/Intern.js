const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name,id,email);
        this.school = school;
    }

    // TODO: Letters only
    getSchool() {
        let valid = /[A-Z][a-z]/g;
        let school = this.school;

        if (!school.match(valid)) {
            alert('Please remove any numbers or special characters.');
        } else {
            return school;
        }
    }

    getRole() {
        return 'Intern';
    }
}

//const staff = new Intern('Tori',1,'email@email.com','SIU');
//staff.getSchool();

module.exports = Intern;