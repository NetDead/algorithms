export const hexToDecimal = hex => {
    const charCodeDiff = 55; // charCode diff for letter part, where A = 10, B = 11, C = 12 etc.

    let result = 0;

    for (let i = 0; i < hex.length; i++) {
        const current = hex[hex.length - 1 - i];
        const num = Number.isInteger(+current) ? +current : current.toUpperCase().charCodeAt(0) - charCodeDiff;
        result += num * 16 ** i;
    }

    return result;
}
