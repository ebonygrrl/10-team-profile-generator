// get classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// application package
const inquirer = require('inquirer');

// module.export
const templateBuilder = require('./src/templateBuilder.js');

// create file package
const fs = require('fs');

const output = [];

// array for user input
const questions = [
    {
        type: 'input',
        name: 'fname',
        message: 'Please enter team manager\'s first name.',
        validate(input) {
             if (/^[A-Z][a-z]+$/g.test(input)) {
                 return true;
             }
             throw Error('Please enter first name only.');
        },
    }, 
    {
        type: 'number',
        name: 'id',
        message: 'Please enter team manager\'s employee ID.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter team manager\'s email address.',
        validate(input) {
             if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(input)) {
                 return true;
             }
             throw Error('Please provide a valid email address.');
        },
    },
    {
        type: 'number',
        name: 'office',
        message: 'Please enter team manager\'s office number.',        
    },
    {
        type: 'list',
        name: 'addmember',
        message: 'Adding more team members? Please select employee\'s role.',
        choices: ['Engineer', 'Intern', new inquirer.Separator(), 'Finish building team'],
    },   
    {
        type: 'input',
        name: 'e_fname',
        message: 'Please enter employee\'s first name.',
        when(answers) { 
            if(answers['addmember'] === 'Engineer' || answers['addmember'] === 'Intern') {
                return true;
            }        
        },
    }, 
    {
        type: 'number',
        name: 'e_id',
        message: 'Please enter employee\'s ID.',
        when(answers) { 
            if(answers['addmember'] === 'Engineer' || answers['addmember'] === 'Intern') {
                return true;
            }        
        },
    },
    {
        type: 'input',
        name: 'e_email',
        message: 'Please enter employee\'s email address.',
        when(answers) { 
            if(answers['addmember'] === 'Engineer' || answers['addmember'] === 'Intern') {
                return true;
            }        
        },
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter employee\'s Github username.',
        validate(input) {
             if (/^\S+\w{2,32}\S{1,}/g.test(input)) {
                 return true;
             }
             throw Error('No spaces permitted and must have at least four characters.');
        },
        when(answers) { 
            if(answers['addmember'] === 'Engineer') {
                return true;
            }        
        },
    },
    {
        type: 'input',
        name: 'school',
        message: 'Please enter employee\'s college or university.',
        validate(input) {
             if (/\w{2,30}/g.test(input)) {
                 return true;
             }
             throw Error('No numbers or special characters permitted.');
        },
        when(answers) { 
            if(answers['addmember'] === 'Intern') {
                return true;
            }        
        },
    },
    {
        type: 'confirm',
        name: 'plusone',
        message: 'Do you want to add another team member?',
        default: true,
        when(answers) { 
            if(answers['addmember'] === 'Engineer' || answers['addmember'] === 'Intern') {
                return true;
            }        
        },
    },   
];

// write the file
const writeToFile = (file, data) => {
    fs.writeFile(file, data, (err) => {
        let title = data.addmember;
        let staff = '';

        if (title === 'Engineer') {
            staff = new Engineer(data.fname, data.id, data.email, data.github);
        } else if (title === 'Intern') {
            staff = new Intern(data.fname, data.id, data.email, data.school);
        } else {
            staff = new Manager(data.fname, data.id, data.email, data.office);
        } 
        
        staff.getName();
        staff.getId();
        staff.Email();
        staff.getOfficeNum();
        staff.getGithub();
        staff.getRole();

        err ? console.log(err) : console.log('Successfully created index.html!');
    });
}


//let loopInit = [...new Map(questions.map((item) => [item['name'], item])).values()]; 

// initialize app
const init = () => {    
    //console.log(loopInit);
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            //let index = (name, questions) => questions.find(val => val.name === name);
            //console.log(`console: ${index}`);
            // output.push(answers.e_fname);
            // if (answers.plusone === 'yes') {
            //     return inquirer.prompt(loopInit); 
            // } else {
            //     console.log(output);
            // }
            // data
            // const employeeContent = templateBuilder(answers);

            // writeToFile('./dist/index.html', employeeContent);            
        });
}



init();