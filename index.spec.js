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
})