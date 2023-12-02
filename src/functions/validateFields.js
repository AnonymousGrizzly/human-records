export function validateName(name) {
    //special chars not allowed, at least 2 chars, just letters
    const re = /^[a-zA-Z\s]{2,}$/;
    return re.test(name);
}

export function validateAge(age) {
    //age between 1 and 120
    const re = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/;
    return re.test(age);
}

export function validateAdress(adress) {
    //at least 5 chars
    const re = /^.{5,}$/;
    return re.test(adress);
}

export function validateWeightOrHeight(weightOrHeight) {
    //weight or height between 1 and 300 with optional 2 decimals
    const re = /^(?:[1-9][0-9]?|1[0-9]{2}|2[0-9]{2}|300)(?:\.[0-9]{1,2})?$/;
    return re.test(weightOrHeight);
}
