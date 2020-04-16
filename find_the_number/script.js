function getRandomInt(arg1) {
  return Math.floor(Math.random() * arg1);
}
let range = prompt("Select range");
range = parseInt(range);
let guessNumber = getRandomInt(range);

while (true) {
	let findNumber = prompt("Write a umber");
	findNumber = parseInt(findNumber);
	if (!findNumber) {
		alert("Go on, without 'Zero' and 'Cancel'");
		continue;
	}
	if (findNumber === guessNumber) {
		alert("Congratulation!"); 
	} else if (findNumber > guessNumber) {
		alert("Your number is bigger that guessNumber, Try again");
	} else { 
		alert("Your number is smaller that guessNumber, Try again");
	}
}