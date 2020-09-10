# Code-Quiz

The goal of this project was to make a coding quiz, that starts when the user clicks start button, which brings up a question with several answers, if the user's answer is correct, the next question is presented, if the user's answer is incorrect time is subtracted from the countdown timer in the upper right hand corner.  My intention is to eventually end on a page where the user can save their initials and score. 

I used html, css, and javascript to accomplish this. 

My process began with setting up index.html with classes and ids attatched to the elements. I used bootstrap for styling with some small adjustments in my css file. From there I used a setInterval for both the timer and to manifest the questions on the page. Both these functions were called upon the click event (when the user clicks start quiz). The challenging part for me was to figure out how to organize my functions so that I would not have a time delay before the questions were presented (I had this issue when using the setInterval with my instructions in the callback function. to fix this I titled the function that looped through the object that stored my questions seperately, and called it in the line above the setInterval. This worked.
