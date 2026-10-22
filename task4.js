// Part 1: Array Manipulation Methods

// 1.Create an array of 5 fruits. Add 3 fruits at the end using push() and print the array.
{
    let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

    fruits.push("Pineapple", "Watermelon", "Papaya");

    console.log(fruits);
}

// 2.Create an array of 6 numbers. Remove the last element using pop() and print the result.
{
    let numbers = [10, 20, 30, 40, 50, 60];

    numbers.pop();

    console.log(numbers);
}

// 3.Create an array of 5 names. Remove the first element using shift() and print the array.
{
    let studentNames = ["Venkat", "Krishna", "Kalyan", "Gopal", "Ravi"];

    studentNames.shift();

    console.log(studentNames);
}

// 4.Create an array of 4 numbers. Add two numbers at the beginning using unshift().
{
    let numbers = [30, 40, 50, 60];

    numbers.unshift(10, 20);

    console.log(numbers);
}

// 5.Given let arr = [10, 20, 30, 40, 50], remove 2 elements starting from index 1 using splice().
{
    let numbers = [10, 20, 30, 40, 50];

    numbers.splice(1, 2);

    console.log(numbers);
}

// 6. Given let arr = [1, 2, 3, 4, 5], replace the value 3 with 100 using splice().
{
    let arr = [1, 2, 3, 4, 5];

    arr.splice(2, 1, 100);

    console.log(arr);
}

// 7.Create an array of 5 numbers and use fill() to replace the elements from index 2 to index 4 with "hello".
{
    let arr = [1, 2, 3, 4, 5];

    arr.splice(2, 1, 100);

    console.log(arr);
}


// Part 2: Array Merge and Search Methods

// 8.Create two arrays of numbers and combine them using concat().
{
    let arr1 = [10, 20, 30];
    let arr2 = [40, 50, 60];

    let result = arr1.concat(arr2);

    console.log(result);
}

// 9. Given let arr = [10, 20, 30, 40, 50, 60], extract elements from index 1 to index 4 using slice().
{
    let arr = [10, 20, 30, 40, 50, 60];

    let result = arr.slice(1, 4);

    console.log(result);
}

// 10.Create a nested array and convert it into a single-level array using flat(Infinity).
{
    let arr = [1, 2, [3, 4], [5, [6, 7]]];

    let result = arr.flat(Infinity);

    console.log(result);
}

// 11.Given let arr = [10, 20, 30, 40, 50], check whether the value 30 exists using includes().
{
    let arr = [10, 20, 30, 40, 50];

    let result = arr.includes(30);

    console.log(result);
}

// 12.Given let arr = [5, 10, 15, 20, 25], find the index of 20 using indexOf().
{
    let arr = [5, 10, 15, 20, 25];

    let result = arr.indexOf(20);

    console.log(result);
}

// 13.Given let arr = [1, 2, 3, 2, 1, 2], find the last index of 2 using lastIndexOf().
{
    let arr = [1, 2, 3, 2, 1, 2];

    let result = arr.lastIndexOf(2);

    console.log(result);
}

// 14.Create an array of numbers and arrange its elements using sort().
{
    let arr = [40, 10, 50, 20, 30];

    arr.sort((a, b) => a - b);

    console.log(arr);
}

// 15.Create an array of 7 numbers and reverse the order using reverse().
{
    let arr = [10, 20, 30, 40, 50, 60, 70];

    arr.reverse();

    console.log(arr);
}


// Part 3: Spread and Rest Operators

// 16.Create two arrays containing 4 numbers each. Merge them into one array using the spread operator.
{
    let arr1 = [10, 20, 30, 40];
    let arr2 = [50, 60, 70, 80];

    let result = [...arr1, ...arr2];

    console.log(result);
}

//17.Create two objects: one containing student details and another containing job details. Merge both objects using the spread operator.
{
    let student = {
        name: "Venkat",
        age: 24
    };

    let job = {
        role: "Full Stack Developer",
        company: "Stackly"
    };

    let employee = { ...student, ...job };

    console.log(employee);
}

// 18.Create a function that accepts two parameters and uses the rest operator to collect all remaining arguments into an array.
{
    function addNumbers(a, b, ...numbers) {
        console.log("First number:", a);
        console.log("Second number:", b);
        console.log("Remaining numbers:", numbers);
    }

    addNumbers(10, 20, 30, 40, 50);
}

// 19.Write a function using function one(a, b, ...c) that prints the sum of a, b, c[0], and c[1].
{
    function one(a, b, ...c) {
        let sum = a + b + c[0] + c[1];

        console.log("Sum:", sum);
    }

    one(10, 20, 30, 40);
}

// 20.Create two arrays and use the spread operator to copy all elements from the first array into a new array.
{
    let arr1 = [10, 20, 30, 40];

    let arr2 = [...arr1];

    console.log("Original array:", arr1);
    console.log("Copied array:", arr2);
}


// Part 4: Array Destructuring

// 21.Given let arr = [10, 20, 30, 40], extract all four values into separate variables using array destructuring.
{
    let arr = [10, 20, 30, 40];

    let [a, b, c, d] = arr;

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

// 22. Given let nested = [1, 2, [3, 4, [5, 6]]], extract the values 1, 2, 3, 4, 5, and 6 using nested destructuring.
{
    let arr = [1, 2, [3, 4, [5, 6]]];

    let [a, b, [c, d, [e, f]]] = arr;

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
}

// 23.Create an array containing a student's name, age, and CGPA. Extract these values using destructuring and print them.
{
    let student = ["Venkat", 24, 7.83];

    let [name, age, cgpa] = student;

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("CGPA:", cgpa);
}


// Part 5: Object Destructuring

// 24.Create an object containing name, role, and location. Extract these properties using object destructuring.
{
    let employee = {
        name: "Venkata rao",
        role: "Full Stack Developer",
        location: "Hyderabad"
    };

    let { name, role, location } = employee;

    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Location:", location);
}

// 25.Create an object containing a student's name and a nested address object with city and state. Extract the city and state using nested object destructuring.
{
    let student = {
        name: "Venkat rao",
        address: {
            city: "Hyderabad",
            state: "Telangana"
        }
    };

    let {
        name,
        address: { city, state }
    } = student;

    console.log("Name:", name);
    console.log("City:", city);
    console.log("State:", state);
}

// 26.Given an object with name, role, and location: { mainLocation, currentLocation }, print all four values using destructuring.
{
    let employee = {
        name: "Venkat rao",
        role: "Full Stack Developer",
        location: {
            mainLocation: "Hyderabad",
            currentLocation: "Ongole"
        }
    };

    let {
        name,
        role,
        location: { mainLocation, currentLocation }
    } = employee;

    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Main Location:", mainLocation);
    console.log("Current Location:", currentLocation);
}


// Part 6: Mixed Practical Challenges

// 27.Create an array of 10 numbers. Remove the first and last elements, add two new numbers at the beginning, and print the final array.
{
    let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    arr.shift();
    arr.pop();

    arr.unshift(5, 15);

    console.log(arr);
}

// 28.Create an array containing duplicate numbers. Use includes(), indexOf(), and lastIndexOf() to check and print information about one selected number.
{
    let arr = [10, 20, 30, 20, 40, 20];

    let number = 20;

    console.log("Number exists:", arr.includes(number));
    console.log("First index:", arr.indexOf(number));
    console.log("Last index:", arr.lastIndexOf(number));
}

// 29.Create two objects containing employee information. Merge them using the spread operator, then destructure and print the employee's name and role.
{
    let employee1 = {
        name: "Venkat",
        age: 24
    };

    let employee2 = {
        role: "Full Stack Developer",
        company: "Stackly"
    };

    let employee = { ...employee1, ...employee2 };

    let { name, role } = employee;

    console.log("Name:", name);
    console.log("Role:", role);
}

// 30.Create a nested array containing numbers. Flatten it using flat(Infinity), reverse the resulting array, and print the final result.
{
    let arr = [1, [2, 3], [4, [5, 6]]];

    let result = arr.flat(Infinity);

    result.reverse();

    console.log(result);
}




