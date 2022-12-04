class Employee {
    constructor(name,id,email,role) {
        this.name  = name;
        this.id    = id;
        this.email = email;
        this.role  = role;
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