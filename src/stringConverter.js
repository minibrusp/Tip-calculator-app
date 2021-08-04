export const stringPercentToFloat = stringValue => {
    let value = parseFloat(stringValue.replace('%', ''));
    return value;
}