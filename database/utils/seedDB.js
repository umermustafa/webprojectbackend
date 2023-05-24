const { Employee, Task } = require('../models');

const seedDB = async () => {
    const dummyEmployee1 = await Employee.create({
        firstname: "Justin",
        lastname: "Lee",
        department: "Accounting"
    });
    const dummyEmployee2 = await Employee.create({
        firstname: "Kevin",
        lastname: "James",
        department: "Payroll"
    });

    const dummyTask1 = await Task.create({
        description: "Credit Reports",
        prioritylevel: "Medium",
        completionstatus: "On Going"
    });

    const dummyTask2 = await Task.create({
        description: "Processing Payments",
        prioritylevel: "High",
        completionstatus: "On Going"
    });

    await dummyTask1.setEmployee(dummyEmployee1);
    await dummyTask2.setEmployee(dummyEmployee2);

}

module.exports = seedDB;