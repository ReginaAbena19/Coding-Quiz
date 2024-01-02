# Web APIs: Code Quiz

## Task
Build a timed coding quiz with multiple-choice questions. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code. It will have a clean, polished, and responsive user interface. 


## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

Create a code quiz that contains the following requirements:

* A start button that when clicked a timer starts and the first question appears.
 
  * Questions contain buttons for each answer.
  * 
  * When answer is clicked, the next question appears
  * 
  * If the answer clicked was incorrect then subtract time from the clock

* The quiz should end when all questions are answered or the timer reaches 0.

  * When the game ends, it should display their score and give the user the ability to save their initials and their score
  
## Mock-Up

The following animation demonstrates the application functionality:

![Animation of code quiz. Presses button to start quiz. Clicks the button for the answer to each question, displays if answer was correct or incorrect. Quiz finishes and displays high scores. User adds their initials, then clears their initials and starts over.](./solution/08-web-apis-challenge-demo.gif)

## Workflow
I committed straight to main with very clear commit messages and history

Code source can be found in:
* src/js/logic.js
* src/js/questions.js
* src/js/scores.js


## After thoughts
- I had some issues getting the initials and score to save in local storage and display on the screen so will come back to solving this issue in the future! 
  
## Installation
* The challenge is deployed using Github Pages. The end result can be found here: https://reginaabena19.github.io/Coding-Quiz/

* When viewing through the editor ensure live server is installed in order to run the index.html file in the browser.

## questions source
https://www.sanfoundry.com/1000-javascript-questions-answers/
https://www.interviewbit.com/javascript-mcq/
https://www.sanfoundry.com/javascript-mcqs-client-side-storage/
https://algodaily.com/lessons/events-and-event-handling-17612552
