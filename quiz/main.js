//create an array called quiz that contains all questions and answers
const quiz = [["What is Superman's real name?","Clark Kent"],
["What is Wonder Woman's real name?","Diana Prince"],
["What is Batman's real name?","Bruce Wayne"]];


function start(quiz){
//initialize the score variable that will keep track of the number of correct answer
let score = 0;
//Then we'll loop through the array using a for-of loop, assigning the variables question and answer to each key and value in the map.
for(const [question,answer] of quiz){
    const response = ask(question);
    check(response, answer)
}
gameOver();

// Function declarations
function ask(question){
    return prompt(question)
}

function check(response, answer){
    if(response === answer){
        alert('correct!');
        score++;
    }else{
        alert(`Wrong Answer! The right answer was ${answer}`);
    }
}

function gameOver(){
    alert(`Game Over, you scored ${score} point${score  > 1 ? 's' : ''}`)
}
}
 start(quiz);