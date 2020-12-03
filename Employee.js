class Employee {
    constructor (name, title, salary, boss){
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.boss = boss;
    }
    bonus(multiplyer){
        let nonManBonus = this.salary * multiplyer;
        return nonManBonus;
    }
}

module.exports = Employee;
