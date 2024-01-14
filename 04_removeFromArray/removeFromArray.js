const removeFromArray = function(myArr, ...theArgs) {
    
    /*
    for (let i = 0; i < theArgs.length; i++) {
        let position = myArr.indexOf(theArgs[i]);
        myArr.splice(position, 1);
    }
    */

    for (let i = 0; i < theArgs.length; i++) {
        if (myArr.includes(theArgs[i])) {
            let position = myArr.indexOf(theArgs[i]);
            myArr.splice(position, 1);
        }
        else {
            continue;
        }
    }

    return myArr;

};

// Do not edit below this line
module.exports = removeFromArray;
