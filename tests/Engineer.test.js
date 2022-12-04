const Employee = require('./Employee.test.js');

class Engineer extends Employee {
    constructor(name,id,email,role,github) {
        super(name,id,email,role);
        this.github = github;
    }

    getGithub() {
        console.log(this.github);
    }
}

const staff = new Engineer('Tori',1,'email@email.com','Engineer','ebonygrrl');

staff.getGithub();