'use strict';

export default class Calculator {
    constructor() {
        // Create containers
        const body = document.body;
        // calc__container
        const calculatorContainer = document.createElement("div");
        calculatorContainer.className = "calc__container";
        body.prepend(calculatorContainer);

        // Screen container
        const screenContainer = document.createElement("div");
        screenContainer.className = "screen__container";
        calculatorContainer.append(screenContainer);

        // Buttons container
        const buttonsContainer = document.createElement("div");
        buttonsContainer.className = "buttons__container";
        calculatorContainer.append(buttonsContainer);

        // Buttons Left
        const buttonsLeft = document.createElement("div");
        buttonsLeft.className = "buttons__left";
        buttonsContainer.prepend(buttonsLeft);

        //Buttons Right
        const buttonsRight = document.createElement("div");
        buttonsRight.className = "buttons__right";
        buttonsContainer.append(buttonsRight);

        // Create left buttons with function
        function createButtonLeft(className, value, text) {
            const button = document.createElement("button");
            button.className = className;
            button.value = value;
            button.textContent = text;
            buttonsLeft.prepend(button);
        }

        // Create right buttons with function
        function createButtonRight(className, value, text) {
            const button = document.createElement("button");
            button.className = className;
            button.value = value;
            button.textContent = text;
            buttonsRight.prepend(button);
        }

        // Create Buttons
        createButtonRight("calc__btn --equal", "=", "=");
        createButtonLeft("calc__btn --ac", "AC", "AC");
        createButtonLeft("calc__btn", ".", ".");
        createButtonLeft("calc__btn", "0", "0");
        createButtonLeft("calc__btn", "3", "3");
        createButtonLeft("calc__btn", "2", "2");
        createButtonLeft("calc__btn", "1", "1");
        createButtonLeft("calc__btn", "6", "6");
        createButtonLeft("calc__btn", "5", "5");
        createButtonLeft("calc__btn", "4", "4");
        createButtonLeft("calc__btn", "9", "9");
        createButtonLeft("calc__btn", "8", "8");
        createButtonLeft("calc__btn", "7", "7");
        createButtonLeft("calc__btn --blue", "*", "x");
        createButtonLeft("calc__btn --blue", "-", "-");
        createButtonRight("calc__btn --blue", "/", "÷");
        createButtonLeft("calc__btn --blue", "+", "+");

        // Create Screen
        function createInput(className, type, name) {
            const screen = document.createElement("input");
            screen.className = className;
            screen.value = "";
            screen.type = type;
            screen.name = name;
            screen.readOnly = true;
            screenContainer.prepend(screen);
        }
        createInput("screen__input", "text", "screen");

        // Calculator function
        function calculatrice(event) {
            // stock number in variable
            const nb = event.target.value;
            // remove content + display content + calcul content
            if (event.target.tagName === "BUTTON") {
                if (nb === 'AC') {
                    this.querySelector(".screen__input").value = "";
                } else if (nb !== '=') {
                    this.querySelector(".screen__input").value += nb;
                } else {
                    const calcul = String(this.querySelector(".screen__input").value);
                    this.querySelector(".screen__input").value = eval(calcul);
                }
            } else {
                return false;
            }
        }
        calculatorContainer.addEventListener("click", calculatrice);
    }
}