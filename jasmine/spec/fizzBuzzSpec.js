describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe("knows when a number is ", function() {

    it('divisible by 3 ', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
    it('divisible by 15 ', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });
    it('divisible by 5 ', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });
    it('divisible by other number ', function() {
      expect(fizzBuzz.play(31)).toEqual(31);
    });
  });
});
