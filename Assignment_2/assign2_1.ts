let student: [name:string, score:number][] = [["John", 85], ["Jane", 62], ["Joan", 78], ["Jill", 48], ["Jack", 55]];
let grade: string;
for (let [name, score] of student) {
    if (score >= 80 && score <= 100) {
        grade = "A";
    } else if (score >= 70 && score < 80) {
        grade = "B";
    } else if (score >= 60 && score < 70) {
        grade = "C";
    } else if (score >= 50 && score < 60) {
        grade = "D";
    } else if (score >= 0 && score < 50) {
        grade = "F";
    } else {
        grade = "Invalid Score";
    }
    console.log(`${name} recieved ${score} and grade ${grade}`);
}