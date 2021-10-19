class Company {
    constructor(){
        this.departments  = []
    }
    addEmployee(name, salary, position, department){
        if (!name || !position || !department || !salary ||salary < 0) {
            throw new Error("Invalid input!");
        }
        let employee = {name: name, salary: salary, position: position}
        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push(employee);
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    bestDepartment(){
        let bestAvrSalary = 0;
        let bestDepartment = 0;
        Object.entries(this.departments).forEach(([key, value]) => {
            let salary = 0;
            value.forEach(element => {
                salary += element.salary;
            });
            salary /= value.length;
            if(salary > bestAvrSalary){
                bestAvrSalary = salary;
                bestDepartment = key;
            }
        });
        if(bestDepartment != ''){
            let result = `Best Department is: ${bestDepartment}\n`;
            result += `Average salary: ${bestAvrSalary.toFixed(2)}\n`;
            Object.values(this.departments[bestDepartment])
            .sort((a, b) => b.salary - a.salary 
            || a.name.localeCompare(b.name)).forEach(e => {
                result += `${e.name} ${e.salary} ${e.position}\n`;
            })
            return result.trim();
        }
    }
}
let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.departments);
console.log(c.bestDepartment());
