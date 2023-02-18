// alert("sss");
// array use to info
let arrayOfEmployeeFromLocalStorage = [];

//create a constructor to generate an employee object
function Employee(fullName, department, level, imageURL) {
    this.employeeID = 0000;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
}
//create a prototype function for calculating the salary  

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
    //calculate the net salary where the tax percent is 7.5.
    let salaryAfterTax = salary - salary * tax;
    return salaryAfterTax;
}

//create a render prototype function
const render = function () {

    getInfoFromLocalStorage();
    // return document.write(`<table style="border: 1px solid black; border-collapse: collapse;">
    //                         <tr style="background-color: #8ac5ff;">
    //                         <th style="border: 1px solid black;width: 200px; height: 50px; ">Full Name</th>
    //                         <th style="border: 1px solid black;width: 200px; height: 50px; ">Salary</th>
    //                         </tr>
    //                         <tr>
    //                         <td style="border: 1px solid black;width: 200px; height: 50px; text-align: center; "><p>${this.fullName}</p></td>
    //                         <td style="border: 1px solid black;width: 200px; height: 50px;text-align: center;"><p>${this.salary()} $ </p></td>
    //                           </tr>
    //                      </table>
    //                      `)
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // 1. create the element
    // 2. append it to it's parent
    // 3. add text content to it || attribuates

    const sectionEmEl1 = document.getElementById('Finance');
    const sectionEmEl2 = document.getElementById('Development');
    const sectionEmEl3 = document.getElementById('Marketing');
    const sectionEmEl4 = document.getElementById('Administration');


    sectionEmEl1.innerHTML = "";
    sectionEmEl2.innerHTML = "";
    sectionEmEl3.innerHTML = "";
    sectionEmEl4.innerHTML = "";
    for (const item of arrayOfEmployeeFromLocalStorage) {
       
        let sec;
        switch (item.department) {
            case 'Finance': {
                sec = sectionEmEl1
            } break;
            case 'Development': {
                sec = sectionEmEl2
            } break;
            case 'Marketing': {
                sec = sectionEmEl3
            } break;
            case 'Administration': {
                sec = sectionEmEl4
            } break;
        }
        const Card = document.createElement('div');
        sec.append(Card);
        Card.style.backgroundColor = "#8ac5ff"
        Card.style.width = "300px";
        Card.style.height = "400px";
        Card.style.border = "1px solid black";
        Card.style.borderRadius = "10px";
        Card.style.overflow = "hidden";
        Card.style.marginRight = "25px"
        Card.style.display = 'flex';
        Card.style.flexDirection = "column"
        Card.style.alignItems = 'center';

        // Card.setAttribute('style', 'background-Color:red');

        const imgEl = document.createElement('img');
        Card.append(imgEl);
        imgEl.setAttribute('src', item.imageURL);
        imgEl.width = "250";
        imgEl.height = "250";
        imgEl.style.marginTop = '10px';
        imgEl.style.borderRadius = '20%'
        // imgEl.style.margin='5px 5px 5px 5px'
        const p1El = document.createElement('p');
        Card.append(p1El);
        p1El.textContent = `Name:${item.fullName}-ID:${item.employeeID}`
        p1El.style.fontSize = "16px"
        p1El.style.textAlign = 'center'
        p1El.style.marginTop = '10px'

        const p1E2 = document.createElement('p');
        Card.append(p1E2);
        p1E2.textContent = `Deperatment:${item.department}-Level:${item.level}`
        p1E2.style.fontSize = "16px"
        p1E2.style.textAlign = 'center'
        p1E2.style.marginTop = '10px'
        const p1E3 = document.createElement('p');
        Card.append(p1E3);
        p1E3.textContent = `${item.salary}`
        p1E3.style.fontSize = "16px"
        p1E3.style.textAlign = 'center'
        p1E3.style.marginTop = '10px'
    }
}

//function to generate a unique four digits employee id number

Employee.prototype.ID = function () {
    return this.employeeID = generateEmployeeId();
}


function generateEmployeeId() {
    let id = "";
    const digits = "0123456789";
    for (let i = 0; i < 4; i++) {
        id += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    return id;
    //There is another solution
    // const now = new Date();
    // const id = now.getTime().toString().substr(-4);
    // return id;
}

//create employees instances
// let e1 = new Employee('Ghazi Samer', 'Administration', 'Senior', "data:image/jpeg;base64,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");
// let e2 = new Employee('Lana Ali', 'Finance', 'Senior', "url");
// let e3 = new Employee( 'Tamara Ayoub', 'Marketing', 'Senior', "url");
// let e4 = new Employee( 'Safi Walid', 'Administration', 'Mid-Senior', "url");
// let e5 = new Employee( 'Omar Zaid', 'Development', 'Senior', "url");
// let e6 = new Employee( 'Rana Saleh', 'Development', 'Junior', "url");
// let e7 = new Employee( 'Hadi Ahmad', 'Finance', 'Mid-Senior', "url");

//This array was used to control the instances
// let employeeArray = [e1, e2, e3, e4, e5, e6, e7];

//This loop was used to generate 7 renders
// for (let i = 0; i <= 7; i++) {
//     employeeArray[i].ID();
//     employeeArray[i].render();

// }

//Events
let employeeForm = document.getElementById('employeeForm');
employeeForm.addEventListener('submit', addEmployeeHandler)

function addEmployeeHandler(event) {

    const nameField = document.getElementById('name');

    // console.log(event.target.name.value);
    event.preventDefault();
    let fullname = event.target.name.value;
    let deperatmentSelect = document.querySelector('#Departments');
    let departmentOutput = deperatmentSelect.options[deperatmentSelect.selectedIndex].value;
    let levelSelect = document.querySelector('#Levels');
    let levelOutput = levelSelect.options[levelSelect.selectedIndex].value;
    let img = event.target.imgPath.value || './assets/1231410.png';

    let objForSaveItemInLocalStorage =

       

        getInfoFromLocalStorage();
    if (fullname) {
        let newEmployee = new Employee(fullname, departmentOutput, levelOutput, img);
        
        
        nameField.style.borderColor = '#000';
        objForSaveItemInLocalStorage = { employeeID: newEmployee.ID(),fullName: fullname, department: departmentOutput, level: levelOutput, imageURL: img, salary: newEmployee.salary() };
        saveInfoInLocalStorage(objForSaveItemInLocalStorage);
        render();
    } else {
        // nameField.focus();
        nameField.style.borderColor = 'red';
    }

}

function saveInfoInLocalStorage(info) {
    arrayOfEmployeeFromLocalStorage.push(info);
    localStorage.setItem("arrayOfEmployeeFromLocalStorage", JSON.stringify(arrayOfEmployeeFromLocalStorage))
   
}

function getInfoFromLocalStorage() {
    let s = localStorage.getItem('arrayOfEmployeeFromLocalStorage');
    let a = JSON.parse(s)
    if (s)
        arrayOfEmployeeFromLocalStorage = [...a];
    else null;
    
}



render();
