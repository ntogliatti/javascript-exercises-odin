const removeFromArray = function(array, ...args) {
    const newArray = [];
    const func = function(item){
        if (!args.includes(item)){
            newArray.push(item);
        }
    }
    array.forEach(func);
    return newArray;
}
console.log(removeFromArray([1,2,3,4,5], 3, 4))

// Do not edit below this line
module.exports = removeFromArray;
