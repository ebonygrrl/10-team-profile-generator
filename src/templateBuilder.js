// generate icons
const icons = role => {
    let icon = '';

    if (role === 'Engineer') {
        icon = `<i class="fa-solid fa-glasses"></i> ${role}`;
    } else if (role === 'Intern') {
        icon = `<i class="fa-solid fa-user-graduate"></i> ${role}`;
    } else {
        icon = `<i class="fa-solid fa-mug-hot"></i> ${role}`;
    }

    return icon;
}

// generate header for index.html
const header = () => {
    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.2/css/bootstrap-grid.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
        <link rel="stylesheet" href="./css/normalize.css" />
        <link rel="stylesheet" href="./css/style.css" />
        <title>My Team</title>
    </head>
    <body>
        <header><h1>My Team</h1></header>
        <div class="container">
        <main class="row">`;
}

// generate footer for index.html
const footer = () => {
    return `
        </main>
        </div>
    </body>
</html>`;
}

const employeeCard = data => {
    // build employee cards   
    let card = '';

    for (let i=0; i < data.length; i++) {
        // store iteration to variable
        let staff = data[i];

        card += `
            <div class="employee-block col-lg-4 col-md-6 col-sm-12">
            <div class="employee-header">`;
        
        card += `<h2>${staff.getName()}</h2>
                <h3>${icons(staff.getRole())}</h3>`;
        card += `</div>
                <div class="employee-details">`;
        card += `<div>${staff.getId()}</div>
                <div><a href="mailto:${staff.getEmail()}">${staff.getEmail()}</a></div>`;
        
        let position = staff.getRole();

        switch(position) {
            case 'Manager':
                card += `<div>${staff.getOfficeNum()}</div>`;
                break;

            case 'Engineer':
                card += `<div><a href="https://github.com/${staff.getGithub()}">Github</a></div>`;
                break;

            case 'Intern':
                card += `<div>${staff.getSchool()}</div>`;
                break;
        }

        card += `</div></div>`;
    }

    return card;
}

// get info from inquirer
const templateBuilder = data => {
    let container = `${header()}    
    ${employeeCard(data)}    
    ${footer()}`;

    return container;
}

// export template
module.exports = templateBuilder;