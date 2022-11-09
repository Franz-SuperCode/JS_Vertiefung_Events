document.addEventListener("keydown", (event) => {
    let pressedKey = event.key;
    let keyCode = event.keyCode;
    let code = event.code;

    document.querySelector("#outputH2").innerHTML = keyCode;
    document.querySelector("#keyCodeValue").innerHTML = keyCode;
    document.querySelector("#keyValue").innerHTML = pressedKey;
    document.querySelector("#codeValue").innerHTML = code;
    console.log(pressedKey);
    console.log(keyCode);
    console.log(code);

})