'use strict';
(function(){

  var <%= cameledName %> = function(){
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: link
    };

    //////////////

    function link(scope, element, attrs) {
      element.text('this is the <%= cameledName %> directive');
    }
  };
  angular
    .module('<%= scriptAppName %>')
    .directive('<%= cameledName %>', <%= cameledName %>);

}).call(this);