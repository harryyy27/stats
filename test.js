const {median,mean,popVar,samVar,popStd,samStd} = require('./stats')


test('adds 1 + 2 to equal 3', () => {
  expect(2+1).toBe(3);
});
//median 
test('Enterring anything but an array to median function will throw an error', ()=>{
    const throwError = () => {
        median(undefined)
    }
    expect(throwError).toThrow(new TypeError('Please use an array'))
})
test('If array contains non-numeric elements, error thrown', ()=>{
    
    const throwError = ()=>{
        median([NaN, 2, 5, 10])
    }
    expect(throwError).toThrow(new TypeError('All elements of array should be numbers'))
})
test('Median of odd numbered array is central number', ()=>{
    expect(median([1,2,3,4,5])).toBe(3);
})
test('Median of even numbered array is equal to the average of the 2 central numbers',()=>{
    expect(median([1,1,1,3,3,3])).toBe(2);
})
test('Median of unordered array = median of sorted array',()=>{
    expect(median([3,2,1,4,5])).toBe(3);
})


test('Enterring anything but an array will throw an error', ()=>{
    const throwError = ()=>{
        mean(2)
    }
    expect(throwError).toThrowError(new TypeError('Please use an array'))
});
test('If array contains non-numeric elements, error thrown', ()=>{
    const throwError = ()=>{
        mean(['a',1,3,4])
    }
    expect(throwError).toThrowError(new TypeError('All elements of array should be numbers'))
})

test('If array contains numeric characters, mean is returned', ()=> {
    expect(mean([1,1,2,2])).toBe(1.5);
})
