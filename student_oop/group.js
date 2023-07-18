import { Student } from './Student.js';
export class Group {
    #students = [];

    addStudent(student) {
        if (this.#isStudent(student)) {
            this.#students.push(student);
        }
    }

    #isStudent(student) {
        return student instanceof Student;
    }

    getAverageMark() {
        return this.getAverageMarksSum() / this.#students.length;
    }

    getAverageMarksSum() {
        return this.#students.reduce((total, student) => total + student.getAverageMark(), 0);
    }

    get students() {
        return [...this.#students];
    }
}

const group = new Group();

const student1 = new Student('John', [10, 8, 9]);
const student2 = new Student('Alex', [10, 9, 8]);
const student3 = new Student('Bob', [6, 10, 9]);

group.addStudent(student1);
group.addStudent(student2);
group.addStudent(student3);

console.log(`Number of students in the group: ${group.students.length}`);

group.addStudent({});

console.log(`Number of students in the group after trying to add invalid data: ${group.students.length}`);

console.log(`Average score of the group: ${group.getAverageMark()}`);

try {
    group.students = [new Student('John', [10, 10, 5, 10])];
} catch (error) {
    console.log(`Error caught: ${error.message}`);
}
console.log(`Number of students in the group after trying to modify students array: ${group.students.length}`);
