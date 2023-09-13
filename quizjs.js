const questions = [
    {
        question: "Which type of JavaScript language is ",
        answers:[
            {text:"Object-Oriented", correct:false},
            {text:"Object-Based", correct:true},
            {text:"Assembly-language", correct:false},
            {text:"High-level", correct:false}
        ]
    },

    {
        question: `The "function" and " var" are known as:`,
        answers:[
            {text:"Keywords", correct:false},
            {text:"Data types", correct:false},
            {text:"Declaration statements", correct:true},
            {text:"Prototypes", correct:false}
        ]
    },
    
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answers:[
            {text:"document.write()", correct:false},
            {text:"console.log()", correct:false},
            {text:"window.alert()", correct:false},
            {text:"All the Above", correct:true}
        ]
    },
    
    {
        question: "How can a datatype be declared to be a constant type?",
        answers:[
            {text:"const", correct:true},
            {text:"var", correct:false},
            {text:"let", correct:false},
            {text:"Const", correct:false}
        ]
    },
    
    {
        question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        answers:[
            {text:"Boolean", correct:false},
            {text:"Undefined", correct:false},
            {text:"Object", correct:true},
            {text:"Integer", correct:false}
        ]
    }
    

]
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const menuButton = document.getElementById("menu-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML ="Next"
    showQuestion();
}

function showQuestion(){

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

function resetState(){
    nextButton.style.display ="none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display = "block";
    

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    // menuButton.innerHTML = "go to manu";
    menuButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
})

startQuiz();