Utilities = {};
(function(parent){
  parent.Point = function(x, y){
    return Object.freeze({x: x, y: y});
  };
}(Utilities));