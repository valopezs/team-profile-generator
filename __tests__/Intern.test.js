// intern constructor

// create intern object
test('creates an Intern object', () => {
    const intern = new Intern('Valeria', 99, 'valeriabrilopez@gmail.com', 'valopezs', 'UH');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// get school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Valeria', 99, 'valeriabrilopez@gmail.com', 'valopezs', 'UH');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// get role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Valeria', 99, 'valeriabrilopez@gmail.com', 'valopezs', 'UH');

    expect(intern.getRole()).toEqual("Intern");
}); 