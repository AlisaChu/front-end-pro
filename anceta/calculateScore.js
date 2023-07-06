import { QUESTIONS } from './questions.js';

export function calculateScore() {
    let score = 0;

    for(let i = 0; i < QUESTIONS.length; i++) {
        const {question, answer, type} = QUESTIONS[i];
        let userAnswer;
        if (type === 'prompt') {
            userAnswer = prompt(question);
        } else if (type === 'confirm') {
            userAnswer = confirm(question);
        }
        if(userAnswer.toString() === answer) {
            score += 10;
        }
    }

    alert(`Ваш результат: ${score} очков.`);
}
