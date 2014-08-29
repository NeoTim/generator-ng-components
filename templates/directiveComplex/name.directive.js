'use strict';
(function(){
  var <%= cameledName %> = function(){

    return {
      templateUrl: '<%= htmlUrl %>',
      restrict: 'EA',
      link: link
    };

    ///////////////////

    function link(scope, element, attrs) {

    }

  };
  angular
    .module('<%= scriptAppName %>')
    .directive('<%= cameledName %>', <%= cameledName %>);

}).call(this);