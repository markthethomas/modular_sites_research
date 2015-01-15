'use strict';

/**
 * @ngdoc function
 * @name presentApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the presentApp
 */
angular.module('presentApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
