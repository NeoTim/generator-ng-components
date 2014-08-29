'use strict';
(function(){

  var <%= cameledName %> = function(){

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: someMethod
    };

    //////////////

    function someMethod() {
      return meaningOfLife;
    }
  };

  // <%= classedName %>
  //   .$inject = [];
  angular
    .module('<%= scriptAppName %>')
    .factory('<%= cameledName %>', <%= cameledName %>);

}).call(this);