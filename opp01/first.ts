let fname: string = "Kongphop";
let lname: string = "Onkham";
let course: string = "Object-Oriented Programming";
let mark1: number = 80;
let mark2: number = 75;
let mark3: number = 45;
let total: number = mark1 + mark2 + mark3;
let pass: boolean = mark1 >= 50;

console.log("Name:%s %s, \nCourse:%s, Mark:%d, \nPass:%s",fname,lname,course,total,pass);
let courses: string[] = ["Object-Oriented Programming", "Data Structure", "Database"];
let marks: number[] = [80, 75, 45];
console.log(marks);
console.log("\n");
console.log(courses[0], marks[0]);
console.log(courses[1], marks[1]);
console.log(courses[2], marks[2]);
console.log("Total mark:", marks[0]+marks[1]+marks[2]);
console.log("Average mark:", (marks[0]+marks[1]+marks[2])/3);