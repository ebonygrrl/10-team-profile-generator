const inquirer = require('inquirer');

const fs = require('fs');
const { default: Prompt } = require('inquirer/lib/prompts/base');

const questions = [
    /*{
        type: 'input',
        name: 'fname',
        message: 'Please enter team manager\'s first name.'
    },
    {
        type: 'number',
        name: 'id',
        message: 'Please enter team manager\'s employee ID.'
    },*/
    {
        type: 'input',
        name: 'email',
        message: 'Please enter team manager\'s email address.',
        validate: validator,
    },
    /*{
        type: 'number',
        name: 'office',
        message: 'Please enter team manager\'s office number.'
    },
    {
        type: 'list',
        name: 'addmember',
        message: 'Please select employee\'s role.',
        choices: ['Enginner','Intern',new inquirer.Separator(),'Finish building team'],        
    },*/
];

const init = () => {
    const answer = await inquirer.prompt({
        name: 'answer',
        message: 'are you sure?'
        type: 'input',
        validate: confirmAnswerValidator
     });
     
    inquirer
        .prompt(questions)
        .then((answers) => {
            let newEmail = answers.email.toLowerCase();

            console.log(`${newEmail}`);
            
        });
}

init();

