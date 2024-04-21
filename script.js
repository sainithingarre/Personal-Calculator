let memoryValue = 0;
let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function addToMemory() {
    memoryValue += parseFloat(displayValue) || 0;
}

function subtractFromMemory() {
    memoryValue -= parseFloat(displayValue) || 0;
}

function recallMemory() {
    displayValue = memoryValue.toString();
    document.getElementById('display').value = displayValue;
}

function clearMemory() {
    memoryValue = 0;
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
