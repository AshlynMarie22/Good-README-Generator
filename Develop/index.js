// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("./utils/generateMarkdown.js");

const questions = [
  //Title:
  {
    type: "input",
    name: "title",
    message: "What is the title of your ReadMe?",
  },
  //License:
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use with your ReadMe?",
    choices: ["Apache-2.0", "Boost 1.0", "ISC", "MIT"],
  },
  {
    type: "list",
    name: "color",
    message: "What color would you like your badge?",
    choices: ["blue", "red", "yellow", "green"],
  },
  //Description:
  {
    type: "input",
    name: "description",
    message: "What is your description for the ReadMe?",
  },
  //Installation:
  {
    type: "input",
    name: "installation",
    message: "What is your github repository https?",
  },
  //How to Use:
  {
    type: "input",
    name: "usage",
    message: "What are your 'How to Use' instructions?",
  },
  //Preview Website:
  {
    type: "input",
    name: "url",
    message: "What is your website URL?",
  },
  {
    type: "input",
    name: "screenshot",
    message: "What is your preview screenshot URL?",
  },
  //Contributing:
  {
    type: "input",
    name: "contributing",
    message: "How would you like people to contribute to your repository?",
  },
  //Tests:
  {
    type: "input",
    name: "tests",
    message: "How to test your ReadMe?",
  },
  //Questions:
  {
    type: "input",
    name: "questions",
    message: "Enter your contact information for questions:",
  },
];

// function to initialize program and write file
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      console.log(data);
      fs.writeFile("README.md", util(data), function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("You are good to go!");
        }
      });
    })
    .catch((err) => {
      if (err) throw err;
    });
}

// function call to initialize program
init();
