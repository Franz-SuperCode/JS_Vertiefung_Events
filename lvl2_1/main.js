let bodyElement = document.querySelector("body");
let grauTaste = document.querySelector("#grauTaste");
let weissTaste = document.querySelector("#weissTaste");
let blauTaste = document.querySelector("#blauTaste");
let gelbTaste = document.querySelector("#gelbTaste");


grauTaste.addEventListener("click", () => {
    bodyElement.classList.add("bodyGrey");
    bodyElement.classList.remove("bodyWhite");
    bodyElement.classList.remove("bodyBlue");
    bodyElement.classList.remove("bodyYellow");
})
weissTaste.addEventListener("click", () => {
    bodyElement.classList.add("bodyWhite");
    bodyElement.classList.remove("bodyGrey");
    bodyElement.classList.remove("bodyBlue");
    bodyElement.classList.remove("bodyYellow");
})
blauTaste.addEventListener("click", () => {
    bodyElement.classList.add("bodyBlue");
    bodyElement.classList.remove("bodyWhite");
    bodyElement.classList.remove("bodyGrey");
    bodyElement.classList.remove("bodyYellow");
})
gelbTaste.addEventListener("click", () => {
    bodyElement.classList.add("bodyYellow");
    bodyElement.classList.remove("bodyWhite");
    bodyElement.classList.remove("bodyBlue");
    bodyElement.classList.remove("bodyGrey");
})