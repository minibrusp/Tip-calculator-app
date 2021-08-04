export const errorHandler = (action, elem) => {
    let label = document.querySelector(`.tip-calculator__${elem.id} label`);
    if(action === true) {
        elem.classList.add('--error');
        label.classList.add('--error');
        return true;
    }
        elem.classList.remove('--error');
        label.classList.remove('--error');
        return false;
}

export const checkInputField = (bill, count) => {

    let result = false;

    if(bill.value === ''||bill.value ==='0') {
        errorHandler(true, bill);
        result = true;
    } else {
        errorHandler(false, bill);
    }

    if(count.value === ''||count.value ==='0') {
        errorHandler(true, count);
        result = true;
    } else {
        errorHandler(false, count);
    }

    return result;

}

export const isInputPercentEmpty = value => {
    if(value === '') { 
        return true;
    }
    return false;
}