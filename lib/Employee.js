const inquirer = require('inquirer');

class Employee {
    constructor(name,id,email) {
        this.name  = name;
        this.id    = id;
        this.email = email;
    }

    // TODO: First name only, no spaces, capitalized
    getName() {
        let valid = /^[A-Z][a-z]+$/g;
        let fname = this.name;
        let newName = '';

        if(!fname.match(valid)) {
            if(fname.match(/\s/)) {
                let arr = fname.split(' ');
                newName = arr[0];          
                newName = newName.charAt(0).toUpperCase() + newName.slice(1);
            } else {           
                newName = fname.charAt(0).toUpperCase() + fname.slice(1);
            }
        } else {
            newName = this.name;
        }
        return newName;
    }

    getId(min,max) {
        if() {
            
        }
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

const staff = new Employee('Tori',1,'email@email.com');
staff.getName();

module.exports = Employee;