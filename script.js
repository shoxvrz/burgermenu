const burgermenu = document.querySelector(`.burgerMenu`);
const topLine = document.querySelector(`.top`);
const bottomLine = document.querySelector(`.bottom`);
const arrow = document.querySelector(`.img`);
const modal = document.querySelector(`.modal`);
console.log(burgermenu);


modal.addEventListener(`click`, () => {
    modal.classList.toggle(`backToNormal`)
})


burgermenu.addEventListener(`click`, () => {
    topLine.classList.toggle(`topMove`);
    bottomLine.classList.toggle(`bottomMove`);

})

const about = document.querySelector(`.inner`);
console.log(about);
about.addEventListener(`click`, () => {
    about.classList.toggle(`innerMove`);
    arrow.classList.toggle(`img2`);
})

