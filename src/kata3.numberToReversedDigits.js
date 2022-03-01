const numberToReversedDigits = number => {
    const answer = number.toString().split('').reverse().map(Number)
    return answer
};
module.exports = numberToReversedDigits;