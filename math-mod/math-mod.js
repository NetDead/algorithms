export const mathMod = (a, b) => {
    if ((a > 0 && b > 0) || (a > 0 && b < 0)) return a % b;

    const mod = a - b * (Number.parseInt(`${a / b}`));

    return a < 0 && b > 0 ? mod - 1 : mod + 1;
}
