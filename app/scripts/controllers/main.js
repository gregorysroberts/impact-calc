'use strict';

/**
 * @ngdoc function
 * @name calcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calcApp
 */
angular.module('calcApp')
  .controller('MainCtrl', function ($scope) {

//An empy JSON object to pass all of the data into when the "submit" button is hit
    $scope.master = {};

//Copy the data from the questions into the master JSON object
    $scope.update = function(user) {
      $scope.master = angular.copy(user);
      console.log($scope.master);
      var reps = $scope.user.numReps;
      var weeklyDeals = $scope.user.dealsClosed;
      var monthlyDeals = weeklyDeals * 4;
      var avgDeals = $scope.user.dealSize;
      $scope.master.annualRevenue = monthlyDeals * avgDeals * reps * 12;
      console.log($scope.master.annualRevenue);
      incrementalRevenue ();
    };

   

    var incrementalRevenue = function () {
      if ($scope.master.increaseCalls == "true") {
         var currentRevenue = $scope.master.annualRevenue;
    console.log(currentRevenue);
        $scope.master.increase = currentRevenue * 1.25;
        console.log($scope.master.increase);
      }
    }

  });
