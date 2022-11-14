const inquirer = require('inquirer');

const questions = [
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
        }
]

inquirer
    
module.exports = Questions;