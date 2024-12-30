// script.js

// Q1 - Use the map function to square each element of the array
// Uncomment the lines below to execute Q1
/*
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers:", squaredNumbers);
*/

// Q2 - Function to return grade based on score using ternary operators
// Uncomment the lines below to execute Q2
/*
function getGrade(score) {
    return score >= 90 ? 'A' :
           score >= 80 ? 'B' :
           score >= 70 ? 'C' :
           score >= 60 ? 'D' : 'F';
}
console.log("Grade:", getGrade(85));
*/

// Q3 - Object representing a car and function to change the year
// Uncomment the lines below to execute Q3
/*
const car = {
    companyName: "Tesla",
    model: "Model S",
    year: 2020
};

function changeYear(newYear) {
    car.year = newYear;
}

changeYear(2023);

const { model, year } = car;
console.log("Model:", model, "Year:", year);
*/

// Q4 - Filter function to get only prime numbers
// Uncomment the lines below to execute Q4
/*
const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const nums = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const primes = nums.filter(isPrime);
console.log("Prime Numbers:", primes);
*/

// Q5 - Use cases of map, filter, and reduce
// Uncomment the lines below to execute Q5
/*
console.log(`
Use Cases:
1. map: Transform elements in an array (e.g., convert temperatures from Celsius to Fahrenheit).
2. filter: Extract specific elements from an array (e.g., get even numbers from a list).
3. reduce: Aggregate array elements into a single value (e.g., sum of all elements in an array).
`);
*/

// Q6 - Async-await function to fetch data from an API
// Uncomment the lines below to execute Q6
/*
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData();
*/

// Q7 - Nested object and optional chaining
// Uncomment the lines below to execute Q7
/*
const person = {
    name: "John Doe",
    address: {
        city: "New York",
        zip: "10001"
    },
    contact: {
        phone: "123-456-7890"
    }
};

const phone = person.contact?.phone;
console.log("Phone Number:", phone);
*/
