// this code is to define and export the Intern class (that inherit from Employee) with additional property of school and getSchool() method.

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  //Child classes inherit methods like getName(), getId() and getEmail() from the parent class Employee.

  // getRole() method should be defined in each child class as it returns the specific role of the corresponding class ("Manager", "Engineer", "Intern").

  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
