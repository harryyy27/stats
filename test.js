const {mean} = require('./stats')


test('adds 1 + 2 to equal 3', () => {
  expect(2+1).toBe(3);
});

test('Enterring anything but an array will throw an error', ()=>{
    let throwError = ()=>{
        mean(2)
    }
    expect(throwError).toThrowError(new TypeError('Please use an array'))
});
test('If array contains non-numeric elements, error thrown', ()=>{
    let throwError = ()=>{
        mean(['a',1,3,4])
    }
    expect(throwError).toThrowError(new TypeError('All elements of array should be numbers'))
})

test('If array contains numeric characters, mean is returned', ()=> {
    expect(mean([1,1,2,2])).toBe(1.5);
})