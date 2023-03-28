const questionContainer = document.querySelector("#questionContainer");
class question {
    constructor(question, answers, answerNumber) {
        this.question = question;
        this.answers = answers;
        this.answerNumber = answerNumber;
    }
}
let q1 = new question("What is 2+2 ?", ["2", "4", "42"], 2);
let q2 = new question("What is 3+3 ?", ["6", "9", "8"], 1);
let q3 = new question("What is 5+5 ?", ["55", "25", "10"], 3);

let questionArray = [q1, q2, q3];

initQuestion(q1);

console.log(questionArray);

function initQuestion(question)
{
    let newQuestion = document.createElement('li');
    newQuestion.textContent = '' + question.question + '';
    questionContainer.appendChild(newQuestion);
}

