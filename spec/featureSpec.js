describe("Feature", function() {

  var airport1;

  beforeEach(function() {
    airport1 = new Airport();
    airport2 = new Airport();
    airport3 = new Airport();
    plane1 = new Plane();
    plane2 = new Plane();
    plane3 = new Plane();
    plane4 = new Plane();
    plane5 = new Plane();
  });

  it("Return value of Airport#good_weather can be controlled with a spy", function() {
    spyOn(airport1, 'good_weather').and.returnValue(true);
    expect(airport1.good_weather()).toEqual(true);
  });


});
