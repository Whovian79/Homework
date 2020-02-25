//Fizz Buzz
//Log the numbers from 1 to 100.
//If the number is divisible by 3 and 5, log "FizzBuzz!"
//However, if the number is divisible by 3, log 'Fizz!'
//If the number is divisible by 5, log "Buzz!"
//Each number should only result in 1 log.

for (let i = 1; i <= 100; i++) {
  if (!(i % 3) && !(i % 5)) {
    console.log("FizzBuzz!");
  } else if (!(i % 3)) {
    console.log("Fizz!");
  } else if (!(i % 5)) {
    console.log("Buzz!");
  } else {
    console.log(i);
  }

  i += 1;
}
// Confirm attempt
const age = {};

if (age >= 21) confirm("Are you really 21 or older?");
{
  open("index.html", "Welcome!");
} else (age <= 21); {
  open("exit.html, Sorry, please come back when are 21!");
}
