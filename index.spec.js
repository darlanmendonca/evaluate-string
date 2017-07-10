const {describe, it} = require('mocha')
const {expect} = require('chai')
const evaluateString = require('./index.js')

describe('evaluate-string', () => {
  describe('package', () => {
    it('should export a function', () => {
      expect(evaluateString).to.be.a('function')
    })
  })

  describe('evaluate strings', () => {
    it('should evalute strings ignoring global vars', () => {
      expect(evaluateString('module')).to.be.equal('module')
    })

    it('should evalute strings', () => {
      expect(evaluateString('john snow')).to.be.equal('john snow')
    })
  })

  describe('evaluate numbers', () => {
    it('should evalute negative numbers', () => {
      expect(evaluateString('-10')).to.be.equal(-10)
    })

    it('should evalute 0 number', () => {
      expect(evaluateString('0')).to.be.equal(0)
    })

    it('should evalute positive numbers', () => {
      expect(evaluateString('33')).to.be.equal(33)
    })

    it('should evalute scientific numbers', () => {
      expect(evaluateString('1e4')).to.be.equal(10000)
    })
  })

  describe('evaluate booleans', () => {
    it('should evalute false', () => {
      expect(evaluateString('false')).to.be.false
    })

    it('should evalute true', () => {
      expect(evaluateString('true')).to.be.true
    })
  })

  describe('evaluate objects', () => {
    it('should evalute objects', () => {
      expect(evaluateString(`{id: 1, name: 'john snow'}`))
        .to.be.deep.equal({id: 1, name: 'john snow'})
    })

    it('should evalute json objects', () => {
      expect(evaluateString('{"id": 1, "name": "john snow"}'))
        .to.be.deep.equal({id: 1, name: 'john snow'})
    }) 
  })

  describe('evaluate arrays', () => {
    it('should evalute array of numbers', () => {
      expect(evaluateString('[1, 2]')).to.be.deep.equal([1, 2])
    })

    it('should evalute array of strings', () => {
      expect(evaluateString(`['a', 'b']`)).to.be.deep.equal(['a', 'b'])
    })

    it('should evalute array of booleans', () => {
      expect(evaluateString(`[true, false]`)).to.be.deep.equal([true, false])
    })

    it('should evalute array of objects', () => {
      expect(evaluateString(`[{id: 1, name: 'john'}, {"id": 2, "name": "snow"}]`))
        .to.be.deep.equal([{id: 1, name: 'john'}, {id: 2, name: 'snow'}])
    })
  })
})