describe('curried accumulator', function(){
  it('should return zero with no arguments', function(){
    expect(accumulator()).toEqual(0);
  });

  it('should return function for given single input', function(){
    expect(accumulator(3)()).toEqual(3);
  });

  it('should sum two numbers', function(){
    expect(accumulator(3)(4)()).toEqual(7);
  });
});