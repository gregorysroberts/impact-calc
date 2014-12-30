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
      incrementalRevenue ();

      // Depending on their team set the focus and the indicators of success
      if ($scope.master.team == "an inbound LDR") {
        $scope.master.focus = "qualifying opportunities for the closing team.";
        $scope.master.indicators = "response time, engagement rate, call volume,  and email volume";
      }
      if ($scope.master.team == "an outbound LDR") {
        $scope.master.focus = "identifying qualifying opportunities for the closing team.";
        $scope.master.indicators = "call & email volume, engagement rate, and lead prioritization"
      }
      if ($scope.master.team == "a mixed LDR") {
        $scope.master.focus = "identifying and qualifying opportunities for the closing team.";
        $scope.master.indicators = "response time, call & email volume, engagement rate, and lead prioritization";
      }
      if ($scope.master.team == "an integrated inside sales") {
        $scope.master.focus = "identifying and qualifying high-potential opportunties and closing them.";
        $scope.master.indicators = "call & email volume, engagement rate, and lead prioritization";
      }
      if ($scope.master.team == "a closers only") {
        $scope.master.focus = "closing high-quality business with qualified opportunities.";
        $scope.master.indicators = "clear visibility into engagement and lead prioritization";
      }

    };

   

    var incrementalRevenue = function () {

      $scope.master.increase = $scope.master.annualRevenue;

      if ($scope.master.increaseCalls == "true") {
        $scope.master.increase = $scope.master.increase * 1.25;
      }

      if ($scope.master.increaseConversion == "true") {
        $scope.master.increase = $scope.master.increase * 1.12;
      }

      if ($scope.master.increaseQuota == "true") {
        $scope.master.increase = $scope.master.increase * 1.1;
      }

      console.log($scope.master);

    }



  });
