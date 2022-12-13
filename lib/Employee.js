class Employee {
    constructor(name, id, email) {
        this.name  = name;
        this.id    = id;
        this.email = email;
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
    
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        // get the class name of this object
        return this.constructor.name;
    }
}

// const staff = new Employee('Tori',1,'email@email.com');
// console.log(staff);
// console.log(staff.getName());
// console.log(staff.getId());
// console.log(staff.getEmail());

module.exports = Employee;