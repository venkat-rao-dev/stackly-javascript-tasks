// Part 1: Functions and Parameters

// 1.Create a function welcome() that prints "Welcome to JavaScript".
{
    function welcome() {
        console.log("Welcome to JavaScript");
    }

    welcome();
}

// 2.Create a function studentDetails(name, age, cgpa) that prints all three values. Call it with two different students.
{
    function studentDetails(name, age, cgpa) {
        console.log("Name:", name);
        console.log("Age:", age);
        console.log("CGPA:", cgpa);
    }

    studentDetails("Venkat", 24, 7.83);
    studentDetails("Krishna", 23, 8.5);
}


// 3.Create a function calculateFee(fee) that returns the student fee. Store the returned value in a variable and print it.
{
    function calculateFee(fee) {
        return fee;
    }

    let studentFee = calculateFee(50000);
    console.log("Student Fee:", studentFee);
}


// 4.Create a function discount(percent) that calculates a discount on a fee of ₹200,000 and prints the final fee.
{
    function discount(percent) {
        let fee = 200000;
        let discountAmount = fee * percent / 100;
        let finalFee = fee - discountAmount;

        console.log("Original Fee:", fee);
        console.log("Discount:", discountAmount);
        console.log("Final Fee:", finalFee);
    }

    discount(10);
}
// 5.Create a function studentForm(name, age, disability = "no"). Call it three times, including once without passing the disability argument.
{
    function studentForm(name, age, disability = "no") {
        console.log("Name:", name);
        console.log("Age:", age);
        console.log("Disability:", disability);
        console.log("--------------------");
    }

    studentForm("Venkat", 24, "yes");
    studentForm("Krishna", 23, "no");
    studentForm("Kalyan", 22);
}

// Part 2: Function Types and Scope

// 6.Create a named function that accepts a message and prints it.
{
    function displayMessage(message) {
        console.log(message);
    }

    displayMessage("Welcome to JavaScript Functions!");
}

// 7.Create an anonymous function and store it in a variable. Pass a name to it and print the name.
{
    let printName = function (name) {
        console.log("Student Name:", name);
    };

    printName("Venkata Rao");
}

// 8.Create an arrow function that accepts a number and prints it.
{
    let printNumber = (number) => {
        console.log("Number:", number);
    };

    printNumber(100);
}
// 9.Create a function containing var, let, and const inside an if block. Check which variables can be accessed inside and outside the block.
{
    function checkScope() {
        if (true) {
            var varMessage = "I am var";
            let letMessage = "I am let";
            const constMessage = "I am const";

            console.log("Inside block:", varMessage);
            console.log("Inside block:", letMessage);
            console.log("Inside block:", constMessage);
        }

        console.log("Outside block:", varMessage);

        // letMessage and constMessage cannot be accessed here.
        // console.log(letMessage);
        // console.log(constMessage);
    }

    checkScope();
}

// 10.Predict the output of this code:
{
    console.log(value);
    var value = 10;
} // undefined


// Part 3: Callback and Higher-Order Functions

// 11.Create two functions, first() and second(). Pass second as a callback to first() and execute it inside first().
{
    function second() {
        console.log("Second function executed.");
    }

    function first(callback) {
        console.log("First function executed.");
        callback();
    }

    first(second);
}

// 12.Create an add(callback, a, b) function that prints the sum of two numbers and then calls the callback with two numbers.
{
    function add(callback, a, b) {
        console.log("Sum:", a + b);
        callback(a, b);
    }

    function printNumbers(a, b) {
        console.log("First number:", a);
        console.log("Second number:", b);
    }

    add(printNumbers, 10, 5);
}

// 13.Create a sub(num1, num2) arrow function and pass it as a callback to the add() function.
{
    let subtract = (num1, num2) => {
        console.log("Subtraction:", num1 - num2);
    };

    function add(callback, a, b) {
        console.log("Addition:", a + b);
        callback(a, b);
    }

    add(subtract, 20, 8);
}
// 14.Create a multiply(callback, a, b) function that prints the multiplication result and then executes the callback.
{
    function multiply(callback, a, b) {
        console.log("Multiplication:", a * b);
        callback();
    }

    function showMessage() {
        console.log("Multiplication completed successfully!");
    }

    multiply(showMessage, 6, 4);
}

// 15.Create a divide(num1, num2) function and pass it as a callback to another function.
{
    function divide(num1, num2) {
        if (num2 !== 0) {
            console.log("Division result:", num1 / num2);
        } else {
            console.log("Cannot divide by zero.");
        }
    }

    function runDivision(callback) {
        callback(20, 4);
    }

    runDivision(divide);
}

// 16.Create a higher-order function that accepts a callback and calls it with a student's name.
{
    function greetStudent(name) {
        console.log("Hello, " + name + "!");
    }

    function processStudent(callback, name) {
        callback(name);
    }

    processStudent(greetStudent, "Venkata Rao");
}


// Part 4: Generator Functions

// 17.Create a generator function that yields these values one by one: "10% cashback", "30% cashback", and "Better luck next time".
{
    function* cashbackMessages() {
        yield "10% cashback";
        yield "30% cashback";
        yield "Better luck next time";
    }

    let messages = cashbackMessages();

    console.log(messages.next().value);
    console.log(messages.next().value);
    console.log(messages.next().value);
}

// 18.Call .next() three times on a generator object and observe the returned values.
{
    function* cashbackResults() {
        yield "10% cashback";
        yield "30% cashback";
        yield "Better luck next time";
    }

    let results = cashbackResults();

    console.log(results.next());
    console.log(results.next());
    console.log(results.next());
}

/* output:{ value: '10% cashback', done: false }
{ value: '30% cashback', done: false }
{ value: 'Better luck next time', done: false } */

// 19.Create a generator function that yields five different discount messages. Print each yielded value using a for-of loop.
{
    function* discountMessages() {
        yield "5% discount";
        yield "10% discount";
        yield "15% discount";
        yield "20% discount";
        yield "Better luck next time";
    }

    for (let message of discountMessages()) {
        console.log(message);
    }
}

// 20.Create a generator function that yields three student names. Use a for-of loop to display them.
{
    function* studentNames() {
        yield "Venkat";
        yield "Kalyan";
        yield "Gopal";
    }

    for (let name of studentNames()) {
        console.log(name);
    }
}


// 21.Create a generator function with four yield statements. Check the done property after the yielded values have been consumed.
{
    function* values() {
        yield "First value";
        yield "Second value";
        yield "Third value";
        yield "Fourth value";
    }

    let iterator = values();

    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}
/* output:{ value: 'First value', done: false }
{ value: 'Second value', done: false }
{ value: 'Third value', done: false }
{ value: 'Fourth value', done: false }
{ value: undefined, done: true } */


// Part 5: Currying and Uncurrying 

// 22.Create a normal function add(a, b, c) that prints the sum of three numbers.
{
    function add(a, b, c) {
        let sum = a + b + c;
        console.log("Sum:", sum);
    }

    add(5, 10, 15);
}

// 23.Convert the add(a, b, c) function into a curried function using nested functions.
{
    function add(a) {
        return function (b) {
            return function (c) {
                let sum = a + b + c;
                console.log("Curried Sum:", sum);
            };
        };
    }

    add(5)(10)(15);
}

// 24.Call a curried function with values 5, 10, and 15 using this format: functionName(5)(10)(15).
{
    function calculateTotal(a) {
        return function (b) {
            return function (c) {
                return a + b + c;
            };
        };
    }

    let total = calculateTotal(5)(10)(15);
    console.log("Total:", total);
};

// 25.Create a curried function that accepts product price, discount percentage, and quantity, then calculates the total discounted price.
{
    function calculateProductPrice(price) {
        return function (discountPercent) {
            return function (quantity) {
                let discountedPrice =
                    price - (price * discountPercent / 100);

                let totalPrice = discountedPrice * quantity;

                return totalPrice;
            };
        };
    }

    let totalPrice = calculateProductPrice(1000)(10)(3);

    console.log("Total Discounted Price:", totalPrice);
}

// 26.Write a normal three-parameter function and its curried equivalent. Call both with the same values and compare their results.
// Normal function with three parameters
{
    function calculateTotal(a, b, c) {
        return a + b + c;
    }

    function calculateCurriedTotal(a) {
        return function (b) {
            return function (c) {
                return a + b + c;
            };
        };
    }

    let normalResult = calculateTotal(5, 10, 15);
    let curriedResult = calculateCurriedTotal(5)(10)(15);

    console.log("Normal Function Result:", normalResult);
    console.log("Curried Function Result:", curriedResult);
    console.log("Are both results equal:", normalResult === curriedResult);
}

// Part 6: IIFE, Return, and Mixed Practice

// 27.Create an IIFE that accepts a product name and discount percentage, then displays a sale message using a template string.
{
    (function (productName, discountPercent) {
        console.log(
            `${productName} is on sale with ${discountPercent}% discount!`
        );
    })("Laptop", 20);
}

// 28.Create a function that returns a number. Store the returned value in a variable and print it.
{
    function getNumber() {
        return 100;
    }

    let number = getNumber();
    console.log("Returned Number:", number);
}

// 29.Create a function that accepts a student's marks and returns the marks. Use the returned value in another variable.
{
    function getStudentMarks(marks) {
        return marks;
    }

    let marks = getStudentMarks(85);
    let finalMarks = marks;

    console.log("Student Marks:", finalMarks);
}

// 30.Create a student fee calculator using a function with a default parameter, a callback function to calculate the discount, and a return value for the final fee.
// Function to calculate the discount
{
    function calculateDiscount(fee, discountPercent = 10) {
        return fee * discountPercent / 100;
    }

    function calculateFinalFee(
        fee,
        discountCallback,
        discountPercent = 10
    ) {
        let discountAmount = discountCallback(fee, discountPercent);
        let finalFee = fee - discountAmount;

        return finalFee;
    }

    let finalFee = calculateFinalFee(50000, calculateDiscount);

    console.log("Original Student Fee: 50000");
    console.log("Discount Percentage: 10%");
    console.log("Final Student Fee: " + finalFee);

    let feeWithTwentyPercentDiscount =
        calculateFinalFee(50000, calculateDiscount, 20);

    console.log(
        "Fee after 20% discount: " + feeWithTwentyPercentDiscount
    );
}











