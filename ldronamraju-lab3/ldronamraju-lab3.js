// Loka Adarsh
// ITMD 541-01 Graduate Student

// Exercise 1: minMaxAverage
function minMaxAverage(numbers) {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let avg = sum / numbers.length;
    console.log(`Total Numbers: ${numbers.length}, Min Value: ${min}, Max Value: ${max}, Average: ${avg.toFixed(2)}`);
}

// Test cases for Exercise 1
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
minMaxAverage([7, 2, 9, 4, 6, 8, 3]);

// Exercise 2: countVowels
function countVowels(word) {
    let vowels = word.match(/[aeiou]/gi);
    let count = vowels ? vowels.length : 0;
    console.log(`${word}: ${count} vowels`);
}

// Test cases for Exercise 2
countVowels("Winter");
countVowels("Hello");
countVowels("Javascript");

// Exercise 3: sortNumbers
function sortNumbers(numbers) {
    let sortedArray = [...numbers].sort((a, b) => a - b);
    console.log(`Original Array: ${numbers} -> Sorted Array: ${sortedArray}`);
}

// Test cases for Exercise 3
sortNumbers([9, 4, 6, 2]);
sortNumbers([15, 3, 9, 8, 12]);
sortNumbers([100, 54, 67, 23, 1, 99]);

// Exercise 4: celsiusToFahrenheit
function celsiusToFahrenheit(celsius) {
    let celsiusNum = parseFloat(celsius);
    let fahrenheit = (celsiusNum * 9/5) + 32;
    console.log(`${celsiusNum.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}

// Test cases for Exercise 4
celsiusToFahrenheit(30);
celsiusToFahrenheit(0);
celsiusToFahrenheit("35");
celsiusToFahrenheit("-10");

// Exercise 5: Sorting people by age and introducing them
function sortPeopleByAge(people) {
    let sortedPeople = people.sort((a, b) => a.age - b.age);
    let introductions = sortedPeople.map(person => `${person.name} is ${person.age} and from ${person.city}`);
    console.log(introductions);
}

// Test cases for Exercise 5
let peopleArray = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 20, city: 'Chicago' },
    { name: 'Charlie', age: 30, city: 'Los Angeles' },
    { name: 'Dave', age: 22, city: 'Houston' },
    { name: 'Eve', age: 27, city: 'San Francisco' }
];
sortPeopleByAge(peopleArray);

let anotherPeopleArray = [
    { name: 'Mike', age: 40, city: 'Austin' },
    { name: 'Sophia', age: 32, city: 'Boston' },
    { name: 'Emma', age: 28, city: 'Seattle' },
    { name: 'John', age: 35, city: 'Denver' },
    { name: 'Olivia', age: 30, city: 'Miami' }
];
sortPeopleByAge(anotherPeopleArray);

let thirdPeopleArray = [
    { name: 'Grace', age: 29, city: 'Portland' },
    { name: 'Henry', age: 24, city: 'Dallas' },
    { name: 'Isabella', age: 31, city: 'Atlanta' },
    { name: 'Jack', age: 26, city: 'Phoenix' },
    { name: 'Katie', age: 33, city: 'San Diego' }
];
sortPeopleByAge(thirdPeopleArray);
