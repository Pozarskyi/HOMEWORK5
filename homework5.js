// task1

// let mentor = {
//     course: "JS fundamental", 
//     duration: 3,
//     direction: "web-development"
// }

// function propsCount(currentObject) {
//     count = 0;
//     for(key in currentObject) {
//     count++;
//     }
//     return count;
// }

// console.log(propsCount(mentor));

// task2

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//     Timy: 150,
//     Sam: 190
// }

// function showProps(obj) {
//     const arr = [];
//     const valueArr = []

//     for(key in obj) {
//         arr.push(`${key} : ${obj[key]} `);
//         valueArr.push(obj[key]);
//     }
//     console.log(valueArr);
//     return arr;
// }

// console.log(showProps(salaries));

// task3

// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName(){
//         console.log(this.surname + " " + this.name);
//     }
// }

// class Student extends Person {
//     constructor(name, surname, year, midleName) {
//         super(name, surname);
//         this.year = year;
//     }
//     showFullName(midleName) {
//         this.midleName = midleName;
//         console.log(this.surname +" " + this.name + " " + this.midleName)
//     }
//     showCourse() {
//         let nowData = 2022;
//         let course = nowData - this.year;
    
//         if(course > 6) {
//             console.log("Congratulation, you finish study");
//         }else {
//             return 'Current course: ' + course;
//         }
//     }
// }

// const stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych"));
// console.log(stud1.showCourse());  

// task4

// class Worker {
//     #experience = 1.2

//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     }
//     showSalary() {
//         let salary = this.dayRate * this.workingDays;
//         console.log(this.fullName + " salary: " + salary);
//     }
//     showExp() {
//         return this.#experience;
//     }
//     showSalaryWithExperience() {
//         let SalaryWithExperience = (this.dayRate * this.workingDays) * this.#experience;
//         // console.log(this.fullName + " salary :" + SalaryWithExperience);
//         return SalaryWithExperience;
//     }
//     get getExp() {
//         return this.#experience;
//     }
//     set setExp(value) {
//         return this.#experience = value;
//     }

// }

// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);                 
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp());
// console.log(`${worker1.fullName} salary: ${worker1.showSalaryWithExperience()}`);
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp());
// console.log(`${worker1.fullName} salary: ${worker1.showSalaryWithExperience()}`);

// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName);                 
// worker2.showSalary();
// console.log("New experience: " + worker2.showExp());
// console.log(`${worker2.fullName} salary: ${worker2.showSalaryWithExperience()}`);
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showExp());
// console.log(`${worker2.fullName} salary: ${worker2.showSalaryWithExperience()}`);

// let worker3 = new Worker("Andy Ander", 40, 28);
// console.log(worker3.fullName);                 
// worker3.showSalary();
// console.log("New experience: " + worker3.showExp());
// console.log(`${worker3.fullName} salary: ${worker3.showSalaryWithExperience()}`);
// worker3.setExp = 1.5;
// console.log("New experience: " + worker3.showExp());
// console.log(`${worker3.fullName} salary: ${worker3.showSalaryWithExperience()}`);

// let worker4 = new Worker ("Sam Edison", 30, 30);
// worker4.setExp = 2;

// let worker5 = new Worker ("Jef Jonson", 28, 29);
// worker5.setExp = 2.3;
// const workers = [];
// workers.push(worker1, worker2, worker3, worker4);

// workers.sort((a, b) => a.getExp - b.getExp);

// workers.map((elem) => {
//     console.log(` ${elem.fullName} : ${elem.showSalaryWithExperience()}`)
// })
// task5

// class GeometricFigure {
//     getArea() {
//         return 0;
//     }
//     getToString() {
//         return Object.getPrototypeOf(this).constructor.name;
//     }
// }

// class Triangle extends GeometricFigure {
//     constructor(side, height) {
//         super();
//         this.side = side;
//         this.height = height;
//     }
//     getArea() {
//         return (this.side * this.height) * 0.5;
//     }
// }

// class Square extends GeometricFigure {
//     constructor(sideA) {
//         super();
//         this.sideA = sideA
//     }
//     getArea() {
//         return this.sideA ** 2;
//     }
// }

// class Circle extends GeometricFigure {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }
//     getArea() {
//         return Math.PI * this.radius ** 2;
//     }
// }

// function handleFigures(figures) {
//    return figures.reduce((accumulator, currentValue) => {
//         if(currentValue instanceof GeometricFigure) {
//             console.log(`Geometric figure: ${currentValue.getToString()}, area: ${currentValue.getArea()}`);
//         }
//         return accumulator + currentValue.getArea();
//    }, 0)
// };

// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
// console.log(handleFigures(figures));
