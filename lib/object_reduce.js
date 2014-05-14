function addOb(other){
  var x = this.x + other.x;
  var y = this.y + other.y;
  return {x: x, y: y};
}

function inflate(original){
  var initial = {x:0, y:0};
  function updated(){
    var args = Array.prototype.slice.call(arguments);
    if (args.length < 1) {
      return initial;
    } else {
      item = args.shift();
      initial = original.call(initial, item);
      return updated.apply({}, args);
    }
  }
  return updated;
}