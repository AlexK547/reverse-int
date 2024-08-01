module.exports = function reverse(n) {
    return +(Math.abs(n) + "").split("").reverse().join("");
};
