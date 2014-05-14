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