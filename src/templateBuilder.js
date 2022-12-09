// generate icons
const icons = (role) => {
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

// get data from output array (index.js)

const templateBuilder = data => {
    // get header elements
    header();

    // build employee cards         
    let cardContainer = `
            <div class="employee-block col-lg-2 col-md-6 col-sm-12">
            <div class="employee-header">`;

    for (let i=0; i < data.length; i++) {
        
        cardContainer += `<div>${data[i].getName}</div>
                        <div>${icons(data[i].getRole)}</div>`;
        cardContainer += `</div><div class="employee-details">`;
        cardContainer += `<div>${data[i].getId}</div>
                        <div>${data[i].getEmail}</div>`;

        if (data[i].getRole === 'Manager') {

            cardContainer += `<div>${data[i].getOfficeNum}</div>`;

        } else if (data[i].getRole === 'Engineer') {

            cardContainer += `<div>${data[i].getGithub}</div>`;

        } else if (data[i].getRole === 'Intern') {

            cardContainer += `<div>${data[i].getSchool}</div>`;
        }
    }

    cardContainer += `</div></div>`;

    // get footer elements
    footer();
}

// export template
module.exports = templateBuilder;