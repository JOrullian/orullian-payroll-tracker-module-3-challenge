// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const employeesArray = [];

const createEmployee = function(firstName, lastName, salary)  {
    return  {
        firstName: firstName, lastName: lastName, salary: salary,
    }
}

const collectEmployees = function() {


  // Get user input to create and return an array of employee objects

  let dataInput = true
  while (dataInput === true)    {
  const inputFirstName = prompt(`Input employee first name.`);
  const inputLastName = prompt(`Input employee last name.`);
  const inputSalary = prompt(`Input employee salary.`);

  employeesArray.push(createEmployee(inputFirstName, inputLastName, Number(inputSalary)));

  dataInput = window.confirm(`Would you like to add another employee?`);
  }
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
    const salaries = employeesArray.map(employee => employee.salary);

    let sum = 0;

    // Calculate the sum for all salaries
    for (let i = 0; i < salaries.length; i++)   {
        sum += salaries[i];
    }
    console.log(`Total Sum of Salaries: ${sum}`)
    
    //Calculate and display the average salary
    const totalSalary = salaries.reduce((acc, curr) => acc + curr, 0);
    const averageSalary = totalSalary / employeesArray.length;

    console.log(`Average Salary: ${averageSalary}`)
    return averageSalary;
  }

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector('#employee-table');
  
    // Clear the employee table
    employeeTable.innerHTML = '';
  
    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
      const currentEmployee = employeesArray[i];
  
      const newTableRow = document.createElement("tr");
  
      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = currentEmployee.firstName;
      newTableRow.append(firstNameCell);
  
      const lastNameCell = document.createElement("td");
      lastNameCell.textContent = currentEmployee.lastName;
      newTableRow.append(lastNameCell);
  
      const salaryCell = document.createElement("td");
      // Format the salary as currency
      salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
        style:"currency",
        currency:"USD"
      });
  
      newTableRow.append(salaryCell);
  
      employeeTable.append(newTableRow);

      // Display employee table in alphabetical order for lastName
      employeesArray.sort((a, b) => {
        if (a.lastName < b.lastName)    {
            return -1;
        }
        if (a.lastName > b.lastName)    {
            return 1;
        }
        return 0;
      });
    }
  }

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  //getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

addEmployeesBtn.addEventListener('click', trackEmployeeData);