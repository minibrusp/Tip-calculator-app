import {
   tipButtons,
   inputBill,
   inputCount,
   inputCustom,
   resultTipAmount,
   resultTotalAmount,
} from './variables.js';

export function grandReset() {
   inputBill.value = ''
   inputCount.value = ''
   tipPercentage = ''
   resetPercentage(true)
   resultTipAmount.textContent = `$0.00`;
   resultTotalAmount.textContent = `$0.00`;
}

export function resetPercentage(includeInput) {
   tipButtons.forEach(button => button.classList.remove('active'))
   if (includeInput) inputCustom.value = ''
}