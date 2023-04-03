const questionContainer = document.querySelector("#questionContainer");
const iconContainer = document.querySelector("#questionContainer");
const scoreContainer = document.querySelector('#score');


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
        button.setAttribute('number', index);
        button.addEventListener('click', selectQuestionList);
        newQuestion.appendChild(button);
    });
    newQuestion.classList.add('buttons-container');
    questionContainer.appendChild(questionTitle);
    questionContainer.appendChild(newQuestion);
}

function selectQuestionList() {
    console.log(this.getAttribute('number'));
    console.log(mainList[this.getAttribute('number')]);
    currentArray =  mainList[this.getAttribute('number')].questionListArray;
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
        if (this.getAttribute('number') == currentArray[currentQuestion].answerNumber)
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
        if(btn.getAttribute('number') == currentArray[currentQuestion].answerNumber) { btn.classList.add('answer-correct');}
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

