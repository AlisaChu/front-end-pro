import Student from './student.js';

class Group {
    students = [];

    addStudent(student) {
        if (this.isStudent(student)) {
            this.students.push(student);
        }
    }

    isStudent(student) {
        return student instanceof Student;
    }

    getAverageMark() {
        const averageMarksSum = this.getAverageMarksSum();
        return averageMarksSum / this.students.length;
    }

    getAverageMarksSum() {
        const sum = this.students.reduce(
            (total, student) => total + student.getAverageMark(),
            0
        );
        return sum;
    }
}

// Экспортируем класс Group
export default Group;
