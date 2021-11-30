import {checkInvalidInput, checkInputValidLenght, removeSpecialCharacter, getDigits, calculateVerifyingDigit, sumDigits, getVerifyingDigit} from './utils'

export const cpfValidator = (cpf: String) => {
  if(checkInvalidInput(cpf)){
    return false
  }
  
  const cpfNumbers = removeSpecialCharacter(cpf)
  
  if(!checkInputValidLenght(cpfNumbers)){
    return false
  }
  
  const digits = getDigits(cpfNumbers)
  const verifyingDigit = getVerifyingDigit(cpfNumbers)
  const sumWithoutVerifyingDigit = sumDigits(digits)
  const firstVerifyingDigit = calculateVerifyingDigit(sumWithoutVerifyingDigit)
  const sumWithFirstVerifyingDigit = sumDigits(`${digits}${firstVerifyingDigit}`)
  const secondVerifyingDigit = calculateVerifyingDigit(sumWithFirstVerifyingDigit)

  const resultingDigit = `${firstVerifyingDigit}${secondVerifyingDigit}`;
  return verifyingDigit === resultingDigit;
}

