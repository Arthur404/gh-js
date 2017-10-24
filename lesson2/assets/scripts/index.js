function calcArgs() {
    return arguments.length;
}

function calcStringArgs() {
    var len = 0;
    for (var i = 0; i < arguments.length; i++) {
        typeof arguments[i] === 'string' ? len++ : false;
    }
    return len;
}

function sumArgs() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        typeof arguments[i] === 'number' ? sum += arguments[i] : false;
    }
    return sum;
}