const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button-container button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "=") {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = "Error";
            }
        } else if (value === "C") {
            display.textContent = "";
        } else {
            display.textContent += value;
        }
    });
});
