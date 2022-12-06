// application package
const inquirer = require('inquirer');

// module.export
const exportInfo = require('./src/templateBuilder.js');

// create file package
const fs = require('fs');

// array for user input
const questions = [
    {
        type: 'input',
        name: 'fname',
        message: 'Please enter team manager\'s first name.'
    },
    {
        type: 'number',
        name: 'id',
        message: 'Please enter team manager\'s employee ID.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter team manager\'s email address.'
    },
    {
        type: 'number',
        name: 'office',
        message: 'Please enter team manager\'s office number.'
    },
    {
        type: 'list',
        name: 'addmember',
        message: 'Please select employee\'s role.',
        choices: ['Enginner','Intern',new inquirer.Separator(),'Finish building team'],        
    },
];

// initialize app
const init = () => {     
    inquirer
        .prompt(questions)
        .then((answers) => {
            const employeeContent = templateBuilder(answers);

            writeToFile('./dist/index.html', employeeContent);            
        });
}

init();

