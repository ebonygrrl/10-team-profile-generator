// get classes
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// generate header for index.html
const header = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.2/css/bootstrap-grid.min.css" />
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
<link rel="stylesheet" href="./assets/css/normalize.css" />
<link rel="stylesheet" href="./assets/css/style.css" />
<title>My Team</title>
</head>`;
}

// generate footer for index.html
const footer = () => {
    return `</body>
</html>`;
}

const body = () => {

} 

// export template
module.exports = template;