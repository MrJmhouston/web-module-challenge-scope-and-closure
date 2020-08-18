// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 has set the variable equal to the counterMaker function, while counter2 has skipped this step.
 * ----------------------------------------------------------
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1 uses a closure, I can tell because closures give us the ability too put functions together.
 * 
 * ----------------------------------------------------------
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * counter1 would be useful if we needed to access the function again even after the parent funtion has been terminated, counter2 would be preferred if we do not want to access that function again.
 * ----------------------------------------------------------
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(b){
  let score = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  
  return score;
}

console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, num){
  let score = {"home": 0, "away": 0};
  for (let i = 0; i <= num; i++) {
    score['home'] = score['home'] + inning();
    score['away'] = score['away'] + inning();
  }
  return score;
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each point in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(cb, cb2, num) {
  let home = 0;
  let away = 0;

  for (i = 0; i < num; i++) {
    home += finalScore(inning, i).home
    away += finalScore(inning, i).away
  }
  return `${i} Inning Away ${away} - Home ${home}`;
}
console.log(scoreboard(finalScore, inning, 1));
console.log(scoreboard(finalScore, inning, 2));
console.log(scoreboard(finalScore, inning, 3));
console.log(scoreboard(finalScore, inning, 4));
console.log(scoreboard(finalScore, inning, 5));
console.log(scoreboard(finalScore, inning, 6));
console.log(scoreboard(finalScore, inning, 7));
console.log(scoreboard(finalScore, inning, 8));
console.log(scoreboard(finalScore, inning, 9));
