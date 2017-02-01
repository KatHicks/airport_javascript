function Airport() {
  this._planes = []; // instance variable
};

Airport.prototype.planes = function() { // attr_reader
  return this._planes;
};

Airport.prototype.clearForLanding = function(plane) {
  if (this.isStormy()) throw Error('cannot land during storm');
  this._planes.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  if (this.isStormy()) throw Error('cannot takeoff during storm');
  var planeIndex = this._planes.indexOf(plane)
  this._planes.splice(planeIndex, 1);
};

Airport.prototype.isStormy = function() {
  return (Math.random() < 0.5) ? true : false;
};

// ----------------------------------

function Plane() {
};

Plane.prototype.land = function(airport) {
  airport.clearForLanding(this);
};

Plane.prototype.takeoff = function(airport) {
  airport.clearForTakeOff(this);
}
