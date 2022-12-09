const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email, role) {
        this.name  = name;
        this.id    = id;
        this.email = email;
        this.role  = role;
    }

    // TODO: First name only, no spaces, capitalized
    getName() {
        let fname = this.name;
        let newName = '';
        
        if(fname.match(/\s/)) {
            let arr = fname.split(' ');
            newName = arr[0];          
            newName = newName.charAt(0).toUpperCase() + newName.slice(1);
        } else {           
            newName = fname.charAt(0).toUpperCase() + fname.slice(1);
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
        return this.email;
    }

    getRole() {
        return this.role = 'Employee';
    }
}

//const staff = new Employee('Tori',1,'email@email.com');
//staff.getEmail();

module.exports = Employee;