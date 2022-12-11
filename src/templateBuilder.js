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
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
        <link rel="stylesheet" href="./assets/css/normalize.css" />
        <link rel="stylesheet" href="./assets/css/style.css" />
        <title>My Team</title>
    </head>
    <body>
        <header><h1>My Team</h1></header>
        <div class="container">
        <main>`;
}

// generate footer for index.html
const footer = () => {
    return `
        </main>
        </div>
    </body>
</html>`;
}

// get info from inquirer
const templateBuilder = data => {
    
    // get header elements
    header();

    // build employee cards    
    let staff = '';

    let cardContainer = `
            <div class="employee-block col-lg-2 col-md-6 col-sm-12">
            <div class="employee-header">`;

    for (let i=0; i < data.length; i++) {
        // store each iteration in variable
        staff = data[i];

        cardContainer = `
            <div class="employee-block col-lg-2 col-md-6 col-sm-12">
            <div class="employee-header">`;
        
        cardContainer += `<h2>${staff.getName()}</h2>
                          <h3>${icons(staff.getRole())}</h3>`;
        cardContainer += `</div>
                          <div class="employee-details">`;
        cardContainer += `<div>${staff.getId()}</div>
                          <div><a href="mailto:${staff.getEmail()}">${staff.getEmail()}</a></div>`;
        
        let position = staff.getRole();

        switch(position) {
            case 'Manager':
                cardContainer += `<div>${staff.getOfficeNum()}</div>`;
                break;

            case 'Engineer':
                cardContainer += `<div>${staff.getGithub()}</div>`;
                break;

            case 'Intern':
                cardContainer += `<div>${staff.getSchool()}</div>`;
                break;
        }

        cardContainer += `</div></div>`;
    }

    // get footer elements
    footer();
}

// export template
module.exports = templateBuilder;