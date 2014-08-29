'use strict';
(function(){

  var configuration = function($provide){

    $provide.decorator('<%= cameledName %>', function ($delegate) {
      // decorate the $delegate
      return $delegate;
    });

  };

  configuration.$inject = ['$provide'];

  angular
    .module('<%= scriptAppName %>')
    .config( configuration );

}).call(this);