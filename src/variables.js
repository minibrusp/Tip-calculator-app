const tipButtons = document.querySelectorAll('.tip-calculator__percentage button');
const resetButton = document.querySelector('.tip-calculator__result button');
const formInputs = document.querySelectorAll('.tip-calculator__form input')
const inputBill = document.getElementById('bill');
const inputCount = document.getElementById('count');
const inputCustom = document.getElementById('custom')
const resultTipAmount = document.querySelector('.tip-calculator__result__txt__tip-amount__num');
const resultTotalAmount = document.querySelector('.tip-calculator__result__txt__total-amount__num');

export {
    tipButtons,
    resetButton,
    formInputs,
    inputBill,
    inputCount,
    inputCustom,
    resultTipAmount,
    resultTotalAmount
};