function addOb(other){
  var x = this.x + other.x;
  var y = this.y + other.y;
  return {x: x, y: y};
}

function inflate(action, identity){
  function updated(){
    var args = Array.prototype.slice.call(arguments);
    if (!identity) {
      identity = args.shift();
      if (!identity) {throw 'no defaults anywhere'}
      return updated.apply({}, args);
    }
    if (args.length < 1) {
      return identity;
    } else {
      item = args.shift();
      identity = action.call(identity, item);
      return updated.apply({}, args);
    }
  }
  return updated;
}