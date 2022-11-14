const inquirer = require('inquirer');
const fs = require("fs");
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');


function storeEmployeeData(data) {
    const { name, id, email, github, school, office } = data;
    if (data.role === 'Manager') {
        return new Manager(name, id, email, office);
    }
    if (data.role === 'Intern') {
        return new Intern(name, id, email, school);
    }
    if (data.role === 'Engineer') {
        return new Engineer(name, id, email, github);
    }
}



function createCard(employee) {
const getSpecificQuestion = () => {
    if(employee.role === 'Engineer') {
        return employee.getGithub();
    }
    if (employee.role === 'Intern') {
        return employee.getSchool();
    }
    if (employee.role === 'Manager') {
        return employee.getOffice();
    }
}
const specificQuestion = getSpecificQuestion();

const findSpecificPrefix = () => {
    if(employee.role === 'Engineer'){
        return `Github:`
    }
    if(employee.role === 'Intern') {
        return `School:`
    }
    if(employee.role === 'Manager'){
        return `Office Number:`
    }
}
const specificPrefix = findSpecificPrefix();
        return `
  <div class="card">
  <div class="card-header">
    <div class="name">${employee.name}</div>
    <div class="role">${employee.role}</div>
  </div>
  <div class="card-body">
    <div class="id">${employee.id}</div>
    <div class="email">${employee.email}</div>
    <div class="specific-question">${specificPrefix}${specificQuestion}</div>
  </div>
</div>
`;
}
function generateHtml(data) {
    const employeeCards = [];
    for (const x of data) {
        const card = createCard(x);
        employeeCards.push(card);
    }

    return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile Generator</title>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./src/styles.css" />
    </head>
    <body>${employeeCards}</body>
  </html>`;
}



    inquirer
    .prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the name of the employee?'
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is the ID of the employee?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is the email of the employee?'
        },
        {
           type: 'list',
           name: 'role',
           message: 'What is the role of the employee?',
           choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'text', 
            name: 'office',
            message: 'What is the office number of the employee?',
            when: (ans) => ans.role === 'Manager',
        },
        {
            type: 'text', 
            name: 'school',
            message: 'What is the attended school of the employee?',
            when: (ans) => ans.role === 'Intern',
        },
        {
            type: 'text', 
            name: 'github',
            message: 'What is the github username of the employee?',
            when: (ans) => ans.role === 'Engineer',
        },
        {
            type: 'confirm', 
            name: 'redo',
            message: 'Would you like to add another employee?',
        }
    ]
    )
    .then((data) => {
        fs.writeFileSync(
          `./dist/index.html`,
          generateHtml([storeEmployeeData(data)])
        );
      })
      .catch((err) => {
        console.log(err);
      });

