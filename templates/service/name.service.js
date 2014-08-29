'use strict';
(function(){

  var <%= cameledName %> = function(){
    // AngularJS will instantiate a singleton by calling "new" on this function
  };

  // <%= classedName %>
  //   .$inject = [''];
  angular
    .module('<%= scriptAppName %>')
    .service('<%= cameledName %>', <%= cameledName %>);

}).call(this);