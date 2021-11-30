const calculateRest = (number: number) => number % 11

export const removeSpecialCharacter = (cpf: String) => cpf.replace(/\s*?\D*?[.-]?\D*\s*/g,'');
export const checkInvalidInput = (value: String | undefined) => value === null || value === undefined
export const checkInputValidLenght = (cpf: String) => cpf.length === 11
export const getDigits = (cpfNumbers: String) => (cpfNumbers).match(/^\d{9}/g)?.[0] || ''
export const getVerifyingDigit = (cpfNumbers: String) => (cpfNumbers).match(/\d{2}$/g)?.[0] || ''
export const calculateVerifyingDigit = (numbers: number) => {
  const rest = calculateRest(numbers)
  return rest < 2 ? 0 : 11 - rest
}
export const sumDigits = (value: String) => !!value && value.split("").reduce((total, number, index) => {return total += parseInt(number) * (10 - index)}, 0)
