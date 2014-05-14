describe('object combining', function(){
  it('should add points', function(){
    p1 = {x:2, y:3};
    p2 = {x:4, y:5};
    p3 = addOb.call(p1, p2);
    expect(p3.x).toEqual(6);
    expect(p3.y).toEqual(8);
  });
  it('should generalise with 0 arg', function(){
    var sum = inflate(addOb, {x:0, y:0});
    p3 = sum();
    expect(p3.x).toEqual(0);
    expect(p3.y).toEqual(0);
  });
  it('should generalise with 1 arg', function(){
    var sum = inflate(addOb);
    p3 = sum(p1);
    expect(p3.x).toEqual(2);
    expect(p3.y).toEqual(3);
  });
  it('should generalise with 2 arg', function(){
    var sum = inflate(addOb);
    p3 = sum(p1, p2);
    expect(p3.x).toEqual(6);
    expect(p3.y).toEqual(8);
  });
  it('should generalise with 5 arg', function(){
    var sum = inflate(addOb);
    p3 = sum(p1, p2, p1, p2, p2);
    expect(p3.x).toEqual(16);
    expect(p3.y).toEqual(21);
  });
});