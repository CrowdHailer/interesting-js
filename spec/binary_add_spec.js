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


  });
});