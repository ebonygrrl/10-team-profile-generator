const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
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

    // TODO: limit ID number to 2 digits
    getId() {
        let number = this.id;
        number = Math.min(99, Math.max(0, number));
        //console.log(number);

        return number;
    }

    // TODO: validate email
    getEmail() {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let email = this.email;

        if(!email.match(regex)) {
            return 'Invalid email.';
        } 

        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

//const staff = new Employee('Tori',1,'email@email.com');
//staff.getEmail();

module.exports = Employee;