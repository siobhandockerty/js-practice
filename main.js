let userName = "name here";
// Change username to your name
userName ? console.log(`Hello ${userName}!`) : console.log("Hello!");

//Can change this question to anything you like
const userQuestion = "question here?";
console.log(`The user asked: ${userQuestion}`);

// Generate random number between 0 and 7
let randomNumber = Math.round(Math.random()*7);
console.log(randomNumber);

let eightBall = "";
if (randomNumber === 0) {
  eightBall = 'It is certain';
}
else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
}
else if (randomNumber === 2) {
	eightBall = 'Reply hazy try again';
}
else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
}
else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
}
else if (randomNumber === 5) {
	eightBall = 'My sources say no';
}
else if (randomNumber === 6) {
	eightBall = 'Outlook not so good';
}
else if (randomNumber === 7) { 
	eightBall = 'Signs point to yes';
}

console.log(eightBall);