import {checkInvalidInput, checkInputValidLenght, removeSpecialCharacter, getDigits, calculateVerifyingDigit, sumDigits, getVerifyingDigit} from './utils'


export class cpfValidator{
  private cpf: String;
  private cpfNumbers!: String;
  private digits!: String;
  private verifyingDigit!: String;
  private sumWithoutVerifyingDigit!: number;
  private firstVerifyingDigit!: number;
  private sumWithFirstVerifyingDigit!: number;
  private secondVerifyingDigit!: number;
  private isValid: boolean;

  constructor(cpf: String){
    this.cpf = cpf
    this.isValid = false
    this.init()
    this.isCPFValid()
  }

  public get _isValid(){
    return this.isValid;
  }

  private isCPFValid(){
    const resultingDigit = `${this.firstVerifyingDigit}${this.secondVerifyingDigit}`;
    this.isValid = this.verifyingDigit === resultingDigit;
  }
  
  private init(){
    if(checkInvalidInput(this.cpf)){
      return this.isValid = false;
    }
    this.cpfNumbers = removeSpecialCharacter(this.cpf)
    if(!checkInputValidLenght(this.cpfNumbers)) {
      return this.isValid = false;
    }
    
    this.digits = getDigits(this.cpfNumbers)
    this.verifyingDigit = getVerifyingDigit(this.cpfNumbers)
    this.sumWithoutVerifyingDigit = sumDigits(this.digits)
    this.firstVerifyingDigit = calculateVerifyingDigit(this.sumWithoutVerifyingDigit)
    this.sumWithFirstVerifyingDigit = sumDigits(`${this.digits}${this.firstVerifyingDigit}`)
    this.secondVerifyingDigit = calculateVerifyingDigit(this.sumWithFirstVerifyingDigit)
  }
}
