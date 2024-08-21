let isPoweredOn = true;

function appendToDisplay(value) {
    if (isPoweredOn) {
        document.getElementById('display').value += value;
    }
}

function clearDisplay() {
    if (isPoweredOn) {
        document.getElementById('display').value = '';
    }
}

function calculate() {
    if (isPoweredOn) {
        try {
            let expression = document.getElementById('display').value;
            expression = expression.replace(/sin\(/g, 'Math.sin(');
            expression = expression.replace(/cos\(/g, 'Math.cos(');
            expression = expression.replace(/tan\(/g, 'Math.tan(');
            let result = eval(expression);
            document.getElementById('display').value = result;
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
    }
}

function togglePower() {
    isPoweredOn = !isPoweredOn;
    const calculator = document.getElementById('calculator');
    if (isPoweredOn) {
        calculator.classList.remove('off');
        clearDisplay();
    } else {
        calculator.classList.add('off');
        document.getElementById('display').value = '';
    }
}