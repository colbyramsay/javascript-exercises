const reverseString = function(text) {

    let string = "";
    const myArr = text.split("");
    myArr.reverse();

    for (let i = 0; i < myArr.length; i++) {
        string += myArr[i];
    }

    return string;

};

// Do not edit below this line
module.exports = reverseString;
