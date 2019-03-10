//median
const median = (arr)=> {
    if(!Array.isArray(arr)){
        throw new TypeError('Please use an array')
    }
    else if(!arr.every((el)=>isNaN(el)===false)){
        throw new TypeError('All elements of array should be numbers')
    }
    const sorted = arr.sort((a,b)=> a-b)
    if(sorted.length%2===0){
        return (sorted[sorted.length/2+1]+sorted[sorted.length/2-1])/2
    }
    else {
        return sorted[sorted.length/2-0.5]
    }
}
//mean
const mean = (arr) => {
    if(!Array.isArray(arr)){
        throw new TypeError('Please use an array')
    }
    else if(!arr.every((el)=>isNaN(el)===false)){
        throw new TypeError('All elements of array should be numbers')
    }
    return arr.reduce((acc,cur)=> acc+cur)/arr.length
}
//population variance
const popVar = (arr) => {
    try {
        return arr.reduce((acc,cur)=>acc+Math.pow(cur,2))/arr.length-Math.pow(mean(arr),2);
    }
    catch(e){
        return "Please ensure array containing only numbers provided"
    }
}
//sample variance 
const samVar = (arr) =>{
    try {
        return arr.reduce((acc,cur)=>acc+Math.pow(cur,2))/(arr.length-1)-Math.pow(mean(arr),2);
    }
    catch(e){
        return "Please ensure array containing only numbers provided"
    }
}
//population standard deviation
const popStd = (arr) => {
    try {
        Math.pow(popVar(arr),0.5)
    }
    catch(e){
        return "Please ensure array containing only numbers provided"
    }
}
//sample standard deviation
const samStd = (arr) => {
    try {
        Math.pow(samVar(arr),0.5)
    }
    catch(e){
        return "Please ensure array containing only numbers provided"
    }
}

console.log(mean([1,1,2,2]))

module.exports = {median,mean,popVar,samVar,popStd,samStd}