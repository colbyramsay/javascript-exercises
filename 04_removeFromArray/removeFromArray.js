const removeFromArray = function(myArr, ...theArgs) {
    
    for (let i = 0; i < theArgs.length; i++) {
        let position = myArr.indexOf(theArgs[i]);
        myArr.splice(position, 1);
    }

    return myArr;

};

// Do not edit below this line
module.exports = removeFromArray;
