

const palindromes = function (text) {

    let string = "";
    let newTextNoPunc = "";
    const myArr = text.split("");
    myArr.reverse();

    const newArr = myArr.filter(removePunc);

    function removePunc(a) {
        if (a != "!" && a != "," && a != "." && a != " " && a != "?")
        return true;
    }

    for (let i = 0; i < newArr.length; i++) {
        string += newArr[i];
    }

    const newText = text.split("");
    const newTextFiltered = newText.filter(removePunc);

    for (let i = 0; i < newTextFiltered.length; i++) {
        newTextNoPunc += newTextFiltered[i];
    }

    if (string.toLowerCase() == newTextNoPunc.toLowerCase()) {
        return true;
    } else {
        return false;
    }

};

//palindromes("A car, a man, a maraca.");

// Do not edit below this line
module.exports = palindromes;

