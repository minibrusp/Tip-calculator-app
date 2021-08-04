import {
    tipButtons, 
    customPercentage, 
    resetButton, 
    inputBill, 
    inputCount, 
} from './variables.js';
import { calculate, resetOutput } from './calculate.js';
import { errorHandler, checkInputField, isInputPercentEmpty } from './errorHandlers.js';
import { stringPercentToFloat } from './stringConverter.js';
import './scss/main.scss';

tipButtons.forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();

        if(checkInputField(inputBill, inputCount) !== true) {
            calculate(stringPercentToFloat(event.target.value));
        }
    });
});

customPercentage.addEventListener('keyup', () => {


    if(checkInputField(inputBill, inputCount) !== true) {
        if(isInputPercentEmpty(customPercentage.value) === true) return resetOutput();

        calculate(stringPercentToFloat(customPercentage.value));
    }
});

customPercentage.addEventListener('focus', () => {

    if(checkInputField(inputBill, inputCount) !== true) {
        if(isInputPercentEmpty(customPercentage.value) === true) return resetOutput();

        calculate(stringPercentToFloat(customPercentage.value));
    }
});

resetButton.addEventListener('click', event => {
    event.preventDefault();
    inputBill.value = '';
    count.value = '';
    customPercentage.value = '';
    resetOutput();
    errorHandler(false, inputBill);
    errorHandler(false, inputCount);

});





