export class Filter {
  _key = ''
  _value = ''
  _operation = ''
  constructor(key, value) {
    this._value = value
    this._key = key
  }

  getKey() {
    return this._key
  }

  getValue() {
    return this._value
  }

  setOperationAbove() {
    this._operation = '>'
    return this
  }

  setOperationLess() {
    this._operation = '<'
    return this
  }

  setOperationEquals() {
    this._operation = '='
    return this
  }

  isOperationAbove() {
    return this._operation.localeCompare('>') === 0
  }

  isOperationLess() {
    return this._operation.localeCompare('<') === 0
  }

  isOperationEquals() {
    return this._operation.localeCompare('=') === 0
  }
}
