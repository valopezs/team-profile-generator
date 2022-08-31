// engineer constructor
const Engineer = require('../lib/Engineer');

// create engineer object
test('creates an engineer object', () => {
    const engineer = new Engineer('Valeria', 99, 'valeriabrilopez@gmail.com', 'valopezs');

    expect(engineer.github).toEqual(expect.any(String));
});

// get github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Valeria', 99, 'valeriabrilopez@gmail.com', 'valopezs');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// get role from getRole()
test('gets role of employee', () => {
    const engineer = new Engineer('Valeria', 99, 'valeriabrilopez@gmail.com', 'valopezs');

    expect(engineer.getRole()).toEqual("Engineer");
});