// import Employee constructor
const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // from employee constructor
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    // override role
    getRole () {
        return "Manager";
    }
}

module.exports = Manager;