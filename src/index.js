module.exports = function reverse (n) {
    let str = Math.abs(n) + '';
    let newStr = '';
    
    for (let i = 0; i < str.length; i++) {
        newStr = str[i] + newStr;
    }
        
    return +newStr;
}
