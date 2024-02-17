const questions=[
    {
        question: "What is the capital of France?",
        answers: [
            {text: "New York", correct: false},
            {text: "London", correct: false},
            {text: "Paris", correct: true},
            {text: "Delhi", correct:false},
        ]
    },
    {
        question: "What is the capital of India?",
        answers: [
            {text: "New York", correct: false},
            {text: "London", correct: false},
            {text: "Paris", correct: false},
            {text: "Delhi", correct:true},
        ]
    },
    {
        question: "What is the capital of England?",
        answers: [
            {text: "New York", correct: false},
            {text: "London", correct: true},
            {text: "Paris", correct: false},
            {text: "Delhi", correct:false},
        ]
    },
    {
        question: "What is the capital of USA?",
        answers: [
            {text: "New York", correct: false},
            {text: "London", correct: false},
            {text: "Washington", correct: true},
            {text: "Delhi", correct:false},
        ]
    }
]

const questionElement=document.getElementById('ques');
const answerButton=document.getElementById('ans-btn');
const nextButton=document.getElementById('btn-next');

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0
    nextButton.innerHTML="Next";
    showQuestion();
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNumber=currentQuestionIndex+1;

    questionElement.innerHTML=questionNumber+". "+currentQuestion.question;

   currentQuestion.answers.forEach(answer => {
    const button=document.createElement("button");
    button.innerText=answer.text;
    button.classList.add("btn")
    answerButton.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click", selectAnswer);
   });
}

function selectAnswer(e){
    const selectedButton=e.target;
    const isCorrect=selectedButton.dataset.correct === "true";
    if(isCorrect){
        selectedButton.classList.add("correct");
        score++;
    }
    else{
        selectedButton.classList.add("wrong");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML =  `You Score ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Restart";
    nextButton.style.display='block';
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();

    }
    else{
        startQuiz();
    }
})

startQuiz();

