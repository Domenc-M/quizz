const questionContainer = document.querySelector("#questionContainer");
const questionTitle = document.querySelector("#questionTitle");

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
let currentQuestion = 0;
let playerScore = 0;

initQuestion(q1);

console.log(questionArray);

function initQuestion(question)
{
    questionTitle.textContent = '' + question.question + '';
    let newQuestion = document.createElement('ul');
    question.answers.forEach((element, index) => {
        let button = document.createElement('li');
        button.classList.add('answer-btn');
        button.textContent = '' + element + '';
        button.setAttribute('number', index+1);
        button.addEventListener('click', selectAnswer);
        newQuestion.appendChild(button);
    });
    newQuestion.classList.add('buttons-container');
    questionContainer.appendChild(newQuestion);
}

function selectAnswer(n)
{
    if (this.getAttribute('number') == questionArray[currentQuestion].answerNumber)
    {
        playerScore++;
    }
    else
    {
    }
    displayCorrectAnswer();
}

function displayCorrectAnswer()
{
    for (let i = 0; i < 3; i++) {
        let btn = document.querySelectorAll('.answer-btn[number]')[i];
        console.log(btn);
        if(btn.getAttribute('number') == questionArray[currentQuestion].answerNumber)
        {
            btn.classList.add('answer-correct');
        }
        else
        {
            btn.classList.add('answer-wrong');
        }
        
    }
}

