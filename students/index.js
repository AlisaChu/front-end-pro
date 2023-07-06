const students = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
];
<<<<<<< HEAD
=======
console.log(averageStudentMark(10));
console.log(averageGroupMark(students));
>>>>>>> main

function averageStudentMark(id) {
    const student = students.find(student => student.id === id);

    if (student) {
        const sumOfMarks = student.marks.reduce((acc, mark) => acc + mark, 0);
        const averageMark = sumOfMarks / student.marks.length;
        return averageMark;
    } else {
        return 'Student not found';
    }
}

function averageGroupMark(students) {
    const allMarks = students.flatMap(student => student.marks);
    const sumOfMarks = allMarks.reduce((acc, mark) => acc + mark, 0);
    const averageMark = sumOfMarks / allMarks.length;
    return averageMark;
}

<<<<<<< HEAD
console.log(averageStudentMark(10));
console.log(averageGroupMark(students));
=======
>>>>>>> main
