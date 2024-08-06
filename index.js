const display = document.getElementById("screen");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value); //built-in method for a calculator
        if (display.value == "Infinity") {
            throw new Error("Division by 0");
        }
    } catch(error) {
        display.value = "Cannot process";
    }
}