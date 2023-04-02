const questionContainer = document.querySelector("#questionContainer");
const iconContainer = document.querySelector("#questionContainer");
const scoreContainer = document.querySelector('#score');

let mainList;

let q1 = new question("What is 2+2 ?", ["2", "4", "42", "69"], 2);
let q2 = new question("What is 3+3 ?", ["6", "9", "8", "3"], 1);
let q3 = new question("What is 5+5 ?", ["55", "25", "10", "la réponse D"], 3);
let questionArray = [q1, q2, q3];

let ql1 = new questionList('Math', [q1, q2, q3]);

mainList = [ql1];
let currentArray = null;
let inputFrozen = 0;
let currentQuestion = 0;
let playerScore = 0;
let playerQuestions = 0;
let questionTitle;

initMainMenu();

// initQuestion(questionArray[currentQuestion]);

function initMainMenu()
{
    questionTitle = document.createElement('h2');
    questionTitle.setAttribute('id', 'questionTitle');
    questionTitle.textContent = 'Welcome to the quizz';
    let newQuestion = document.createElement('ul');
    mainList.forEach((element, index) => {
        let button = document.createElement('li');
        button.classList.add('answer-btn');
        button.textContent = '' + element.title + '';
        button.setAttribute('number', index+1);
        button.addEventListener('click', selectQuestionList);
        newQuestion.appendChild(button);
    });
    newQuestion.classList.add('buttons-container');
    questionContainer.appendChild(questionTitle);
    questionContainer.appendChild(newQuestion);
}

function selectQuestionList() {
    currentArray =  questionArray;
    initQuestion(currentArray[0]);
}

function initQuestion(question)
{
    questionContainer.innerHTML = "";
    questionTitle = document.createElement('h2');
    questionTitle.setAttribute('id', 'questionTitle');
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
    questionContainer.appendChild(questionTitle);
    questionContainer.appendChild(newQuestion);
}

function selectAnswer(n)
{
    if(inputFrozen == 0)
    {
        if (this.getAttribute('number') == questionArray[currentQuestion].answerNumber)
        {
            playerScore++;
            questionTitle.innerHTML = "Correct !"
            questionTitle.classList.add('titleCorrect');
        }
        else
        {
            questionTitle.innerHTML = "Wrong !"
            questionTitle.classList.add('titleWrong');
        }
        displayCorrectAnswer();
        freezeInput();
        setTimeout(loadNextQuestion, 1500);
    }
}

function displayCorrectAnswer()
{
    playerQuestions++;
    scoreContainer.innerHTML = "" + playerScore + "/" + playerQuestions;
    for (let i = 0; i < 4; i++) {
        let btn = document.querySelectorAll('.answer-btn[number]')[i];
        if(btn.getAttribute('number') == questionArray[currentQuestion].answerNumber) { btn.classList.add('answer-correct');}
        else { btn.classList.add('answer-wrong'); }
        
    }
}

function loadNextQuestion() {
    inputFrozen = 0;
    currentQuestion++;
    if (currentArray[currentQuestion])
    {
        questionContainer.innerHTML = "";
        initQuestion(currentArray[currentQuestion]);
    }
    else
    {
        console.log('Done');
    }
    
}

function freezeInput() {
    inputFrozen = 1;
}

