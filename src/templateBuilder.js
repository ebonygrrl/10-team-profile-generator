// generate icons
const icons = (addmember) => {
    let title = addmember;
    let icon = '';

    if (title === 'Engineer') {
        icon = `<i class="fa-solid fa-glasses"></i> ${title}`;
    } else if (title === 'Intern') {
        icon = `<i class="fa-solid fa-user-graduate"></i> ${title}`;
    } else {
        icon = `<i class="fa-solid fa-mug-hot"></i> Manager`;
    }
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
    return `</body>
</html>`;
}

// get data from output array (index.js)
const card = data => {
    console.log(data);
//     let htmlOutput = `
// <div class="employee-block col-lg-2 col-md-6 col-sm-12">
// <div class="employee-header">`;

//     for (let i=0; i < data.length; i++) {

//     }
    
//     let icon = icons(data.addmember);

//  `   
// <div>${data.fname}</div>
// <div>${icon} ${data.title}</div>
// </div>
// <div class="employee-details">
// <div>${data.id}</div>
// <div>${data.email}</div>
// <div>${data.office}</div>
// <div>${data.github}</div>
// <div>${data.school}</div>
// </div>
// </div>
// </main>
// </div>`;

// return output;
} 

// const templateBuilder = (data) => {
//     header();
//     card(data);
//     footer();
// }

card();

// export template
module.exports = card;