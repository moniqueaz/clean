const { cpfValidator: cpfValidatorClass } = require('./cpf_validator_class')
const { cpfValidator: cpfValidatorFunction } = require('./cpf_validator_function')

const invalidCPF = [{cpf:''}, {cpf:'111.111.111-11'}, {cpf:'222.222.222-22'},{cpf:'201.111.111-11'},{cpf:'201e111d111s11'},{cpf:'20111111111'},{cpf:'201.111.111-1a'},{cpf:'935411347800'},{cpf:'aaa.222.22-bb'}]
const validCPF = [{cpf: '935.411.347-80'}, {cpf:'93541134780'}]

describe('Validador CPF Class', () => {

  it.each([...validCPF])('Deve verificar se o cpf "$cpf" é valido', ({cpf}) => {
    const result = new cpfValidatorClass(cpf)
    expect(result._isValid).toBeTruthy()
  })

  it.each([...invalidCPF])('Deve verificar se o cpf "$cpf" é inválido', ({cpf}) => {
    const result = new cpfValidatorClass(cpf)
    expect(result._isValid).not.toBeNull()
    expect(result._isValid).not.toBeUndefined()
    expect(result._isValid).not.toBeTruthy()
  })
  
  it('Deve verificar se o cpf for null ou undefined', () => {
    const resultNull = new cpfValidatorClass(null)
    const resultUndefined = new cpfValidatorClass()

    expect(resultNull._isValid).not.toBeNull()
    expect(resultUndefined._isValid).not.toBeNull()
    expect(resultUndefined._isValid).not.toBeUndefined()
    expect(resultNull._isValid).not.toBeUndefined()
    expect(resultNull._isValid).not.toBeTruthy()
    expect(resultUndefined._isValid).not.toBeTruthy()
  })
})

describe('Validador CPF Function', () => {

  it.each([...validCPF])('Deve verificar se o cpf "$cpf" é valido', ({cpf}) => {
    const result = cpfValidatorFunction(cpf)
    expect(result).toBeTruthy()
  })

  it.each([...invalidCPF])('Deve verificar se o cpf "$cpf" é inválido', ({cpf}) => {
    const result = cpfValidatorFunction(cpf)
    expect(result).not.toBeUndefined()
    expect(result).not.toBeNull()
    expect(result).not.toBeTruthy()
  })

  it('Deve verificar se o cpf for null ou undefined', () => {
    const resultNull = cpfValidatorFunction(null)
    const resultUndefined = cpfValidatorFunction()
    
    expect(resultNull).not.toBeNull()
    expect(resultNull).not.toBeUndefined()
    expect(resultUndefined).not.toBeNull()
    expect(resultUndefined).not.toBeUndefined()

    expect(resultNull).not.toBeTruthy()
    expect(resultUndefined).not.toBeTruthy()
  })
})

