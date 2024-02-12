//This code was created to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    // Check if 'name' is a string + non-empty
    if (typeof name !== "string" || name.trim() === "") {
      throw new Error("Enter a non-empty string as a name");
    }
    // Check if 'id' is a positive number
    if (!Number.isInteger(id) && id < 0) {
      throw new Error("Enter a positive integer as id");
    }
    // Check if email has a correct format
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      throw new Error("Invalid e-mail format");
    }

    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
