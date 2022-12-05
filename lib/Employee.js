const inquirer = require('inquirer');

class Employee {
    constructor(name,id,email) {
        this.name  = name;
        this.id    = id;
        this.email = email;
        this.role  = 'Employee';
    }

    getName() {
        console.log(this.name);
    }

    getId() {
        console.log(this.id);
    }

    getEmail() {
        console.log(this.email);
    }

    getRole() {
        console.log(this.role);
    }
}

//const staff = new Employee('Tori',1,'email@email.com','Employee');

module.exports = Employee;