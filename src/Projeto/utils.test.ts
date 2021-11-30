const { getVerifyingDigit, getDigits } = require('./utils')

describe('getVerifyingDigit', () => {
  it('Deve verificar se a função retorna uma string vazia', () => {
    const result = getVerifyingDigit('')
    expect(result).toEqual('')
  })

  it('Deve verificar se a função está pegando 2 digitos', () => {
    const result = getVerifyingDigit('23435454')
    expect(result).toEqual('54')
  })
})

describe('getDigits', () => {
  it('Deve verificar se a função retorna uma string vazia', () => {
    const result = getDigits('')
    expect(result).toEqual('')
  })

  it('Deve verificar se a função está pegando 2 digitos', () => {
    const result = getDigits('99900033394')
    expect(result).toEqual('999000333')
  })
})
