function Airport() {
  this._planes = [];

  this.planes = function() {
    return this._planes;
  };

  this.clearForLanding = function(plane) {
    this._planes.push(plane);
  };

  this.clearForTakeOff = function(plane) {
    if (this.isStormy) throw Error('cannot takeoff during storm');
    var planeIndex = this._planes.indexOf(plane)
    this._planes.splice(planeIndex);
  }

  this.isStormy = function() {
    (Math.random() < 0.2) ? true : false;
  }
};

function Plane() {

  this.land = function(airport) {
    airport.clearForLanding(this);
    this._airport = airport;
  };

  this.takeoff = function(airport) {
    this._airport.clearForTakeOff(this);
  }
};
