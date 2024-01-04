export default class Currency {
  constructor(code, name){
    if (typeof(code) === "string" && typeof(name) === "string"){
    this._name = name;
    this._code = code;
    }
  }
  get code() {
    return this._code;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  set code(code) {
    this._code = code;
  }
  displayFullCurrency() {
    return `${this._name (${this._code})}`;
  }
}
