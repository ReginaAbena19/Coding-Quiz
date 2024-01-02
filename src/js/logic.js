document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start');
  const questionTitle = document.getElementById('question-title');
  const choicesContainer = document.getElementById('choices');
  const timeElement = document.getElementById('time');
  const finalScoreElement = document.getElementById('final-score');
  const startScreen = document.getElementById('start-screen');
  const questionsScreen = document.getElementById('questions');
  const endScreen = document.getElementById('end-screen');
  const feedbackElement = document.getElementById('feedback');

  let currentQuestionIndex = 0;
  let timeLeft = 100;
  let timer;

  startBtn.addEventListener('click', startQuiz);
  choicesContainer.addEventListener('click', choiceClick);

  const quizQuestions = shuffleArray([...javaScriptQuestions]);

  function startQuiz() {
    startScreen.classList.add('hide');
    questionsScreen.classList.remove('hide');
    startTimer();
    displayQuestion();
  }

  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
    renderChoices(currentQuestion.options);
  }

function renderChoices(options) {
      choicesContainer.innerHTML = '';
      options.forEach((option) => {
        const choiceBtn = createChoiceButton(option);
        choicesContainer.appendChild(choiceBtn);
      });
    }


  function createChoiceButton(option) {
    const choiceBtn = document.createElement('button');
    choiceBtn.textContent = option;
    return choiceBtn;
  }

  function choiceClick(event) {
    if (event.target.matches('button')) {
      checkAnswer(event.target.textContent);
    }
  }

  function checkAnswer(selectedChoice) {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (selectedChoice === currentQuestion.correctAnswer) {
      showFeedback('Correct!', 'green');
      playAudio('correct.wav');
    } else {
      showFeedback('Wrong!', 'red');
      timeLeft -= 10;
      playAudio('incorrect.wav');
    }

    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
      } else {
        endQuiz();
      }
    }, 1000);
  }

  function startTimer() {
    timer = setInterval(() => {
      timeLeft--;
      timeElement.textContent = timeLeft;
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }

  function endQuiz() {
    clearInterval(timer);
    questionsScreen.classList.add('hide');
    endScreen.classList.remove('hide');
    finalScoreElement.textContent = timeLeft;;
  }

    const correctAnswers = calculateCorrectAnswers();
    const score = correctAnswers * 10 + timeLeft;

    // window.location.href = "../highscores.html";
  
  function showFeedback(message, color) {
    feedbackElement.textContent = message;
    feedbackElement.style.color = color;
    feedbackElement.classList.remove('hide');

    setTimeout(() => {
      feedbackElement.classList.add('hide');
    }, 1000);
  }

  function playAudio(filename) {
    const audio = new Audio(`assets/sfx/${filename}`);
    audio.play();
  }

  function calculateCorrectAnswers() {
    let correctAnswers = 0;
    quizQuestions.forEach((question) => {
      if (question.userAnswer === question.correctAnswer) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
});

