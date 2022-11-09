let buttonElement = document.querySelector("#clickMe");
console.log(buttonElement);

//Bei jedem Klick auf eine Variable addieren
let zähler = 0;
buttonElement.addEventListener("click", () => {
    zähler++;
    buttonElement.innerHTML = `Click me: ${zähler}`;

    console.log(zähler);
})