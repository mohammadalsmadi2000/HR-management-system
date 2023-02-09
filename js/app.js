// alert("sss");

function Employee(employeeID, fullName, department, level, imageURL, salary) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
}

Employee.prototype.salary = function () {
    let max, min, tax = 0.075;
    switch (this.level) {
        case 'Junior': {
            max = 1000;
            min = 500;
        } break;
        case 'Mid-Senior': {
            max = 1500;
            min = 1000;
        } break;
        case 'Senior': {
            max = 2000;
            min = 1500;
        } break;
    }
    let salary = Math.floor(Math.random() * (max - min) + min);
    console.log(`salary : ${salary}`);
    let salaryAfterTax = salary - salary * tax;
    console.log(`salaryAfterTax : ${salaryAfterTax}`);
    return salaryAfterTax;
}

Employee.prototype.render = function () {
    return document.write(`<table style="border: 1px solid black; border-collapse: collapse;">
                            <tr style="background-color: #8ac5ff;">
                            <th style="border: 1px solid black;width: 200px; height: 50px; ">Full Name</th>
                            <th style="border: 1px solid black;width: 200px; height: 50px; ">Salary</th>
                            </tr>
                            <tr>
                            <td style="border: 1px solid black;width: 200px; height: 50px; text-align: center; "><p>${this.fullName}</p></td>
                            <td style="border: 1px solid black;width: 200px; height: 50px;text-align: center;"><p>${this.salary()} $ </p></td>
                              </tr>
                         </table>
                         `)
}


let e1 = new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', "url");
let e2 = new Employee(1001, 'Lana Ali', 'Finance', 'Senior', "url");
let e3 = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', "url");
let e4 = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', "url");
let e5 = new Employee(1004, 'Omar Zaid', 'Development', 'Senior', "url");
let e6 = new Employee(1005, 'Rana Saleh', 'Development', 'Junior', "url");
let e7 = new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', "url");

let employeeArray = [e1, e2, e3, e4, e5, e6, e7];

for (let i = 0; i <= 6; i++) {
    employeeArray[i].render();
    document.write("<br>");
}
console.log(e1.salary())