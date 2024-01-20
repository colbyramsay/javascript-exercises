const fibonacci = function(x) {
    const myArr = [0,1];
    for (i = 2; i <= 25; i++) {
        myArr[i] = myArr[i-2] + myArr[i-1];
    }
    //alert (myArr);
    //alert (myArr[x]);
    if (x < 0) {
        //alert ("OOPS");
        return "OOPS";
    }
    return myArr[x];
};

//fibonacci(-25);

// Do not edit below this line
module.exports = fibonacci;
