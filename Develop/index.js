// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("./utils/generateMarkdown.js");
const Choices = require("inquirer/lib/objects/choices");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your ReadMe?"
      },
      {
        type: "input",
        name: "description",
        message: "What is your description for the ReadMe?"
      },
      {
        type: "input",
        name: "installation",
        message: "What are your ReadMe installation instructions?"
      },
      {
        type: "input",
        name: "usage",
        message: "What are your 'How to Use' instructions?"
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use with your ReadMe?",
        Choices:[
          "Apache-2.0",
          "Boost 1.0",
          "ISC",
          "MIT"

        ]
    },
        {
        type: "list",
        name: "color",
        message: "What color would you like your badge?",
        Choices:[
          "blue",
          "red",
          "yellow",
          "green"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "What is your GitHub username?"
    },
    {
         type: "input",
         name: "tests",
        message: "How to test your ReadMe?"
    },
    {
        type: "input",
        name: "questions",
       message: "Questions for your ReadMe?"
   },
]  

// function to write README file
function writeToFile("README.md", init, err {
  if(err){
    console.log(err);
  }else{
    console.log("You are good to go!");
  }
}); 

// function to initialize program
function init() {

}

// function call to initialize program
init();
