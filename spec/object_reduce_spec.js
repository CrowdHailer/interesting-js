describe('object combining', function(){
  it('should add points', function(){
    p1 = {x:2, y:3};
    p2 = {x:4, y:5};
    p3 = addOb.call(p1, p2);
    expect(p3.x).toEqual(6);
    expect(p3.y).toEqual(8);
  });
});