//create an array called quiz that contains all questions and answers
const quiz = [["What is Superman's real name?","Clark Kent"],
["What is Wonder Woman's real name?","Diana Prince"],
["What is Batman's real name?","Bruce Wayne"]];
//initialize the score variable that will keep track of the number of correct answer
let score = 0;
//Then we'll loop through the array using a for-of loop, assigning the variables question and answer to each key and value in the map.
for(const [question,answer] of quiz){
    const response = prompt(question);
    if(response === answer){
        alert('Correct!');
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
}

// At the end of the game, report the player's score
alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);