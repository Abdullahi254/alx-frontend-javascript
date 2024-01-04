import Building from 5-building.js;

class SkyHighBuilding extends Building {
  constructor(sqft=0, floors=0) {
    super(sqft)
    this._floors = floors;
  }
  get floors() {
    return this._floors;
  }
  evacuationWarningMessage() {
    return "Evacuate slowly the NUMBER_OF_FLOORS floors";
  }
}

export default SkyHighBuilding;
