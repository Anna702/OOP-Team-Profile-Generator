// this code is to define and export the Manager class (that inherit from Employee)with additional property of officeNumber.

//Child classes inherit methods like getName(), getId() and getEmail() from the parent class Employee.

const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // getRole() method should be defined in each child class as it returns the specific role of the corresponding class ("Manager", "Engineer", "Intern").

  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
