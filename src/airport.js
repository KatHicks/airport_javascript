function Airport() {
  this._planes = [];

  this.planes = function() {
    return this._planes;
  };

  this.clearForLanding = function(plane) {
    this._planes.push(plane);
  };
};

function Plane() {

  this.land = function(airport) {
    airport.clearForLanding(this);
  };
};
