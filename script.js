function addtodisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}
function cleartodisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
function deletefromlast(){
    display.value = display.value.slice(0, -1);
}
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'error';
    }
}