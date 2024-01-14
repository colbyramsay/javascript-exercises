const removeFromArray = function(myArr, arrElement) {
    
    let position = myArr.indexOf(arrElement);
    myArr.splice(position, 1);
    return myArr;

};

// Do not edit below this line
module.exports = removeFromArray;
