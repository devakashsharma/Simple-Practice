let bankDetails = {
    userName: "Customer1",
    userBalance: 1000,
    deposit: (amount) => {
        if (amount > 0) {
            this.userBalance += amount;
            console.log(`${amount} Amount credited in your bank account!`);
        }
    },
    withdrawal: (amount) => {
        if (amount > 0) {
            this.userBalance -= amount;
            console.log(`${amount} Amount debited in your bank account!`);
        } 
    }
}

bankDetails.deposit(500);
bankDetails.withdrawal(200);
bankDetails.deposit(500);
