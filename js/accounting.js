
let arrayOfEmployeeFromLocalStorage = [];
const departments = [
    {
        name: "Finance",
        employees: [

        ]
    },
    {
        name: "Development",
        employees: [

        ]
    },
    {
        name: "Marketing",
        employees: [

        ]
    }, {
        name: "Administration",
        employees: [

        ]
    }
];

function getInfoFromLocalStorage() {
    let s = localStorage.getItem('arrayOfEmployeeFromLocalStorage');
    let a = JSON.parse(s)
    if (s)
        arrayOfEmployeeFromLocalStorage = [...a];
    else null;

    for (const el of arrayOfEmployeeFromLocalStorage) {
        switch (el.department) {
            case 'Finance': {
                for (const dep of departments) {
                    if (dep.name == "Finance") {
                        dep.employees.push({ name: el.fullName, salary: el.salary });
                    };
                }
            } break;
            case 'Development': {
                for (const dep of departments) {
                    if (dep.name == "Development") {
                        dep.employees.push({ name: el.fullName, salary: el.salary });
                    };
                }
            } break;
            case 'Marketing': {
                for (const dep of departments) {
                    if (dep.name == "Marketing") {
                        dep.employees.push({ name: el.fullName, salary: el.salary });
                    };
                }
            } break;
            case 'Administration': {
                for (const dep of departments) {
                    if (dep.name == "Administration") {
                        dep.employees.push({ name: el.fullName, salary: el.salary });
                    };
                }
            } break;
        }
    }

}
getInfoFromLocalStorage();


const conainer = document.getElementById('department-information');

const table = document.getElementById("department-table");

const headerRow = document.createElement("tr");

const nameHeader = document.createElement("th");
nameHeader.textContent = "Department Name";
headerRow.appendChild(nameHeader);

const employeeHeader = document.createElement("th");
employeeHeader.textContent = "Number of Employees";
headerRow.appendChild(employeeHeader);

const averageSalaryHeader = document.createElement("th");
averageSalaryHeader.textContent = "Average Salary";
headerRow.appendChild(averageSalaryHeader);

const totalSalaryHeader = document.createElement("th");
totalSalaryHeader.textContent = "Total Salary";
headerRow.appendChild(totalSalaryHeader);

table.appendChild(headerRow);

let NumberOfAllEmployees = 0;
let AverageOfAllSalary = 0;
let totalOfAllSalary = 0;

for (const department of departments) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = department.name;
    row.appendChild(nameCell);

    const employeeCountCell = document.createElement("td");
    employeeCountCell.textContent = department.employees.length;
    row.appendChild(employeeCountCell);

    const totalSalary = department.employees.reduce((total, employee) => total + employee.salary, 0);
    const averageSalary = totalSalary / department.employees.length || 0;

    NumberOfAllEmployees += department.employees.length;
    totalOfAllSalary += totalSalary;
    AverageOfAllSalary += averageSalary;


    const averageSalaryCell = document.createElement("td");
    averageSalaryCell.textContent = `$${averageSalary.toFixed(2)}`;
    row.appendChild(averageSalaryCell);

    const totalSalaryCell = document.createElement("td");
    totalSalaryCell.textContent = `$${totalSalary.toFixed(2)}`;
    row.appendChild(totalSalaryCell);

    table.appendChild(row);
}
const s = document.createElement("tr");

const a = document.createElement("td");
a.textContent = `Total`;
s.appendChild(a);

const d = document.createElement("td");
d.textContent = `${NumberOfAllEmployees}`;
s.appendChild(d);

const f = document.createElement("td");
f.textContent = `$${AverageOfAllSalary}`;
s.appendChild(f);

const c = document.createElement("td");
c.textContent = `$${totalOfAllSalary}`;
s.appendChild(c);
table.appendChild(s);