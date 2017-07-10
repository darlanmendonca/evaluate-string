// const string = evaluateString('string')
// const number = evaluateString('5')
// const booleanFalse = evaluateString('false')
// const booleanTrue = evaluateString('true')
// const array = evaluateString('[1, 2]')
// const object = evaluateString(`{id: 1, name: 'snow'}`)
// const json = evaluateString('{"id": 1, "name": "snow"}')

module.exports = evaluateString

function evaluateString(value) {
  try {
    value = value.trim()
    const isVariable = !value.startsWith('[')
      && !value.startsWith('{')
      && !value.startsWith('\'')
      && !value.startsWith('"')
      && !value.startsWith('`')
      && value !== 'true'
      && value !== 'false'
      && isNaN(value)

    return isVariable
        ? eval(`'${value}'`) // convert to string
        : eval(`(${value})`) // evaluate
  } catch (e) {
    return value
  }
}