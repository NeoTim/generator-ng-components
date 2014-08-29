'use strict';
(function(){
  var <%= cameledName %> = function(){

    return function (input) {
      return '<%= cameledName %> filter: ' + input;
    };

  };
  angular
    .module('<%= scriptAppName %>')
    .filter('<%= cameledName %>', <%= cameledName %>);

}).call(this);