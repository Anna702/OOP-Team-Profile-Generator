// This code is to define and export the Engineer class (that inherits from Employee) with additional property of github and method getGithub().

//Child classes inherit methods like getName(), getId() and getEmail() from the parent class Employee.

const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  // getRole() method should be defined in each child class as it returns the specific role of the corresponding class ("Manager", "Engineer", "Intern").

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }
}
module.exports = Engineer;
