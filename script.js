let string = "";
const inputDisplay = document.querySelector('input');
const buttons = document.querySelectorAll('.button');

// Function to update display and string
function updateDisplay() {
    inputDisplay.value = string;
}

// Function to evaluate and display result
function calculateResult() {
    try {
        string = eval(string);
    } catch (error) {
        string = "Error";
    }
    updateDisplay();
}

// Function to handle click events on calculator buttons
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            calculateResult();
        } else if (buttonText === 'AC') {
            string = "";
            updateDisplay();
        } else if (buttonText === '⌫') {
            if (string.length > 0) {
                string = string.slice(0, -1);
                updateDisplay();
            }
        } else if (buttonText === '÷') {
            string += '/';
            updateDisplay();
        } else if (buttonText === '×') {
            string += '*';
            updateDisplay();
        } else {
            string += buttonText;
            updateDisplay();
        }
    });
});

// Function to handle keyboard input
function handleKeyboardInput(event) {
    const key = event.key;

    if (key === '=' || key === 'Enter') { // 'Enter' key also acts as '='
        calculateResult();
    } else if (key === 'Escape') { // 'Esc' key
        string = "";
        updateDisplay();
    } else if (key === 'Backspace') { // 'Backspace' key
        if (string.length > 0) {
            string = string.slice(0, -1);
            updateDisplay();
        }
    } else if (!isNaN(key) || key === '+' || key === '-' || key === '.' || key === '/' || key === '*') {
        string += key;
        updateDisplay();
    }
}

// Add event listener for keyboard input
document.addEventListener('keydown', handleKeyboardInput);
