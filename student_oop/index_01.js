import { Group } from './Group.js';
import { Student } from './Student.js';

const group = new Group();

group.addStudent(new Student('John', [10, 8]));
group.addStudent(new Student('Alex', [10, 9]));
group.addStudent(new Student('Bob', [6, 10]));

console.log(group.students.length === 3);
group.addStudent({}); // ignore adding invalid data
console.log(group.students.length === 3);

// Output the average score of the group
console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3);

try {
    group.students = [new Student('John', [10, 10, 5, 10])];
} catch(e) {
    console.log(e.message);
}

console.log(group.students.length === 3);

