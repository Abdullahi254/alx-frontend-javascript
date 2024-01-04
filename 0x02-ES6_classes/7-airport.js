class Airport {
  constructor(name, code) {
    if(typeof(name) !=="string"){
      throw TypeError("name must be a string!");
    }
    if(typeof(code) !=="string"){
      throw TypeError("code must be a string!");
    }
    this._name = name;
    this._code = code;
  }
  toString() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
  
}

export default Airport;
