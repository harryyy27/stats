const mean = (arr) => {
    if(!Array.isArray(arr)){
        throw new TypeError('Please use an array')
    }
    else if(!arr.every((el)=>typeof el === 'number')){
        throw new TypeError('All elements of array should be numbers')
    }
    return arr.reduce((acc,cur)=> acc+cur)/arr.length
    
}

// const std = (arr) => {
//     try {

//     }
// }

console.log(mean([1,1,2,2]))

module.exports = {mean}