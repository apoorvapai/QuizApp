const questions=[
    {
        question:"What does HTML stand for?",
        answers:[
            {text:"Hypermedia Textual Markup Language", correct:false},
            {text:"Hyper Text Markup Language", correct:true},
            {text:"High Tech Multimedia Language", correct:false},
            {text:"Home Tool Management Language", correct:false},
            {text:"Hyperlink and Text Markup Language", correct:false},
        ]
    },
    {
        question:"Which of the following is NOT a programming language?",
        answers:[
            {text:"Python", correct:false},
            {text:"HTML", correct:false},
            {text:"Java", correct:false},
            {text:"Photoshop", correct:true},
            {text:"C++", correct:false},
        ]
    },
    {
        question:"Which data structure follows the Last In, First Out (LIFO) principle?",
        answers:[
            {text:"Queue", correct:false},
            {text:"Linked List", correct:false},
            {text:"Stack", correct:true},
            {text:"Array", correct:false},
            {text:"Tree", correct:false},
        ]
    },
    {
        question:"Which of the following is a fundamental unit of digital information?",
        answers:[
            {text:"Byte", correct:true},
            {text:"Megahertz", correct:false},
            {text:"Pixel", correct:false},
            {text:"Volt", correct:false},
            {text:"Hertz", correct:false},
        ]
    },
    {
        question:"Which of the following sorting algorithms has a worst-case time complexity of O(n^2)?",
        answers:[
            {text:"Merge Sort", correct:false},
            {text:"Quick Sort", correct:false},
            {text:"Bubble Sort", correct:true},
            {text:"Insertion Sort", correct:false},
            {text:"Selection Sort", correct:false},
        ]
    }
    
];

const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score-0;
    nextButton.innerHTML="Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currectQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currectQuestion.question;

    currectQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);


        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });

}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedbtn=e.target;
    const iscorrect=selectedbtn.dataset.correct === "true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";

}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
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
startQuiz();

