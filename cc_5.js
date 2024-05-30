//U09226075

//Create employee class with name and salay.
class Employee {
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
        console.log(`Emplyee Name: ${name}`);
        console.log(`Monthly Salary: $${salary}`);
    }

//Create method to calculate annual salary.
    calculateAnnualSalary(){
        this.salary *= 12;
        console.log(`Annual Salary: $${this.salary}`);
        return this.salary;
    }
}

//Create Manager subclass that inherits from the Employee class.
class Manager extends Employee {
    constructor(name, salary, department){
        super(name, salary);
        this.department = department;
        console.log(`Department: ${department}`);
    }

//Override calculateAnnualSalary method to include a bonus.
    calculateAnnualSalary() {
        const baseSalary = super.calculateAnnualSalary();
        const bonus = .15 * baseSalary;
        const totalSalary = baseSalary + bonus;
        console.log(`Bonus: $${bonus}`);
        console.log(`Total Annual Salary: $${totalSalary}`);
        return totalSalary;
    }
}

//Initiate two manager objects  and calculate annual saleries with bonuses.
let bob = new Manager("Bob Ross", 6600, "Digital Marketing");
bob.calculateAnnualSalary();

let debbie = new Manager("Debbie Little", 7205, "Finance");
debbie.calculateAnnualSalary();