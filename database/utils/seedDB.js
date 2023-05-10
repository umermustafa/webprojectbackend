const { Employee, Task } = require('../models');

const seedDB = async () => {
    const dummyEmployee = await Employee.create({
        firstname: "Melissa",
        lastname: "Lynch",
        department: "Computer Science"
    });
    const dummyEmployee2 = await Employee.create({
        firstname: "Ioannis",
        lastname: "Stamos"
    });

    const dummyTask = await Task.create({
        description: "Teaching",
        prioritylevel: "Medium",
        completionstatus: "On Going"
    });

    await dummyTask.setEmployee(dummyEmployee);

}

module.exports = seedDB;