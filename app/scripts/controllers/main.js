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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
