'use strict';
(function(){

  var <%= classedName %>Ctrl = function ($scope) {
    $scope.message = 'Hello';
  };

  <%= classedName %>Ctrl
    .$inject = ['scope'];

  angular
    .module('<%= scriptAppName %>')
    .controller('<%= classedName %>Ctrl', <%= classedName %>Ctrl);

}).call(this);
