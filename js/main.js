const autor = 'Zbigniew Drelich';
const name = 'Zibi';
const age = 2300;
// const welcome = ('Zibi', 2300)

// console.log(`W końcu znalazłaś/eś się w odpowiednim miejscu. ${autor} wita serdecznie.`);

const paragraph = document.querySelector(`.paragraph-js`);
paragraph.innerHTML = `Nazywam się ${autor} i jestem odpowiedzialny za ten bałagan.`;

const welcome = (name, age) => {
    if (age < 2000) {
        console.log(`${name}, you are not to old to learn more skills`)
    } else {
        console.log(`Welcome ${name} in to Wicher's Academy.`);
    }
}

welcome(name, age)