const autor = 'Zbigniew Drelich';

console.log(`W końcu znalazłaś/eś się w odpowiednim miejscu. ${autor} wita serdecznie.`);

const paragraph = document.querySelector(`.paragraph-js`);
paragraph.innerHTML = `Nazywam się ${autor} i jestem odpowiedzialny za ten bałagan.`;