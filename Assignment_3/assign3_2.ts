enum courseStatus {
    Open,
    Closed,
    Full
}

interface Student {
    name: string;
    id: string;
}

interface Course {
    title: string;
    code: string;
    status: courseStatus;
    enrolledStudents: Student[];
}

function enroll(course: Course, student: Student): void {
    if (course.status === courseStatus.Open) {
        course.enrolledStudents.push(student);
        console.log(`${student.name} has been enrolled in ${course.title}.`);
    } else if (course.status === courseStatus.Full) {
        console.log(`Cannot enroll ${student.name} in ${course.title}: Course is full.`);
    } else {
        console.log(`Cannot enroll ${student.name} in ${course.title}: Course is closed.`);
    }
}

enroll({ title: "Object-Oriented Programming", code: "OOP101", status: courseStatus.Closed, enrolledStudents: [] }, { name: "David", id: "S059" });