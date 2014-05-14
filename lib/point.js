Utilities = {};
(function(parent){
  function create(x, y){
    return Object.freeze({x: x, y: y});
  }
  function add(other){
    console.log(other)
    var x = this.x + other.x;
    var y = this.y + other.y;
    return create(x, y);
  }

  create.sum = function(n){
    console.log(n);
    var args = Array.prototype.slice.call(arguments);
    var value = add.apply(n, args.slice(1));
    if (args.length <= 2) {
      return value;
    } else {
      var newArgs = args.slice(1);
      create.sum.apply(n, newArgs);
    }
  }

  parent.Point = create;

}(Utilities));