//U09226075

//Create employee class with name and salay.
class Employee {
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
        console.log(`Emplyee Name: ${name}`);
        console.log(`Monthly Salary: ${salary}`);
    }

//Create method to calculate annual salary.
    calculateAnnualSalary(){
        this.salary *= 12;
        console.log(`Annual Salary: ${this.salary}`);
        return;
    }
}
