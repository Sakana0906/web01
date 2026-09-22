class Course {
    constructor (public code: string, public cname: string, public credit: number) {}
}

class Student {
    private enrolled: Course[] = [];
    constructor (public studentID: string, public sname: string) {}

    enroll(course: Course): void {
        this.enrolled.push(course);
    }
}

class Teacher {
    private _course: Course;
    constructor (public tname: string, public code: string, public cname: string, public credit: number) {
        this._course = new Course(code, cname, credit);
    }

    Grading(score: number): string {
        if (score >= 80) {
            return "A";
        } else if (score >= 70) {
            return "B";
        } else if (score >= 60) {
            return "C";
        } else if (score >= 50) {
            return "D";
        } else {
            return "F";
        }
    }

    evaluate(st: Student, score: number): void {
        console.log(`
            Teacher: ${this.tname}
            Student: ${st.studentID} ${st.sname}
            Course: ${this._course.code} ${this._course.cname}
            Score: ${score}
            Grade: ${this.Grading(score)}`);
    }
}

const t1 = new Teacher("Prof. Nady", "CS101", "Programming", 3);
const t2 = new Teacher("Prof. Natsuki", "JP101", "Japanese", 3);
const t3 = new Teacher("Dr. Mclaure", "MT101", "Derivative and Function", 3);

const st1 = new Student("68001", "AJ Dawg");
const st2 = new Student("68002", "Big Snick");

st1.enroll(t1);
st1.enroll(t2);

st2.enroll(t1);
st2.enroll(t3);

t1.evaluate(st1, 81);
t1.evaluate(st2, 46);

t2.evaluate(st1, 76);

t3.evaluate(st2, 68);