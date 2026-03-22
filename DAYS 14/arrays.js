const isValidArray = arr => arr.length > 3;

// 2. Create the normal function declaration named processList
function processList(arr) {
    if (isValidArray(arr)) {
        // If isValidArray returns true, log the length
        console.log("Array length:", arr.length);
    } else {
        // If isValidArray returns false, log the message
        console.log("List is too short to process.");
    }
}

// 3. Test processList with two arrays
console.log("--- Testing processList Function ---");

const shortList = [1, 2];
console.log(`Testing shortList (length ${shortList.length}):`);
processList(shortList); // Expected: "List is too short to process."

const longList = [1, 2, 3, 4, 5];
console.log(`Testing longList (length ${longList.length}):`);
processList(longList); // Expected: "Array length: 5"

// --------------------------------------------------
// Part 2: Using the .reduce() method
// --------------------------------------------------

console.log("\n--- Testing .reduce() Method for Transactions ---");

// 1. Declare a constant array of objects named transactions
const transactions = [
    { name: "Item A", unitsSold: 15 },
    { name: "Item B", unitsSold: 22 },
    { name: "Item C", unitsSold: 5 },
    { name: "Item D", unitsSold: 30 }
];

// 2. Use the .reduce() method to sum the unitsSold property
// 3. Ensure the initial value for the accumulator in .reduce() is set to 0
const totalUnitsSold = transactions.reduce((accumulator, currentTransaction) => {
    return accumulator + currentTransaction.unitsSold;
}, 0);

// 4. Log the final aggregate result, labeled as "Total Units Sold."
console.log("Total Units Sold:", totalUnitsSold);


