const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let employees = [];
function addEmployee() {
  rl.question("Enter employee name: ", (name) => {
    rl.question("Enter employee ID: ", (id) => {
      rl.question("Enter employee salary: ", (salary) => {
        const employee = {
          id,
          name,
          salary: parseFloat(salary),
        };
        employees.push(employee);
        console.log("Employee added successfully.");
        saveDataToFile();
        displayMainMenu();
      });
    });
  });
}
function displayEmployees() {
  console.log("Employee List:");
  console.table(employees);
  displayMainMenu();
}
function displayMainMenu() {
  console.log("\nEmployee Salary Program");
  console.log("1. Add Employee");
  console.log("2. Display Employees");
  console.log("3. Exit");
  rl.question("Select an option: ", (option) => {
    switch (option) {
      case "1":
        addEmployee();
        break;
      case "2":
        displayEmployees();
        break;
      case "3":
        console.log("Exiting...");
        rl.close();
        break;
      default:
        console.log("Invalid option.");
        displayMainMenu();
    }
  });
}
function saveDataToFile() {
  const jsonData = JSON.stringify(employees, null, 2);
  fs.writeFileSync("employees.json", jsonData, "utf8");
  console.log("Data saved to employees.json");
}
displayMainMenu();
