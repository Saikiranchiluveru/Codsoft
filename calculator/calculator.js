const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}
function deleteDisplay() {
    display.value = "";

}
function Calculate() {
    display.value = eval(display.value);
}