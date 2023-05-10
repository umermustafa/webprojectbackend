// register models, set up associations between tables, and generate barrel file for the models;

const Task = require('./Task');
const Employee = require('./Employee');

Task.belongsTo(Employee);// Employee
Employee.hasMany(Task); // Task

module.exports = {
    Task,
    Employee
};
