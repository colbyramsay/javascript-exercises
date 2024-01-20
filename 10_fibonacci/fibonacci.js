const fibonacci = function() {
    const myArr = [1,1];
    for (i = 2; i <= 25; i++) {
        myArr[i] = myArr[i-2] + myArr[i-1];
    }
    alert (myArr);
};

fibonacci();

// Do not edit below this line
//1, 1, 2, 3, 5, 8,
module.exports = fibonacci;
