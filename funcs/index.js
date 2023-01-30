
const isFive = function(num){
    if(num === 5){
        return true
    }
    return false
}

const isOdd = function(num){
    if(typeof num !== "number"){
        throw new Error("num is not a number");
    }
    if(num % 2 !== 0){
        return true
    }
    return false
}

const myRange = function(min, max, step=1){
    let array = []
    if(min > max){
        return array
    }
    for(let i = min; i <= max; i+=step){
        array.push(i)
    }
    return array
}

module.exports = {
    isFive,
    isOdd,
    myRange
}
