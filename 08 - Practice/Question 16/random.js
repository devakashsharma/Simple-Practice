function randomNumberGenerator() {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    return randomNumber;
}

const randomNumber = randomNumberGenerator();
console.log(randomNumber);