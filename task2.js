// Part 1: Variables and Data Types

// 1.Declare variables using var, let, and const. Reassign and redeclare them wherever allowed, then print the results.

 // 1. Using var
var city = "Chennai";
city = "Hyderabad";
var city = "Vijayawada";
console.log(city);

// 2. Using let
let age = 24;
age = 25;
console.log(age);

// 3. Using const
const country = "India";
console.log(country);

// 2.Create variables for your name, age, and programming knowledge. Print each variable and its data type using typeof.
let personalFullName = "Venkata Rao";
let personalAgeYears = 24;
let programmingKnowledge = "Beginner";

console.log(personalFullName, typeof personalFullName);
console.log(personalAgeYears, typeof personalAgeYears);
console.log(programmingKnowledge, typeof programmingKnowledge);

// 3.Create an array of 5 fruits. Print the complete array, the first element, and the last element.
let fruitCollection = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

console.log(fruitCollection);
console.log(fruitCollection[0]);
console.log(fruitCollection[fruitCollection.length - 1]);

// 4.Create an object containing your name, role, and CGPA. Print each property separately.
let developerProfile = {
    name: "Venkata Rao",
    role: "Full Stack Developer",
    cgpa: 7.83
};

console.log(developerProfile.name);
console.log(developerProfile.role);
console.log(developerProfile.cgpa);

//5.Take the user's name and age using prompt(). Display the name using alert() and print the age in the console.
let promptedUserName = prompt("Enter your name:");
let promptedUserAge = prompt("Enter your age:");

alert("Your name is " + promptedUserName);
console.log("Your age is " + promptedUserAge);


// Part 2: Operators

// 6.Declare two numbers and perform addition, subtraction, multiplication, division, modulus, and exponentiation.
let firstOperand = 10;
let secondOperand = 3;

console.log("Addition:", firstOperand + secondOperand);
console.log("Subtraction:", firstOperand - secondOperand);
console.log("Multiplication:", firstOperand * secondOperand);
console.log("Division:", firstOperand / secondOperand);
console.log("Modulus:", firstOperand % secondOperand);
console.log("Exponentiation:", firstOperand ** secondOperand);

// 7.Predict the output:
let incrementCounter = 5;
console.log(incrementCounter++); //5
console.log(incrementCounter); //6
console.log(++incrementCounter); //7

// 8.Predict the output:
let decrementCounter = 10;
let postDecrementValue = decrementCounter--;
let preDecrementValue = --decrementCounter;

console.log(decrementCounter); //8
console.log(postDecrementValue); //10
console.log(preDecrementValue); //8

// 9.Use the +=, -=, *=, /=, and %= assignment operators on a variable and print the final value after each operation.
let assignmentValue = 20;

assignmentValue += 5;
console.log("After += :", assignmentValue);

assignmentValue -= 3;
console.log("After -= :", assignmentValue);

assignmentValue *= 2;
console.log("After *= :", assignmentValue);

// 10.Predict the results of these comparisons:
console.log(5 == "5"); //true
console.log(5 === "5"); //false
console.log(10 != "10"); //false
console.log(10 !== "10"); //true

// 11.Use &&, ||, and ! to check different combinations of conditions.
let hasCodingSkills = true;
let knowsJavaScript = false;

console.log("AND:", hasCodingSkills && knowsJavaScript);
console.log("OR:", hasCodingSkills || knowsJavaScript);
console.log("NOT:", !hasCodingSkills);
console.log("NOT JavaScript:", !knowsJavaScript);

// 12.Use the ternary operator to check whether a user's age is 18 or above and print an appropriate message.
let eligibilityAge = 24;

let ageEligibilityMessage = eligibilityAge >= 18
    ? "You are eligible."
    : "You are not eligible.";

console.log(ageEligibilityMessage);


// Part 3: Type Casting and Conditions 

// 13. Predict the data type of each expression:
console.log(typeof ("hello" + 10)); //string
console.log(typeof (10 + true)); //number
console.log(typeof (10 + null)); //number
console.log(typeof ("hello" + undefined)); //string

// 14.Use Number() to convert a value received through prompt() into a number. Add 10 and print the result.
let promptedNumericText = prompt("Enter a number:");
let convertedNumericValue = Number(promptedNumericText);

let numericAdditionResult = convertedNumericValue + 10;

console.log("Result:", numericAdditionResult);

// 15.Use Boolean() to check the Boolean values of an empty string, a non-empty string, 0, and true.
console.log(Boolean("")); //false
console.log(Boolean("Hello")); //true
console.log(Boolean(0)); //false
console.log(Boolean(true)); //true

// 16.Write an if-else statement to check whether a number is positive or not.n
let checkedNumberValue = 15;

if (checkedNumberValue > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is not positive.");
}

// 17.Use else-if to display a message based on the time entered by the user: early morning, morning, afternoon, evening, or night.
let enteredHourValue = Number(prompt("Enter the hour (0-23):"));

if (enteredHourValue < 0 || enteredHourValue > 23 || !Number.isInteger(enteredHourValue)) {
    console.log("Invalid hour. Please enter a number from 0 to 23.");
} else if (enteredHourValue < 6) {
    console.log("Early morning");
} else if (enteredHourValue < 12) {
    console.log("Morning");
} else if (enteredHourValue < 17) {
    console.log("Afternoon");
} else if (enteredHourValue < 20) {
    console.log("Evening");
} else {
    console.log("Night");
}

// 18.Create a nested if statement to check eligibility based on age, height, and weight, following the conditions in your code.
let candidateAgeValue = 24;
let candidateHeightValue = 170;
let candidateWeightValue = 60;

if (candidateAgeValue >= 18) {
    if (candidateHeightValue >= 160) {
        if (candidateWeightValue >= 50) {
            console.log("Candidate is eligible.");
        } else {
            console.log("Candidate is not eligible: weight is too low.");
        }
    } else {
        console.log("Candidate is not eligible: height is too low.");
    }
} else {
    console.log("Candidate is not eligible: age is too low.");
}


// Part 4: Switch and Loops

// 19.Use switch to display a message based on a traffic light color: red, yellow, or green. Display an error for an invalid color.
let trafficSignalColor = "red";

switch (trafficSignalColor) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid traffic light color");
}

// 20.Use a for loop to print numbers from 1 to 20.
for (let loopNumberTwenty = 1; loopNumberTwenty <= 20; loopNumberTwenty++) {
    console.log(loopNumberTwenty);
}

// 21.Use a for loop to print all even numbers from 2 to 20.
for (let evenSequenceNumber = 2; evenSequenceNumber <= 20; evenSequenceNumber += 2) {
    console.log(evenSequenceNumber);
}

// 22.Use a while loop to print numbers from 10 down to 1.
let countdownNumberValue = 10;

while (countdownNumberValue >= 1) {
    console.log(countdownNumberValue);
    countdownNumberValue--;
}

// 23.Use a do-while loop to print numbers from 1 to 10.
let doWhileSequenceValue = 1;

do {
    console.log(doWhileSequenceValue);
    doWhileSequenceValue++;
} while (doWhileSequenceValue <= 10);

// 24.Use a for-of loop to print each character in the string "JavaScript".
let programmingWordText = "JavaScript";

for (let individualCharacterValue of programmingWordText) {
    console.log(individualCharacterValue);
}

// 25.Use a for-of loop to print every element in an array of 5 student names.
let studentNameCollection = ["Ravi", "Priya", "Kiran", "Sneha", "Arjun"];

for (let individualStudentName of studentNameCollection) {
    console.log(individualStudentName);
}

// 26.Use a for-in loop to print all keys and values of this object:
let studentDetailsRecord = {
    name: "Priya",
    role: "Frontend Developer",
    cgpa: 9
};

for (let studentPropertyKey in studentDetailsRecord) {
    console.log(studentPropertyKey + ": " + studentDetailsRecord[studentPropertyKey]);
}


// Part 5: Mixed Practice

// 27.Take two numbers using prompt() and display their sum, difference, product, and remainder.
let firstInputNumber = Number(prompt("Enter the first number:"));
let secondInputNumber = Number(prompt("Enter the second number:"));

console.log("Sum:", firstInputNumber + secondInputNumber);
console.log("Difference:", firstInputNumber - secondInputNumber);
console.log("Product:", firstInputNumber * secondInputNumber);
console.log("Remainder:", firstInputNumber % secondInputNumber);

// 28.Create an array of 5 numbers and use a loop to print only the numbers greater than 10.
let mixedNumberCollection = [5, 12, 8, 25, 15];

for (let filteredNumberValue of mixedNumberCollection) {
    if (filteredNumberValue > 10) {
        console.log(filteredNumberValue);
    }
}

// 29.Take a user's age using prompt(). Use a conditional statement to check eligibility, then display the result using alert().
let eligibilityAgeInput = Number(prompt("Enter your age:"));

if (eligibilityAgeInput >= 18) {
    alert("You are eligible.");
} else {
    alert("You are not eligible.");
}

// 30.Create a simple menu using switch with these options: addition, subtraction, multiplication, and division. Take two numbers from the user and display the selected operation's result.
let calculatorFirstNumber = Number(prompt("Enter the first number:"));
let calculatorSecondNumber = Number(prompt("Enter the second number:"));
let calculatorOperatorChoice = prompt(
    "Choose an operation: +, -, *, /"
);

switch (calculatorOperatorChoice) {
    case "+":
        console.log("Result:", calculatorFirstNumber + calculatorSecondNumber);
        break;

    case "-":
        console.log("Result:", calculatorFirstNumber - calculatorSecondNumber);
        break;

    case "*":
        console.log("Result:", calculatorFirstNumber * calculatorSecondNumber);
        break;

    case "/":
        if (calculatorSecondNumber !== 0) {
            console.log("Result:", calculatorFirstNumber / calculatorSecondNumber);
        } else {
            console.log("Error: Cannot divide by zero.");
        }
        break;

    default:
        console.log("Invalid operator. Please choose +, -, *, or /.");
}







