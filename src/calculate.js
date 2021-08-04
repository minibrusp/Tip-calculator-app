import {    
    inputBill, 
    inputCount, 
    resultTipAmount, 
    resultTotalAmount }
from './variables.js';

export const calculate = targetValue => {
    let bill = parseFloat(inputBill.value);
    let count = parseFloat(inputCount.value);
    let percentToDecimal = targetValue / 100;
    let tipAmount = (bill * percentToDecimal);
    let tipAmountPerPerson = (bill * percentToDecimal) / count;
    let total = bill + tipAmount;

    resultTipAmount.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
    resultTotalAmount.textContent = `$${total.toFixed(2)}`;
}

export const resetOutput = () => {
    resultTipAmount.textContent = `$0.00`;
    resultTotalAmount.textContent = `$0.00`;
}