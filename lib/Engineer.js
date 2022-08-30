// import Employee constructor
const Employee = require ("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        // from employee constructor
        super (name, id, email);

        this.github = github;
    }

    getGithub () {
        return this.github;
    }

    // override role
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer;