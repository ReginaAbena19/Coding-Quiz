const clearButton = document.querySelector("#clear");
const highScoresOl = document.querySelector("#highscores");
const resultsArray = JSON.parse(localStorage.getItem("highScores")) || [];

function storeScore(initials, score) {
  const highScores = [...resultsArray, { initials, score }];
  localStorage.setItem('highScores', JSON.stringify(highScores));

  window.location.href = "../highscores.html";
}

resultsArray.sort((a, b) => b.score - a.score);

resultsArray.forEach(displayHighScore);

function displayHighScore({ initials, score }) {
  const liEl = document.createElement("li");
  liEl.textContent = `${initials} - ${score}`;
  highScoresOl.appendChild(liEl);
}

clearButton.addEventListener("click", clearHighScores);


function clearHighScores() {
  localStorage.removeItem("highScores");
  highScoresOl.innerHTML = '';
}
