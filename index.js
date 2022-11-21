//--Packages needed for this application--
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

//--Creating an array of questions for user input--
const questions = [
    // --Getting github username--
    {
        type: 'input',
        message: 'Please enter your Github username.',
        name: 'username'
    },

    //--Getting repository name--
    {
        type: 'input',
        message: 'Enter the name of the desired repositiory.',
        name: 'repo'
    },

    //--Getting user email address--
    {
        type: 'input',
        message: 'Enter an email address people can contact you about this project.',
        name: 'email'
    },

    //--Getting project title--
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle'
    },

    //--Getting project description--
    {
        type: 'input',
        message: 'Please describe the function of your project.',
        name: 'description'
    },

    //--Needed installations--
    {
        type: 'input',
        message: `What additional installations would a user need to successfully run this application (dependencies,etc..)?
        (To Skip, press ENTER.) `,
        name: 'installation'
    },
    
    //--Useage information-- 
    {
        type: 'input',
        message: 'How is this application used? Give instructions in detail.',
        name: 'instructions'
    },

    //--License used--
    {
        type: 'list',
        message: 'What license would you want this project to use?',
        choices: ['MIT', 'Apache 2.0', 'Mozilla', 'GNU', 'Eclipse', 'None'],
        name: 'license'
    },

    //--Contributing--
    {
        type: 'input',
        message: `If you would like other developers to contribute to this project, please enter guidelines on how to do so.
        (To skip, press ENTER)`,
        name: 'contributing',
    },

    //--Testing--
    {
        type: 'input',
        message: 'What commands are needed to test this application? (To skip press ENTER)',
        name: 'testing'
    },
];

//--Function to write README file--
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if (err){
            return console.log(err);
        }
        console.log("Your README.mmd has been generated!!");
    });
};

const writeFile = util.promisify(writeToFile);

//--Function to initialize app--
async function init() {
    const answers = await inquirer.prompt(questions);
    console.log(answers);

    const newMarkdown = generateMarkdown(answers);
    await writeFile('README.md', newMarkdown);
}

//--Function call to initialize app--
init();
