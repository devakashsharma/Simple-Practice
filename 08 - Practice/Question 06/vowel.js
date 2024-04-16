const username = document.getElementById("name");
const count = document.getElementById("click");
const total = document.getElementById("total");

count.addEventListener("click", () => {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    let vowelCounter = 0;

    for (let char of username.value.toLowerCase()) {
        if (vowel.includes(char)) {
            vowelCounter++;
        }
    }
    total.innerHTML = vowelCounter;
})