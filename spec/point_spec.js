describe('Point', function(){
  describe('initialisation', function(){
    it('from two coordinates', function(){
      pt = Utilities.Point(2, 3);
      expect(pt.x).toEqual(2);
      expect(pt.y).toEqual(3);
    });
  });
});