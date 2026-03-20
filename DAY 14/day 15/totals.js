const transactions = [
    { name: "Laptop", unitsSold: 20 },
    { name: "Mouse", unitsSold:15 },
    { name: "Keyboard", unitsSold: 27 }
];

const totalUnitsSold = transactions.reduce((accumulator, currentTransaction) => {
    return accumulator + currentTransaction.unitsSold;
}, 0); 
console.log("Total Units Sold:", totalUnitsSold);