// import Employee constructor
const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        // from employee constructor
        super (name, id, email);

        this.school = school;
    }

    getSchool () {
        return this.school;
    }

    // override role
    getRole () {
        return "Intern";
    }
}

module.exports = Intern;