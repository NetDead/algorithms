export const decimalToHex = number => {
    const charCodeDiff = 55; // charCode diff for letter part, where A = 10, B = 11, C = 12 etc.
    let result = []; //
    let r = number; //

    while (r > 1) {
        const rest = r % 16;
        result.unshift(rest > 9 ? String.fromCharCode(rest + charCodeDiff) : rest);
        r = Math.floor(r / 16)
    }

    return result.join('');
}
