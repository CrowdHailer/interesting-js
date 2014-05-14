function accumulator(n){

  function next(m){
    if (arguments.length < 1) {

    }
    this.sum = this.sum + m;
    return function(){ return n+ m; };
  }
  if (arguments.length < 1) {
    return 0;
  } else {
    console.log(next.apply);
    console.log((function(){}).bind);
    return next.bind({sum: n});
  }
}