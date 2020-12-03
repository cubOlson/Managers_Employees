const Employee = require('./Employee')

class Manager extends Employee {
    constructor (name, title, salary, boss, employees){
        super(name, title, salary, boss);
        this.employees = employees;
    }
    bonus(multiplyer){

        return multiplyer * this.totalSubsalary();
    }

    totalSubsalary() {
        let totalSal = this.salary;
        for (let i = 0; i < this.employees.length; i++) {
            let employee = this.employees[i];
            if (employee instanceof Manager) {
                totalSal += employee.totalSubsalary();
            } else {
                totalSal += employee.salary;
            }
        }
       return totalSal;
    }
}

const lily = new Employee('Lily', 'TA', 90000, "Susie")
const clifford = new Employee('Clifford', 'TA', 90000, "Susie")
const susie = new Manager('Susie', 'TA', 100000, "Calvin", [lily, clifford])
const calvin = new Manager('Calvin', 'Director', 130000, 'Hobbes', [susie])
const hobbes = new Manager('Hobbes', 'Founder', 1000000, null, [calvin])

console.log(hobbes.bonus(.05));
console.log(calvin.bonus(.05));
console.log(susie.bonus(.05));
console.log(clifford.bonus(.05));
console.log(lily.bonus(.05));

// Imagine you have a company structured like this:

// Name	    Salary	Title	    Boss
// Hobbes	1000000	Founder	    null
// Calvin	130000	Director	Hobbes
// Susie	100000	TA Manager	Calvin
// Lily	    90000	TA	Susie
// Clifford	90000	TA	Susie
