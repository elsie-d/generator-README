// TODO: Include packages needed for this application
const inquire = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input
const questions =
        [{
            type: 'input',
            message: 'What is the tilte of your project?',
            name: 'title',
            validate: (title) => {
                if (title) {
                    return true
                }
                else {
                    return 'Value entry required'
                }
            }
        },
        {
            type: 'input',
            message: 'Please share a brief description of your project',
            name: 'description',
            validate: (description) => {
                if (description) {
                    return true
                }
                else {
                    return 'Value entry required'
                }
            }
        },
        {
            type: 'input',
            message: 'Any installation requirements? (Type N/A if none required)',
            name: 'installation',
            validate: (installation) => {
                if (installation) {
                    return true
                }
                else {
                    return 'Value entry required'
                }
            }
        },
        {
            type: 'input',
            message: 'What do we need to know for usage?',
            name: 'usage',
            validate: (usage) => {
                if (usage) {
                    return true
                }
                else {
                    return 'Value entry required'
                }
            }
        },
        {
            type: 'input',
            message: 'How can others contribute?',
            name: 'contributions',
            validate: (contributions) => {
                if (contributions) {
                    return true
                }
                else {
                    return 'Value entry required'
                }
            }
        },
        {
            type: 'input',
            message: 'How can we test the project?',
            name: 'tests',
            validate: (test) => {
                if (test) {
                    return true
                }
                else {
                    return 'Value entry required'
                }
            }
        },
        {
            type: 'list',
            message: 'Chose a license for your application:',
            choices: ['MIT', 'ISC', 'GNU General Public License v3.0', 'Apache 2.0 License', 'None'],
            name: 'license'
            
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'gitUser',
            validate: (gitUser) => {
                if (gitUser) {
                    return true
                }
                else {
                    return 'Value entry required'
                }
            }
        },
        {
            type: 'input',
            message: 'What is you email address?',
            name: 'email',
            validate: (email) => {
                if (email) {
                    return true
                }
                else {
                    return 'Value entry required'
                }
            }
        },
        
        
    ]
        
   

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err)=>
    err ? console.log(err): console.log(`README file is ready`)
    )
  }

// const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions).then((answers) => {
      writeToFile("README_DEMO_3.md", generateMarkdown({ ...answers }));
    });
  }

// Function call to initialize app
init(); 
