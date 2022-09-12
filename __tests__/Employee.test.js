const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Doug');

    //employee should have a name string etc
    expect(employee.name).toBe('Doug');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
})

test('gets employee name', () => {
    const employee = new Employee();

    //employee name should return as a string
    expect(employee.getName()).toEqual(expect.any(String));
})

test('gets employee id', () => {
    const employee = new Employee();

    //employee id should return as a string
    expect(employee.getId()).toEqual(expect.any(String));
})

test('gets employee email', () => {
    const employee = new Employee();

    //employee email should return as a string
    expect(employee.getEmail()).toEqual(expect.any(String));
})

test('gets employee role', () => {
    const employee = new Employee();

    //employee role should return employee
    expect(employee.getRole()).toEqual(expect.any(String))
})