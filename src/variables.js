const tipButtons = document.querySelectorAll('.tip-calculator__percentage button');
const customPercentage = document.querySelector('.tip-calculator__percentage input');
const resetButton = document.querySelector('.tip-calculator__result button');
const inputBill = document.getElementById('bill');
const inputCount = document.getElementById('count');
const resultTipAmount = document.querySelector('.tip-calculator__result__txt__tip-amount__num');
const resultTotalAmount = document.querySelector('.tip-calculator__result__txt__total-amount__num');

export { 
    tipButtons, 
    customPercentage, 
    resetButton, 
    inputBill, 
    inputCount, 
    resultTipAmount, 
    resultTotalAmount 
};