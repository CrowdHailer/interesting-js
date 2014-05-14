function add(a, b){
  a |= 0;
  b |= 0;
  return a + b;
}

function curryAdd(c){
  if (arguments.length < 1) {
    return curryAdd;
  } else {
    var curried =  function(d){
      if (arguments.length < 1) {
        return curried;
      } else {
        return c + d;
      }
    };
    return curried;
  }
}

function generalise(original){
  function G(){
    var args = Array.prototype.slice.call(arguments);
    var value = original.apply({}, args);
    if (args.length <= original.length) {
      return value;
    } else {
      var newArgs = [value].concat(args.slice(2));
      console.log(newArgs);
      return G.apply({}, newArgs);
    }
  }
  return G;
}