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
})