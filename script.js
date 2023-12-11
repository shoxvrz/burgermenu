const burgermenu = document.querySelector(`.burgerMenu`);
const topLine = document.querySelector(`.top`);
const bottomLine = document.querySelector(`.bottom`);
console.log(burgermenu);

burgermenu.addEventListener(`click`, () => {
    topLine.classList.toggle(`topMove`);
    bottomLine.classList.toggle(`bottomMove`);
})