// start quiz page
var startQuizPageEl = document.querySelector("#start-quiz-page")
// div for questions page to go in 
var questionPageEl = document.querySelector("#question-display-page");
// ol to append li answers to 
var choicesEl = document.querySelectorAll(".choicebtn")
// div for score page to go in
var scorePageEl = document.querySelector("#score-display-page");
//div for question header
var questionEl = document.querySelector("#question-space")


// button to start quiz
var startQuizButton = document.querySelector("#start-quiz");
// countdown display
//var countdown = document.querySelector("#timer-display");
var choiceOne = document.getElementById("numone")
var choiceTwo = document.getElementById("numtwo")
var choiceThree = document.getElementById("numthree")
var choiceFour = document.getElementById("numfour")


// build an array of objects
var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: 2
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes","curly brackets","parentheses", "square brackets"],
        answer: 2
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: 3
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas","curly brackets","quotes","parentheses"],
        answer: 3
    },
    {
        question: "A very useful tool used durring development and debugging for printing content to the debugger is:",
        choices: ["JavaScript","terminal / bash","for loops","console.log"],
        answer: 3
    }
];

// for my funtions - global variables

var i = 0;
var quizInterval;
var timeleft;
var ended = false;
var coundown;

questionPageEl.style.display = 'none';
scorePageEl.style.display = 'none';


//----- start timer funciton
function startTimer() {

    timeleft = 75
    countdown = setInterval(function(){
        if (timeleft <= 0) {
            clearInterval(countdown);
            // end quesitons show the score page 
        } else {
            document.getElementById("timer-display").innerHTML = "Timer: " + timeleft;
            //console.log(timeleft);
        }
        timeleft -= 1;   
    },1000);

};

//--------- itterate over the array to populate the questions 

function questionOrigin() {
    
    console.log("called");
    console.log("index" + i)

    if (quizQuestions[i] === undefined) {
        // timeleft = 0;
        // document.getElementById("timer-display").innerHTML = "Timer: " + 0;
        clearInterval(countdown);
        clearInterval(quizInterval);
        questionPageEl.style.display = 'none';
        scorePageEl.style.display = 'block';

    } else {
        //console.log(quizQuestions[i].question);
        questionEl.textContent = (quizQuestions[i].question);
        choiceOne.innerText = quizQuestions[i].choices[0];
        choiceTwo.innerText = quizQuestions[i].choices[1];
        choiceThree.innerText = quizQuestions[i].choices[2];
        choiceFour.innerText = quizQuestions[i].choices[3];
        
        i++;
    }
};






////for (var i=0; i<quizQuestions.length; i++) {

//}



// When start quiz button is clicked: ---- 
startQuizButton.addEventListener("click",function(){
    //----- hide start page
    startQuizPageEl.style.display = 'none';
    questionPageEl.style.display = 'block';

    //----- start timer
    startTimer();
    //----- present the questions
    questionOrigin();
    quizInterval = setInterval(questionOrigin, 15000);
    
});

//----- add event listener to buttons

choiceOne.addEventListener("click",function(){
    //if correct pass to next question and store answer
    if (quizQuestions[i - 1].answer == this.value) {
    //console.log("True"); 
    } else {
        timeleft = timeleft - 15;
        console.log("False");
    };
    //if wrong pass to next question -15 seconds store answer
    questionOrigin();
});

choiceTwo.addEventListener("click",function(){
    //if correct pass to next question and store answer
    if (quizQuestions[i - 1].answer == this.value) {
    //console.log("True"); 
    } else {
        timeleft = timeleft - 15;
        console.log("False");
    };
    //if wrong pass to next question -15 seconds store answer
    questionOrigin();
});

choiceThree.addEventListener("click",function(){
    //if correct pass to next question and store answer
    if (quizQuestions[i - 1].answer == this.value) {
    //console.log("True"); 
    } else {
        timeleft = timeleft - 15;
        console.log("False");
    };
    //if wrong pass to next question -15 seconds store answer
    questionOrigin();
});

choiceFour.addEventListener("click",function(){
    //if correct pass to next question and store answer
    if (quizQuestions[i - 1].answer == this.value) {
    //console.log("True"); 
    } else {
        timeleft = timeleft - 15;
        console.log("False");
    };
    //if wrong pass to next question -15 seconds store answer
    questionOrigin();
});








