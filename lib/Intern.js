const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
    }

    // TODO: Letters only
    getSchool() {
        let valid = /^[a-zA-Z]+$/g;
        let school = this.school;

        if (school.match(valid)) {
            return school;
            //console.log(school);
        } else {
            return 'Please remove any numbers or special characters.';
        }
    }

    getRole() {
        return this.role = 'Intern';
    }
}

//const staff = new Intern('Tori',1,'email@email.com','s5%');
//staff.getSchool();

module.exports = Intern;