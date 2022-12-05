const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name,id,email,github) {
        super(name,id,email);
        this.github = github;  
    }
     
    getGithub() { 
        let github = this.github.toLowerCase();  
        let user = '';

        if(github.match(/\s/)) {
            user = github.replace(/\s+/g, ''); 
            //console.log(user);
        } else {               
            //console.log(github);  
            return github;
        }  
    }

    getRole() {
        return 'Engineer';
    }
}

//const staff = new Engineer('Tori',1,'email@email.com','EBONY GRRL');
//staff.getGithub();

module.exports = Engineer;