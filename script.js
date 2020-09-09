// start quiz page
var startQuizPageEl = document.querySelector("#start-quiz-page")
// div for questions page to go in 
var questionPageEl = document.querySelector("#Question-display-page");
// ol to append li answers to 
var choicesEl = document.querySelector("#answer-option-list")
// div for score page to go in
var ScorePageEl = document.querySelector("#Score-display-page");
//div for question header
var questionEl = document.querySelector("#question-space")


// button to start quiz
var startQuizButton = document.querySelector("#start-quiz");
// countdown display
var countdown = document.querySelector("#timer-display");


// FOR ANSWER PAGE 
//var questionEl = document.createElement("h2");
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");


// build an array of objects
var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ("strings", "booleans", "alerts", "numbers"),
        answer: 2
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ("quotes","curly brackets","parentheses", "square brackets"),
        answer: 2
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: ("numbers and strings", "other arrays", "booleans", "all of the above"),
        answer: 3
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ("commas","curly brackets","quotes","parentheses"),
        answer: 3
    },
    {
        question: "A very useful tool used durring development and debugging for printing content to the debugger is:",
        choices: ("JavaScript","terminal / bash","for loops","console.log"),
        answer: 3
    }
];

// for(i=0; i < quizQuestions.length; i++) {
//     console.log(quizQuestions[i].question)
// }

var i = 0;
var secondsLeft = 75;

// itterate over the array to populate the questions 
function generateQuiz () {
    var quizInterval = setInterval(function() {
        secondsLeft--;
        countdown.textContent = secondsLeft

        if (quizQuestions[i] === undefined) {
            clearInterval(quizInterval);
            ScorePageEl.style.display = 'block';

        } else {
            console.log(quizQuestions[i].question);
            questionEl.textContent = (quizQuestions[i].question);
        i++;
        }
    }, 15000);
}



////for (var i=0; i<quizQuestions.length; i++) {

//}












// add event listener to start quiz button - hide start quiz page
startQuizButton.addEventListener("click",function(){
    
    startQuizPageEl.style.display = 'none';
    generateQuiz();
    // questionEl.append = questionPageEl;
    // answer1.append = choicesEl;
    // answer2.append = choicesEl;
    // answer3.append = choicesEl;
    // answer4.append = choicesEl; 
});
