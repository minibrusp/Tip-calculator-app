import './scss/main.scss';
import { tipButtons, resetButton, formInputs } from './variables.js';
import calculate from './calculate.js'
import { grandReset, resetPercentage } from './resets.js'

let tipPercentage = ''

tipButtons.forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault()
        resetPercentage(true)
        event.target.classList.add('active')
        tipPercentage = event.target.value
        calculate(tipPercentage)
    })
})

formInputs.forEach(input => {
    input.addEventListener('keyup', event => {

        if (event.target.classList.contains('custom')) {
            resetPercentage(false)
            tipPercentage = event.target.value
        }

        calculate(tipPercentage)
    })
})

resetButton.addEventListener('click', event => {
    event.preventDefault()
    grandReset()
})


