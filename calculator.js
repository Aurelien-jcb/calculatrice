'use strict';

export default class Calculator {
    constructor() {

        // Création des containers
        const body = document.body;
        // calc__container
        const calculatorContainer = document.createElement("div");
        calculatorContainer.className = "calc__container";
        body.prepend(calculatorContainer);

        // screen container
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

        // fonctions de création des boutons
        function createButtonLeft(className, value, text) {
            const button = document.createElement("button");
            button.className = className;
            button.value = value;
            button.textContent = text;
            buttonsLeft.prepend(button);
        }

        function createButtonRight(className, value, text) {
            const button = document.createElement("button");
            button.className = className;
            button.value = value;
            button.textContent = text;
            buttonsRight.prepend(button);
        }

        // Création des boutons
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
        createButtonLeft("calc__btn --blue", "/", "÷");
        createButtonLeft("calc__btn --blue", "*", "x");
        createButtonRight("calc__btn --equal", "=", "=");
        createButtonRight("calc__btn --blue", "+", "+");
        createButtonLeft("calc__btn --blue", "-", "-");

        // création de l'écran
        function createInput(className, id, value, type, name, readonly) {
            const screen = document.createElement("input");
            screen.className = className;
            screen.id = id;
            screen.value = value;
            screen.type = type;
            screen.name = name;
            screen.readOnly = readonly;
            screenContainer.prepend(screen);
        }
        createInput("screen__input", "screen", "", "text", "screen", "");

        // Paramètrage de la calculatrice
        function calculatrice(event) {
            // stock le nombre dans une variable
            const nb = event.target.value;
            // effacer le contenu - afficher le contenu - calculer le contenu
            if (nb === 'AC') {
                this.querySelector("#screen").value = "";
            } else if (nb !== '=') {
                this.querySelector("#screen").value += nb;
            } else {
                const calcul = String(this.querySelector("#screen").value);
                this.querySelector("#screen").value = eval(calcul);
            }
        }
        calculatorContainer.addEventListener("click", calculatrice);
    }
}