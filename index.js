// application package
const inquirer = require('inquirer');

// module.export
const templateBuilder = require('./src/templateBuilder.js');

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
// write the file
const writeToFile = (file,data) => {
    fs.writeFile(file,data,(err) => {
        let title = data.addmember;
        let staff = '';

        if (title === 'Engineer') {
            staff = new Engineer(data.fname, data.id, data.email, data.github);
        } else if (title === 'Intern') {
            staff = new Intern(data.fname, data.id, data.email, data.school);
        } else {
            staff = new Manager(data.fname, data.id, data.email, data.office);
        }
    //err ? console.log(err) : console.log('Successfully created README.md!')); 
    });
}

// initialize app
const init = () => {     
    inquirer
        .prompt(questions)
        .then((answers) => {
            // data
            const employeeContent = templateBuilder(answers);

            writeToFile('./dist/index.html', employeeContent);            
        });
}

init();

