function Airport() {
  this._planes = [];

  this.planes = function() {
    return this._planes;
  };

  this.storePlane = function(plane) {
    this._planes.push(plane);
  };
};

function Plane() {

  this.land = function(airport) {
    airport.storePlane(this);
  };
};
