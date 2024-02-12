const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const team = [];

function teamManagerPrompt() {
  console.log("Provide the team manager’s information");
  inquirer
    .prompt([
      { type: "input", name: "name", message: "Enter Manager's Name:" },
      {
        type: "input",
        name: "id",
        message: "Employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Email:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Office number:",
      },
    ])
    .then((answers) => {
      let manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      team.push(manager);
    });
}

function menuPrompt() {
    
}
