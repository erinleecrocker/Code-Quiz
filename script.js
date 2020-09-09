// start quiz page
var startQuizPage = document.querySelector("#start-quiz-page")
// div for questions to go in 
var questionPage = document.querySelector("#Question-display-page");
// div for score page to go in
var ScorePage = document.querySelector("#Score-display-page");


// button to start quiz
var startQuizButton = document.querySelector("#start-quiz");
// countdown display
var countdown = document.querySelector("#timer-display");

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: 3
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes","curly brackets","parentheses", "square brackets"],
        answer: 3
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: [ "numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: 4
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas","curly brackets","quotes","parentheses"],
        answer: 4
    },
    {
        question: "A very useful tool used durring development and debugging for printing content to the debugger is:",
        choices: ["JavaScript","terminal / bash","for loops","console.log"],
        answer: 4
    }
]














// add event listener to start quiz button - hide start quiz page
startQuizButton.addEventListener("click",function(){
    
    startQuizPage.style.display = 'none';
    
});
