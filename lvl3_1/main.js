
let bodyElement = document.querySelector("body");
let inputRed = document.querySelector("#rot");
let inputBlue = document.querySelector("#blau");
let inputGreen = document.querySelector("#grun");

function changeBackground(color) {
    bodyElement.style.backgroundColor = color;
}

function changeHandle() {
    let red = inputRed.value;
    let blue = inputBlue.value;
    let green = inputGreen.value;

    let color = `rgb(${red}, ${green}, ${blue})`;

    bodyElement.style.backgroundColor = color;
}









