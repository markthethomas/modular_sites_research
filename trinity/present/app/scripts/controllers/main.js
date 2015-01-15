'use strict';

/**
 * @ngdoc function
 * @name presentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the presentApp
 */
angular.module('presentApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
