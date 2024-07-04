export const decimalToBinary = number => {
    let res = [];
    let r = number;

    while (r > 1) {
        res.unshift(r % 2);
        r = Math.floor(r / 2)
    }

    return res.join('');
}
