function add(a, b){
  a |= 0;
  b |= 0;
  return a + b;
}

function curryAdd(c){
  return function(d){
    return c + d;
  };
}