'use strict';

// feature testing

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
    spyOn(airport,'isStormy').and.returnValue(false);
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to take off from airport', function(){
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.planes()).not.toContain(plane);
  });

  describe('When Stormy:', function(){

    var plane;
    var airport;

    beforeEach(function(){
      plane = new Plane();
      airport = new Airport();
    });

    it('blocks takeoff when weather is stormy', function(){
      airport._planes.push(plane);
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){ plane.takeoff(airport);}).toThrowError('cannot takeoff during storm');
      expect(airport.planes()).toContain(plane);
    });

    it('blocks land when weather is stormy', function(){
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){ plane.land(airport);}).toThrowError('cannot land during storm');
      expect(airport.planes()).not.toContain(plane);
    });

  });
});

// unit testing plane object

describe('Plane',function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeOff', 'isStormy']);
  });

  it('can land at an airport', function(){
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can takeoff from an airport', function(){
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });
});

// unit testing airport object

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
    spyOn(airport,'isStormy').and.returnValue(false);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

});
