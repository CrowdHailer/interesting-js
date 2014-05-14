describe('Point', function(){
  describe('initialisation', function(){
    it('from two coordinates', function(){
      pt = Utilities.Point(2, 3);
      expect(pt.x).toEqual(2);
      expect(pt.y).toEqual(3);
    });

    it('should be imutable', function(){
      pt = Utilities.Point(2, 3);
      pt.x = 5;
      pt.y = 6;
      expect(pt.x).toEqual(2);
      expect(pt.y).toEqual(3);
    });
  });
  describe('geometric operations', function(){
    var Pt, p1, p2;
    beforeEach(function(){
      Pt = Utilities.Point;
      p1 = Pt(2, 3);
      p2 = Pt(4, 5);
    });

    it('adding 2 points', function(){
      p3 = Pt.sum(p1, p2);
      expect(p3.x).toEqual(6);
      expect(p3.y).toEqual(8);
    });
  });
});