'use strict';

///////////practice code
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Generating the random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no number
  if (!guess) {
    //document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');

    //when the player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🤘🏽Correct Number!';
    displayMessage('🤘🏽Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    console.log('score', score);
    console.log('highscore', highScore);

    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    //document.querySelector('.message').textContent =
    // guess > secretNumber ? '📈 Too High!!' : '📉Too Low!!';
    displayMessage(guess > secretNumber ? '📈 Too High!!' : '📉Too Low!!');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    // document.querySelector('.message').textContent = 'You Lost the game!';
    displayMessage('You Lost the game!');
    document.querySelector('.score').textContent = 0;
  }
});
////////////////Before refactoring/////////////////////////////
//when the guess is greater
/* else if (guess > secretNumber) {
    if (score > 1) {
      console.log('UPP', score);
      document.querySelector('.message').textContent = '📈 Too High!!';
      score--;

      document.querySelector('.score').textContent = score;
      console.log('DWNN', score);
    } else {
      document.querySelector('.message').textContent = 'You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //when the guess is lower
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too Low!!';
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
}); */

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  score = 20;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
