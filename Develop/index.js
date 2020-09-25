// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("./utils/generateMarkdown.js");
// const Choices = require("inquirer/lib/objects/choices");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your ReadMe?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use with your ReadMe?",
    choices: ["Apache-2.0", "Boost 1.0", "ISC", "MIT"]
  },
  {
    type: "list",
    name: "color",
    message: "What color would you like your badge?",
    choices: ["blue", "red", "yellow", "green"],
  },
  {
    type: "input",
    name: "description",
    message: "What is your description for the ReadMe?",
  },
  {
    type: "input",
    name: "installation",
    message: "What is your github repository https?",
  },
  {
    type: "input",
    name: "usage",
    message: "What are your 'How to Use' instructions?",
  },
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
  {
    type: "input",
    name: "contributing",
    message: "How would you like people to contribute to your repository?",
  },
  {
    type: "input",
    name: "tests",
    message: "How to test your ReadMe?",
  },
  {
    type: "input",
    name: "questions",
    message: "Enter your contact information for questions:",
  },
];

// function to write README file
// function writeToFile() {
//   fs.writeFile("README.md", util(data), function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("You are good to go!");
//     }
//   });
// }

// function to initialize program
function init() {
  inquirer
  .prompt(questions)
  .then((data)=>{
    console.log(data);
    fs.writeFile("README.md", util(data), function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("You are good to go!");
      }
    });
  })
  .catch((err)=>{
    if (err) throw err;
  });
}

// function call to initialize program
init();
