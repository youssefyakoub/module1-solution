(function () {
  'use strict';
  
  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
  
  LunchCheckController.$inject = ['$scope'];
  
  function LunchCheckController($scope) {
    $scope.lunchItems = "";
    $scope.message = "";
  
    $scope.checkLunch = function () {
      var items = $scope.lunchItems.trim();
  
      // Case: Empty input or only spaces
      if (items === "") {
        $scope.message = "Please enter data first";
        return;
      }
  
      // Split input by commas and filter out empty items
      var itemsArray = items.split(',').filter(function (item) {
        return item.trim() !== "";
      });
  
      // Case: Too many items
      if (itemsArray.length > 3) {
        $scope.message = "Too much!";
      } else {
        $scope.message = "Enjoy!";
      }
    };
  }
})();
