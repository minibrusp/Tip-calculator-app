import { inputBill, inputCount, resultTipAmount, resultTotalAmount } from './variables.js';

export default function calculate(tipPercentage) {
   let bill = parseFloat(inputBill.value)
   let count = parseFloat(inputCount.value)
   let percentage = parseInt(tipPercentage.replace('%', '')) / 100
   let fields = [bill, count, percentage]

   if (fields.some(value => isNaN(value))) return

   let tipAmount = (bill * percentage)
   let tipAmountPerPerson = tipAmount / count
   let totalPerPerson = (bill + tipAmount) / count

   resultTipAmount.textContent = tipAmountPerPerson.toFixed(2)
   resultTotalAmount.textContent = totalPerPerson.toFixed(2)

}