describe("Plane", function() {

  beforeEach(function() {
    my_plane = new Plane();
  });

  it("Is not at airport by default", function() {
    expect(my_plane.is_at_airport()).toEqual(false);
  });

});
