let readlineSync = require("readline-sync");
let score = 0;

/**adding color */
let kuler = require("kuler");

let userName = readlineSync.question("What's your name? ");
console.log(kuler(`\nHello ${userName} welcome to Quizify`, "#f43f5e"));

console.log("\nPlease select any option by typing either a/b/c/d\n");

/**Creating data set */

const database = {
  data: [
    {
      question: `let a ={}, b={}
console.log(a==b)
console.log(a===b)`,

      options: {
        a: "false false",
        b: "false true",
        c: "true false",
        d: "true true",
      },

      correctAnswer: "a",
    },
    {
      question: "Object.assign(target,source) creates which type of copy>",
      options: {
        a: "Deep Copy",
        b: "Shallo Copy",
        c: "Nested Copy",
        d: "Creates a new reference",
      },
      correctAnswer: "b",
    },

    {
      question: "Is method chaining possible with forEach?",
      options: {
        a: "Yes",
        b: "No",
      },
      correctAnswer: "b",
    },
  ],
};

/**Creating Leader Board */
const leaderBoard = {
  data: [
    {
      name: "Ashish",
      score: 1,
    },
    {
      name: "Riya",
      score: 3,
    },
    {
      name: "Jay",
      score: 2,
    },
  ],
};

//Main Logic
function playGame(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log(kuler("Correct Answer", "#16a34a"));
    score++;
  } else {
    console.log(kuler("Incorrect Answer", "#dc2626"));
    console.log(kuler(`Correct Answer is ${correctAnswer}`, "#14b8a6"));
  }
}

//display questions and options
function showQuestionAndOptiopns(database) {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`\nQ${i + 1}-${database.data[i].question}\n`);
    for (let key in database.data[i].options) {
      console.log(`${key}-${database.data[i].options[key]}`);
    }
    let userAnswer = readlineSync
      .question("Enter your answer- (a/b/c/d)-")
      .toLowerCase();

    playGame(userAnswer, database.data[i].correctAnswer);
  }
}

/**high score */
function showHighScorer(leaderBoard) {
  leaderBoard.data.push({ name: userName, score: score });

  let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log(
    kuler("\nCheck your position on the Leader Board🎉🎉", "#fbbf24"),
  );

  for (let leader of sortedScoreList) {
    console.log(kuler(`${leader.name} - Score: ${leader.score}`, "#c026d3"));
  }
}

showQuestionAndOptiopns(database);
console.log(kuler(`\nYour score is: ${score}`, "#a3e635"));
showHighScorer(leaderBoard);
