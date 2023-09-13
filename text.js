
// async function fetchData(){
//     console.log("hel")
//     try{
//         const res = await fetch('quizhtml.json');
//         // console.log('data',res.json())
//         if(!res.ok){
//             console.log('data not comin')            
//         }
//         const data = await res.json()
//         console.log('data',data)

//         const questionElement = document.getElementById("question");
//         // const answerButton = document.getElementById("answer-buttons");
//         const opt1 = document.getElementById("opt1");
//         const opt2 = document.getElementById("opt2");
//         const opt3 = document.getElementById("opt3");
//         const opt4 = document.getElementById("opt4");
//         const nextButton = document.getElementById("next-button");
        
//         data.map((item) =>{
//             questionElement.innerHTML = item.question
//             // console.log('q',item.question)
//             item.answers.map((ele) => {
//                 opt1.innerHTML = ele
//             console.log('d', ele).text

//             })
            
//         })


//     }
//     catch(err){
//         console.log("error on catch", err)
//     }
// }

// fetchData()


