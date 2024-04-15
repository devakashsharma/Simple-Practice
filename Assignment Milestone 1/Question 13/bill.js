function billSliptter(numOfDishes, numOfPeople) {
    const totalAmount = numOfDishes.reduce((acc, curr) => acc + curr, 0);

    const billPerPerson = totalAmount / numOfPeople;

    return {
        billAmount: totalAmount,
        perPerson: billPerPerson
    }
}

const numOfDishes = [10, 5, 30];
const numOfPeople = 3;

const details = billSliptter(numOfDishes, numOfPeople);
console.log(`Total Amount: ${details.billAmount}`);
console.log(`Per Person: ${details.perPerson}`);