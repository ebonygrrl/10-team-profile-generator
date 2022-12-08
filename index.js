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

// store collected data
const output = [];

// array for user input
const managerQuestions = [
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
];

const employeeQuestions = [
    {
        type: 'list',
        name: 'addmember',
        message: 'Please select role to add another team member.',
        choices: ['Engineer', 'Intern', new inquirer.Separator(), 'Finish building team'],
    },
    {
        type: 'input',
        name: 'fname',
        message: 'Please enter employee\'s first name.',
        when(answers) { 
            if(answers['addmember'] === 'Engineer' || answers['addmember'] === 'Intern') {
                return true;
            }        
        },
    },  
    {
        type: 'number',
        name: 'id',
        message: 'Please enter employee\'s ID.',
        when(answers) { 
            if(answers['addmember'] === 'Engineer' || answers['addmember'] === 'Intern') {
                return true;
            }        
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter employee\'s email address.',
        when(answers) { 
            if(answers['addmember'] === 'Engineer' || answers['addmember'] === 'Intern') {
                return true;
            }        
        },
    },
];

const engineerQuestion = [
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
    },
];

const internQuestion = [
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
    },
];

// write the file
const writeToFile = () => {
    //collected data stored in output array
    const employeeContent = templateBuilder(output);

    //console.log(employeeContent);

    // fs.writeFile('./dist/index.html', employeeContent, (err) => {

    //     err ? console.log(err) : console.log('Successfully created index.html!');
    // });
}

// initialize app
const init = () => {
        
    // init first series of questions
    managerPrompt();
}

// get manager questions
const managerPrompt = () => {
    inquirer
        .prompt(managerQuestions)
        .then(answers => {

            const staff = new Manager (answers.fname, answers.id, answers.email, 'Manager', answers.office);

            // add responses to empty array
            output.push(staff);

            // build rest of team
            employeePrompt();   
        });
} 

// get add employee questions
const employeePrompt = () => {
    inquirer
        .prompt(employeeQuestions)
        .then(answers => {

            // get engineer info
            if (answers.addmember === 'Engineer') {
                inquirer
                    .prompt(engineerQuestion)
                    .then(response => {
                        const engineerStaff = new Engineer(answers.fname, answers.id, answers.email, 'Engineer', response.github);
                        
                        output.push(engineerStaff);
                
                        // add another team member
                        addStaff();
                    });
            } else if (answers.addmember === 'Intern') {
                inquirer
                    .prompt(internQuestion)
                    .then(response => {
                        const internStaff = new Intern(answers.name, answers.id, answers.email, 'Intern', response.school);

                        output.push(internStaff);
                
                        // add another team member
                        addStaff();
                    });
            } else {
                console.log(`output: ${JSON.stringify(output)}`);
                // handle writing html file
                writeToFile();
            }
        });
}

// add another team member to cause loop
const addStaff = () => {
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'plusone',
                message: 'Do you want to add another team member?',
                default: true,
            },  
        ]).then(answer => {
            if (answer.plusone === true) {

                // loop employee questions
                employeePrompt();
             } else {                
                //console.log(output);

                // handle writing html file
                writeToFile();  
             }
        });
}

// fire up app
init();