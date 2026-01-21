// 1. Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// 2. Double each number
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// 3. Keep numbers greater than 5
const filtered = doubled.filter(n => n > 5); // [6, 8, 10]

// 4. Merge the doubled and filtered arrays
const merged = [...doubled, ...filtered]; // [2,4,6,8,10,6,8,10]

// 5. Find the first multiple of 3
const firstMultipleOfThree = merged.find(n => n % 3 === 0); // 6

console.log("Doubled:", doubled);
console.log("Filtered:", filtered);
console.log("Merged:", merged);
console.log("First multiple of 3:", firstMultipleOfThree);
