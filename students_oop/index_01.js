import Group from './group.js';
import Student from './student.js';
import './polyfill.js';

const group = new Group();
const studentListElement = document.getElementById('student-list');
const groupAverageElement = document.getElementById('group-average');
const studentNameInput = document.getElementById('student-name');
const studentScoresInput = document.getElementById('student-scores');
const addStudentBtn = document.getElementById('add-student-btn');

addStudentBtn.addEventListener('click', function () {
    const name = studentNameInput.value;
    const scoresInput = studentScoresInput.value;
    const scores = scoresInput.split(',').map(Number);

    if (name && scores.length > 0) {
        const student = new Student(name, scores);
        group.addStudent(student);
        renderStudent(student);
        renderGroupAverage();
        clearInputs();
    }
});

function renderStudent(student) {
    const studentDiv = document.createElement('div');
    studentDiv.classList.add('student');

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('student-name');
    nameDiv.textContent = student.name;

    const averageMarkDiv = document.createElement('div');
    averageMarkDiv.classList.add('average-mark');
    averageMarkDiv.textContent = 'Средний балл: ' + student.getAverageMark().toFixed(2);

    studentDiv.appendChild(nameDiv);
    studentDiv.appendChild(averageMarkDiv);
    studentListElement.appendChild(studentDiv);
}

function renderGroupAverage() {
    const average = group.getAverageMark().toFixed(2);
    groupAverageElement.textContent = 'Среднее по группе: ' + average;
}

function clearInputs() {
    studentNameInput.value = '';
    studentScoresInput.value = '';
}
