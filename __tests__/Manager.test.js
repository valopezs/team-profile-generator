// manager constructor
const Manager = require('../lib/Manager');

// create manager object
test('creates a Manager object', () => {
    const manager = new Manager('Valeria', 99, 'valeriabrilopez@gmail.com', 2);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// get role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Valeria', 99, 'valeriabrilopez@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 