describe('Extending Binary functions', function(){
  describe('binary add', function(){
    it('should be able to add two numbers', function(){
      expect(add(2, 3)).toEqual(5);
    });

    it('should default to adding zero when 1 argument', function(){
      expect(add(2)).toEqual(2);
    });

    it('should return identity given no arguments', function(){
      expect(add()).toEqual(0);
    });
  });

  describe('curried add function', function(){
    it('should add sequentially', function(){
      expect(curryAdd(3)(4)).toEqual(7);
    });

    it('should repeatedly return functions', function(){
      expect(curryAdd()(3)(4)).toEqual(7);
      expect(curryAdd(3)()(4)).toEqual(7);
      expect(curryAdd()()()(3)()(4)).toEqual(7);
    });
  });

  describe('extend binary function', function(){
    var sum;
    beforeEach(function(){
      sum = generalise(add);
    });
    it('should add no numbers to zero', function(){
      expect(sum()).toEqual(0);
    });

    it('should add two numbers', function(){
      expect(sum(1, 2)).toEqual(3);
    });

    it('should sum three numbers', function(){
      expect(sum(1, 2, 3)).toEqual(6);
    });

    it('should sum many numbers', function(){
      expect(sum(1, 2, 3, 4, 5)).toEqual(15);
      expect(sum(1, 2, 3, 4, 5, 6)).toEqual(21);
    });
  });
});