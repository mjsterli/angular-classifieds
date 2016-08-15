(function(){

  "use strict";

  angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope) {

      $scope.name= {
        first: "Michel",
        last: "Sterling"
      };

      $scope.message = "Hello, World!";
    })
})();
