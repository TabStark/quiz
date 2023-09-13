// async function quizQues(){
// var data;
// try{
//     const response = await fetch('quizhtml.json')
//     console.log("data of ques", response.json())

//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     console.log("data of ques", data)

//     // return data;
// }
// catch(err){
//     console.log(err)
// }
// }
// quizQues();
// // .then(response => response.json())
// //   .catch(err => alert(err))

// //   .then(data => {
// //         console.log(data);
// //       })
// // questions.then((response)=>{
// //     if (!response.ok) {
// //         throw new Error('Network response was not ok');
// //       }
// //       return response.json();
// // }).then(data => {
// //     console.log(data);
// //   })

const questions = [
    {
        question: "What does the abbreviation HTML stand for?",
        answers:[
            {text:"HyperText Markup Language", correct:true},
            {text:"HyperText Machine Language", correct:false},
            {text:"HyperText Marking Language", correct:false},
            {text:"HighText Marking Language", correct:false}
        ]
    },

    {
        question: "Which of the following tag is used for inserting the largest heading in HTML?",
        answers:[
            {text:"head", correct:false},
            {text:"&lt;h1&gt;", correct:true},
            {text:"&lt;h6&gt", correct:false},
            {text:"heading", correct:false}
        ]
    },
    
    {
        question: "The correct sequence of HTML tags for starting a webpage is -",
        answers:[
            {text:"Head, Title, HTML, body", correct:false},
            {text:"HTML, Body, Title, Head", correct:false},
            {text:"HTML, Title, Head, Body", correct:false},
            {text:"HTML, Head, Title, Body", correct:true}
        ]
    },
    
    {
        question: "Which of the following tag is used to define options in a drop-down selection list?",
        answers:[
            {text:"&lt;select&gt;", correct:false},
            {text:"&lt;list&gt;", correct:false},
            {text:"&lt;dropdown&gt;", correct:false},
            {text:"&lt;option&gt;", correct:true}
        ]
    },
    
    {
        question: "Which tag contains the meta information about the HTML page?",
        answers:[
            {text:"&lt;html&gt;", correct:false},
            {text:"&lt;title&gt;", correct:false},
            {text:"&lt;head&gt;", correct:true},
            {text:"&lt;body&gt;", correct:false}
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