const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name,id,email,github) {
        super(name,id,email);
        this.github = github;  
    }
     
    getGithub() { 
        let github = this.github.toLowerCase(); 

        if(github.match(/\s/)) {
            github = github.replace(/\s+/g, ''); 

            return github;
            //console.log(user);
        } else if(github === '') {

            return false;
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