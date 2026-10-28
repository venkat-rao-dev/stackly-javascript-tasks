// Part 1: Array Higher-Order Methods


// 1. Create an array of 10 numbers and use forEach() to print each number.
let numberList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

numberList.forEach(function(number) {
    console.log(number);
});

// 2. Create an array of numbers and use map() to create a new array where every number is multiplied by 5.
let originalNumbers = [2, 4, 6, 8, 10];

let multipliedNumbers = originalNumbers.map(function(number) {
    return number * 5;
});

console.log("Original Array:", originalNumbers);
console.log("New Array:", multipliedNumbers);

// 3. Given an array of numbers, use filter() to get only numbers greater than 20
let numberCollection = [10, 25, 15, 35, 50, 5, 40];

let numbersAboveTwenty = numberCollection.filter(function(number) {
    return number > 20;
});

console.log("Original Array:", numberCollection);
console.log("Numbers greater than 20:", numbersAboveTwenty);

// 4. Create an employee array containing name and salary. Use filter() to display employees whose salary is less than or equal to ₹300,000.
let employeeRecords = [
    { name: "Venkat", salary: 250000 },
    { name: "Gopal", salary: 350000 },
    { name: "Kiran", salary: 200000 },
    { name: "Sasi", salary: 400000 },
    { name: "Dinesh", salary: 300000 }
];

let eligibleEmployees = employeeRecords.filter(function(employee) {
    return employee.salary <= 300000;
});

console.log("Employees earning ₹300,000 or less:");

eligibleEmployees.forEach(function(employee) {
    console.log("Name:", employee.name, "| Salary: " + employee.salary);
});

// 5. Using the same employee array, use find() to get the first employee whose salary is greater than ₹200,000.
let employeeDirectory = [
    { name: "Venkat", salary: 250000 },
    { name: "Gopal", salary: 350000 },
    { name: "Kiran", salary: 200000 },
    { name: "Sasi", salary: 400000 },
    { name: "Dinesh", salary: 300000 }
];

let firstEligibleEmployee = employeeDirectory.find(function(employee) {
    return employee.salary > 200000;
});

console.log("First employee earning more than ₹200,000:");
console.log(firstEligibleEmployee);

// 6. Use reduce() to calculate the total of all numbers in an array.
let numberValues = [10, 20, 30, 40, 50];

let totalSum = numberValues.reduce(function(total, number) {
    return total + number;
}, 0);

console.log("Numbers:", numberValues);
console.log("Total Sum:", totalSum);

// 7. Create an array of numbers and use some() to check whether at least one number is even.
let numberGroup = [3, 7, 11, 14, 19];

let hasEvenNumber = numberGroup.some(function(number) {
    return number % 2 === 0;
});

console.log("Numbers:", numberGroup);
console.log("Contains an even number:", hasEvenNumber);

// 8. Use every() to check whether all numbers in an array are greater than zero.
let positiveNumberList = [10, 25, 35, 40, 50];

let allNumbersPositive = positiveNumberList.every(function(number) {
    return number > 0;
});

console.log("Numbers:", positiveNumberList);
console.log("Are all numbers greater than zero?", allNumbersPositive);

// 9. Given an array of numbers, sort them in ascending order using the sort callback.
let unsortedNumbers = [45, 12, 78, 23, 9, 56, 34];

let ascendingNumbers = unsortedNumbers.sort(function(a, b) {
    return a - b;
});

console.log("Original Array:", unsortedNumbers);
console.log("Ascending Order:", ascendingNumbers);

// 10. Given an array of numbers, sort them in descending order using sort() and (a, b) => b - a.
let descendingNumberList = [45, 12, 78, 23, 9, 56, 34];

let sortedDescending = descendingNumberList.sort((a, b) => b - a);

console.log("Descending Order:", sortedDescending);


// Part 2: String Methods

// 11. Create a string "javascript" and print the character at index 4 using charAt().
let programmingLanguage = "javascript";

let selectedCharacter = programmingLanguage.charAt(4);

console.log("String:", programmingLanguage);
console.log("Character at index 4:", selectedCharacter);

// 12. Find the character code at index 2 using charCodeAt().
let codingLanguage = "javascript";

let characterCode = codingLanguage.charCodeAt(2);

console.log("String:", codingLanguage);
console.log("Character at index 2:", codingLanguage.charAt(2));
console.log("Character code at index 2:", characterCode);

// 13. Create a string with spaces at the beginning and end. Remove the extra spaces using trim().
let welcomeMessage = "   Welcome to JavaScript!   ";

let trimmedMessage = welcomeMessage.trim();

console.log("Original String:", welcomeMessage);
console.log("Trimmed String:", trimmedMessage);

// 14. Convert a string to uppercase and lowercase using the appropriate methods.
let courseName = "JavaScript Programming";

let uppercaseName = courseName.toUpperCase();
let lowercaseName = courseName.toLowerCase();

console.log("Original String:", courseName);
console.log("Uppercase String:", uppercaseName);
console.log("Lowercase String:", lowercaseName);

//15. Check whether a string contains "script" using includes().
let websiteLanguage = "javascript programming";

let containsScript = websiteLanguage.includes("script");

console.log("Original String:", websiteLanguage);
console.log('Contains "script":', containsScript);

// 16. Check whether a string starts with "Java" and ends with "Script" using the appropriate methods.
let languageName = "JavaScript";

let startsWithJava = languageName.startsWith("Java");
let endsWithScript = languageName.endsWith("Script");

console.log("String:", languageName);
console.log('Starts with "Java":', startsWithJava);
console.log('Ends with "Script":', endsWithScript);

// 17. Replace every occurrence of "java" with "python" in a string using replaceAll().
let programmingTopics = "java is popular. java is easy to learn.";

let updatedTopics = programmingTopics.replaceAll("java", "python");

console.log("Original String:", programmingTopics);
console.log("Updated String:", updatedTopics);

// 18. Split the string "html-css-javascript-react" into an array using split().
let technologyList = "html-css-javascript-react";

let technologyArray = technologyList.split("-");

console.log("Original String:", technologyList);
console.log("Technology Array:", technologyArray);

// 19. Convert an array of names into a single string using join() with a comma separator.
let studentNames = ["Hemanth", "Kalyan", "Mahesh", "Venkat"];

let namesString = studentNames.join(", ");

console.log("Names Array:", studentNames);
console.log("Names String:", namesString);

// 20. Create a string and extract a portion of it using slice().
let courseTitle = "JavaScript Programming";

let extractedText = courseTitle.slice(0, 10);

console.log("Original String:", courseTitle);
console.log("Extracted Text:", extractedText);


// Part 3: Date Methods

// 21. Create a Date object and print the current year, month, date, and day.
let currentDateInfo = new Date();

let currentYear = currentDateInfo.getFullYear();
let currentMonth = currentDateInfo.getMonth() + 1;
let currentDayOfMonth = currentDateInfo.getDate();
let currentDayOfWeek = currentDateInfo.getDay();

console.log("Current Year:", currentYear);
console.log("Current Month:", currentMonth);
console.log("Current Date:", currentDayOfMonth);
console.log("Day of Week:", currentDayOfWeek);

// 22. Create an array containing all 12 month names. Use getMonth() to display the current month name.
let monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

let todayDate = new Date();

let currentMonthName = monthNames[todayDate.getMonth()];

console.log("Current Month:", currentMonthName);

// 23. Print the current hours, minutes, and seconds using the appropriate date methods.
let currentTimeInfo = new Date();
let currentHours = currentTimeInfo.getHours();
let currentMinutes = currentTimeInfo.getMinutes();
let currentSeconds = currentTimeInfo.getSeconds();

console.log("Current Hours:", currentHours);
console.log("Current Minutes:", currentMinutes);
console.log("Current Seconds:", currentSeconds);

// 24. Create a date object and change its year to 2003, month to January, and date to 30 using the setter methods.
let modifiedDateInfo = new Date();

modifiedDateInfo.setFullYear(2003);
modifiedDateInfo.setMonth(0);
modifiedDateInfo.setDate(30);

console.log("Modified Date:", modifiedDateInfo);
console.log("Year:", modifiedDateInfo.getFullYear());
console.log("Month:", modifiedDateInfo.getMonth() + 1);
console.log("Date:", modifiedDateInfo.getDate());


// Part 4: Asynchronous JavaScript

// 25. Use setTimeout() to print "Welcome to JavaScript" after 3 seconds.
setTimeout(function () {
    console.log("Welcome to JavaScript");
}, 3000);

// 26. Use setInterval() to print "Learning JavaScript" every 2 seconds.
setInterval(function () {
    console.log("Learning JavaScript");
}, 2000);

// 27. Stop the interval created in Task 26 after 8 seconds using clearInterval()
// Start displaying a message every 2 seconds
let learningInterval = setInterval(function () {
    console.log("Learning JavaScript");
}, 2000);

// Stop the interval after 8 seconds
setTimeout(function () {
    clearInterval(learningInterval);
    console.log("Interval stopped");
}, 8000);

// 28. Create three functions named one(), two(), and three(). Call them in this order: one(), setTimeout(two, 0), and three(). Observe the output order.
// first function
function one() {
    console.log("Function One");
}

// second function
function two() {
    console.log("Function Two");
}

// third function
function three() {
    console.log("Function Three");
}

// Call the functions
one();
setTimeout(two, 0);
three();

/* output
Function One
Function Three
Function Two */

// Part 5: Promises and API Fetching

// 29. Create a Promise that resolves with the message "Login successful" and display the result using .then().
let loginPromise = new Promise(function (resolve, reject) {
    resolve("Login successful");
});


loginPromise.then(function (loginMessage) {
    console.log(loginMessage);
});

// 30. Create a Promise that rejects with the message "Invalid password" and handle the error using .catch().
let passwordPromise = new Promise(function (resolve, reject) {
    reject("Invalid password");
});

passwordPromise.catch(function (errorMessage) {
    console.log(errorMessage);
});

// 31. Create a Promise and use .finally() to print "Process completed" regardless of whether it resolves or rejects.
// Create a Promise
let processPromise = new Promise(function (resolve, reject) {
    resolve("Process successful");
});

// Handle the Promise
processPromise
    .then(function (successMessage) {
        console.log(successMessage);
    })
    .catch(function (errorMessage) {
        console.log(errorMessage);
    })
    .finally(function () {
        console.log("Process completed");
    });

/* 32. Fetch product data from the Fake Store API:
https://fakestoreapi.com/products
Convert the response to JSON and print all product titles using forEach().*/
// Fetch product data from the API
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (productList) {
        // Print each product title
        productList.forEach(function (productItem) {
            console.log(productItem.title);
        });
    })
    .catch(function (error) {
        console.warn("Error fetching products:", error);
    });

// 33. Fetch the same API and print the title, price, and category of every product.   
// Fetch product data from the API
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (productList) {
        // Display details of each product
        productList.forEach(function (productItem) {
            console.log("Title:", productItem.title);
            console.log("Price:", productItem.price);
            console.log("Category:", productItem.category);
            console.log("--------------------");
        });
    })
    .catch(function (error) {
        console.warn("Error fetching products:", error);
    });

// 34. Handle API errors using .catch() and display the error message using console.warn().
// Fetch product data from the API
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        // Check whether the response was successful
        if (!response.ok) {
            throw new Error("Failed to fetch product data");
        }

        return response.json();
    })
    .then(function (productList) {
        console.log("Products fetched successfully:");
        console.log(productList);
    })
    .catch(function (error) {
        console.warn("API Error:", error.message);
    });

// 35. Use .finally() to print "API call completed" after the fetch process.
// Fetch product data from the API
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Failed to fetch product data");
        }

        return response.json();
    })
    .then(function (productList) {
        console.log("Products fetched successfully:");
        console.log(productList);
    })
    .catch(function (error) {
        console.warn("API Error:", error.message);
    })
    .finally(function () {
        console.log("API call completed");
    });

// Part 6: Real-Time Mini Tasks

// 36. Employee salary report: Create an array of employee objects. Use filter() to select employees earning less than ₹300,000, then use forEach() to print their names and salaries.
// Create an array of employee objects
let salaryReportEmployees = [
    { name: "Sasi", salary: 250000 },
    { name: "Hemanth", salary: 350000 },
    { name: "Sai", salary: 280000 },
    { name: "Kalyan", salary: 400000 },
    { name: "Venkat", salary: 200000 }
];

// Filter employees earning less than ₹300,000
let eligibleSalaryEmployees = salaryReportEmployees.filter(function (employee) {
    return employee.salary < 300000;
});

// Display employee names and salaries
eligibleSalaryEmployees.forEach(function (employee) {
    console.log("Employee Name:", employee.name);
    console.log("Employee Salary: " + employee.salary);
    console.log("--------------------");
});

// 37. Product price calculator: Fetch products from the Fake Store API and use map() to create a new array containing only product titles and prices.
// Fetch product data from the API
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    })
    .then(function (productList) {
        // Create a new array containing only titles and prices
        let productPriceList = productList.map(function (productItem) {
            return {
                title: productItem.title,
                price: productItem.price
            };
        });

        // Display the new array
        console.log("Product Titles and Prices:");
        console.log(productPriceList);
    })
    .catch(function (error) {
        console.warn("API Error:", error.message);
    });

// 38. Product search: Fetch products and use filter() to display products belonging to a category you choose.
// Select the category to search for
let selectedProductCategory = "electronics";

// Fetch product data from the API
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    })
    .then(function (productList) {
        // Filter products by category
        let matchingProducts = productList.filter(function (productItem) {
            return productItem.category === selectedProductCategory;
        });

        // Display matching products
        console.log("Category:", selectedProductCategory);

        matchingProducts.forEach(function (productItem) {
            console.log("Title:", productItem.title);
            console.log("Price:", productItem.price);
            console.log("--------------------");
        });

        if (matchingProducts.length === 0) {
            console.log("No products found in this category.");
        }
    })
    .catch(function (error) {
        console.warn("API Error:", error.message);
    });

// 39. Number analysis: Given an array of numbers, use map(), filter(), reduce(), some(), and every() to perform different calculations and checks.
// Create an array of numbers
let analysisNumberList = [10, 15, 20, 25, 30];

// 1. Use map() to multiply each number by 2
let doubledNumberList = analysisNumberList.map(function (number) {
    return number * 2;
});
console.log("Doubled Numbers:", doubledNumberList);

// 2. Use filter() to find numbers greater than 20
let numberAboveTwenty = analysisNumberList.filter(function (number) {
    return number > 20;
});
console.log("Numbers Greater Than 20:", numberAboveTwenty);

// 3. Use reduce() to calculate the total
let totalNumberSum = analysisNumberList.reduce(function (total, number) {
    return total + number;
}, 0);
console.log("Total Sum:", totalNumberSum);

// 4. Use some() to check whether at least one number is even
let containsEvenNumber = analysisNumberList.some(function (number) {
    return number % 2 === 0;
});
console.log("Contains Even Number:", containsEvenNumber);

// 5. Use every() to check whether all numbers are positive
let allNumbersArePositive = analysisNumberList.every(function (number) {
    return number > 0;
});
console.log("All Numbers Are Positive:", allNumbersArePositive);

// 40. Product listing: Fetch the Fake Store API data, convert the response to JSON, and print the title, price, and category of each product. Handle errors with .catch() and print a completion message with .finally().
// Fetch product data from the API
fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        // Check whether the request was successful
        if (!response.ok) {
            throw new Error("Failed to fetch product data");
        }

        // Convert the response into JSON
        return response.json();
    })
    .then(function (productList) {
        // Display the details of each product
        productList.forEach(function (productItem) {
            console.log("Product Title:", productItem.title);
            console.log("Product Price:", productItem.price);
            console.log("Product Category:", productItem.category);
            console.log("----------------------------");
        });
    })
    .catch(function (error) {
        // Handle errors
        console.warn("API Error:", error.message);
    })
    .finally(function () {
        // Display a completion message
        console.log("API call completed");
    });

















