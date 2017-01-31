function Airport() {
  this._planes = [];

  this.planes = function() {
    return this._planes;
  };

  this.clearForLanding = function(plane) {
    this._planes.push(plane);
  };

  this.clearForTakeOff = function() {
    this._planes.pop();
  }
};

function Plane() {

  this.land = function(airport) {
    airport.clearForLanding(this);
    this._airport = airport;
  };

  this.takeoff = function() {
    this._airport.clearForTakeOff();
  }
};
