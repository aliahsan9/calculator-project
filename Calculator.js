const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (value === "C") {
            currentInput = "";
            display.value = "";
        } 
        else if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch {
                display.value = "Error";
                currentInput = "";
            }
        } 
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

// Keyboard support (pro feature)
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
        currentInput += key;
        display.value = currentInput;
    } 
    else if (key === "Enter") {
        try {
            currentInput = eval(currentInput).toString();
            display.value = currentInput;
        } catch {
            display.value = "Error";
            currentInput = "";
        }
    } 
    else if (key === "Backspace") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    } 
    else if (key === "Escape") {
        currentInput = "";
        display.value = "";
    }
});
