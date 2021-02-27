module.exports = function reverse (n) {
    let str = n + '';
    let newStr = '';
    
    if (str[0] === '-') {
        for (let i = 1; i < str.length; i++) {
            newStr = str[i] + newStr;
        }
        newStr = '-' + newStr;
    } else {
        for (let i = 0; i < str.length; i++) {
            newStr = str[i] + newStr;
        }
    }
    
    return +newStr;
}
