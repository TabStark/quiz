const questions = [
    {
        question: "In how many ways can CSS be written in",
        answers:[
            {text:"1", correct:false},
            {text:"2", correct:false},
            {text:"3", correct:true},
            {text:"4", correct:false}
        ]
    },

    {
        question: "How can we select an element with a specific ID in CSS?",
        answers:[
            {text:"#", correct:true},
            {text:".", correct:false},
            {text:"^", correct:false},
            {text:"None of the above", correct:false}
        ]
    },
    
    {
        question: "Can negative values be allowed in padding property?",
        answers:[
            {text:"Yes", correct:false},
            {text:"No", correct:true},
            {text:"Depends on property", correct:false},
            {text:"None of the Above", correct:false}
        ]
    },
    
    {
        question: "We can make rounded borders around elements using which CSS element?",
        answers:[
            {text:"border-collapse", correct:false},
            {text:"border-round", correct:false},
            {text:"border-radius", correct:true},
            {text:"None of the Above", correct:false}
        ]
    },
    
    {
        question: "Setting an inline-block in CSS requires which of the following properties?",
        answers:[
            {text:"display", correct:true},
            {text:"color", correct:false},
            {text:"block", correct:false},
            {text:"None of the Above", correct:false}
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