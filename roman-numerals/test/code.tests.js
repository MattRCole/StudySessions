const assert = require('assert')
const toRoman = require('../code').toRoman

test(1, 'I')
test(2, 'II')
test(3, 'III')
test(4, 'IV')
test(5, 'V')
test(6, 'VI')
test(7, 'VII')
test(8, 'VIII')
test(9, 'IX')
test(10, 'X')

function test(number, numeral) {
  it(`should return ${numeral} when given ${number}`, () => {
    const result = toRoman(number)
    assert.equal(result, numeral)
  })
}
