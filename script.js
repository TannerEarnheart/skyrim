const quotes = [
    `"Do you get to the cloud district very often? Oh wait, what am I saying? Of course you don't."`,
    `"I used to be an adventurer like you, but then I took an arrow in the knee."`,
    `"Disrespect the law and you disrespect me."`,
    `"Let me guess. Someone stole your sweetroll."`,
    `"Everythings for sale my friend. Everything. If I had a sister Id sell her in a second."`,
    `"Nords' armor has lots of fur. This sometimes makes M'aiq nervous."`,
    `"Iron sword, huh. What are you killing, butterflies?"`,
    `"I mostly deal with petty thievery and drunken brawls. Been too long since we've had a good bandit raid."`,
    `"Skyrim's Harshness Has A Way Of Carving A Man Down To His True Self."`,
    `"Power. You Have It, As Do All Dov. But Power Is Inert Without Action And Choice."`,
    `"What Is Better - To Be Born Good, Or To Overcome Your Evil Nature Through Great Effort?"`,
    `"Never Should've Come Here!"`,
    `"Marina says hello :)"`
];

const button = document.getElementById('generate-btn');
const quoteEl = document.getElementById('quote');

 button.addEventListener('click', () => {
    const random = Math.floor(Math.random() * quotes.length);
    quoteEl.textContent = quotes[random];
    quoteEl.classList.add('fade');
    setTimeout(() => quoteEl.classList.remove('fade'), 500);
});
