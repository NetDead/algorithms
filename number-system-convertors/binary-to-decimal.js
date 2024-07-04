export const binaryToDecimal = binary => {
    let result = 0;

    for (let i = 0; i < binary.length; i++) {
        result += +binary[binary.length - 1 - i] * 2 ** i
    }

    return result;
}
