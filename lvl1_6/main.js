let selectElement = document.querySelector("#my-select");

//1. Möglichkeit
// selectElement.addEventListener("change", () => {
//     console.log(selectElement.value);
//     document.querySelector("#option-selected").innerHTML = selectElement.value;
// })

//2. Möglichkeit mit dem Event
selectElement.addEventListener("change", (event) => {
    let valueViaTarget = event.target.value;
    document.querySelector("#option-selected").innerHTML = "Ausgewählt wurde: " + valueViaTarget;

})