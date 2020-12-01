describe("Plane", function() {

  beforeEach(function() {
    my_plane = new Plane();
  });

  it("Is not at airport by default", function() {
    expect(my_plane.is_at_airport()).toEqual(false);
  });

  it("Correctly lands at airport when told to do so", function() {
    my_plane.land("airport");
    expect(my_plane.airport).toEqual("airport");
  })

  it("Throws an error when asked to land, but already landed", function() {
    my_plane.land("airport");
    expect(function() {
      my_plane.land("another airport");
    }).toThrow(new Error("This plane is already at an airport"));
  })

});
