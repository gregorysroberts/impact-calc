'use strict';

/**
 * @ngdoc function
 * @name calcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the calcApp
 */
angular.module('calcApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
