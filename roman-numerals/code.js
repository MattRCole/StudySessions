function toRoman(number) {
  if (number === 4) {
    return 'IV'
  }

  if (number === 9) {
    return 'IX'
  }
  
  let numeral = ''
  if (number >= 5) {
    numeral += 'V'
    number -= 5
  }

  for(i = 0; i < number; i++){
    numeral += 'I'
  }

  return numeral
}

module.exports.toRoman = toRoman