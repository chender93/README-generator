const inquirer = require("inquirer");
const fs = require("fs");
const generateREADME = require("./readme-template.js");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username? (Required)",
        validate: gitHubInput => {
            if (gitHubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub name!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "And your email address? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "projectTitle",
        message: "What is the name of your project? (Required)",
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log("Please enter your project's name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Nice! Tell us more about your project."
    },
    {
        type: "list",
        name: "license",
        message: "How is your project licensed?",
        choices: ["My project does not have a license", "Apache License 2.0", "GNU GPLv3", "MIT", "ISC License"]
    },
    {
        type: "input",
        name: "install",
        message: "Please place installation instructions here:"
    },
    {
        type: "input",
        name: "usage",
        message: "How is your project used?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Name any contibutors here:"
    },
    {
        type: "input",
        name: "testing",
        message: "How can someone test your app out?"
    },
];

// // function to write README file
function writeToFile(fileName, questions) {
    fileName = fs.writeFile("pre-filled_README.md", generateREADME(questions), function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Your new README has been created");
        }
    });
};

// function to initialize program
const init = () => {
    return inquirer.prompt(questions)
    .then(data => {
        writeToFile("pre-filled_README.md", data);
    });
};

// function call to initialize program
init();
