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
    $('button').on('click', function (){
    	console.log($scope.user);
    });
  });
