const Employee = require('./Employee')

class Manager extends Employee {
    constructor (name, title, salary, boss, employees){
        super(name, title, salary, boss);
        this.employees = employees;
    }
    bonus(multiplyer){
        let empArray = [];
      for (let i = 0; i < this.employees.length; i++){
          let employee = this.employees[i];
            empArray.push(employee.salary);
      }
      const total = empArray.reduce((ac, el) => {
          return ac + el;
      })
      return total * multiplyer;
    }
}

const one = new Employee('one', 'peon', 1000, 'Ted');
const two = new Employee('two', 'peon', 2000, 'Ted');
const three = new Employee('three', 'peon', 3000, 'Ted');

let array = [one, two, three];

const theMan = new Manager('Manny', 'Manager', 10000000, 'no', array);
console.log(theMan.bonus(2));
