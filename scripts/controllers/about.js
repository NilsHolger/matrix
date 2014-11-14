'use strict';

/**
 * @ngdoc function
 * @name matrixApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the matrixApp
 */
angular.module('matrixApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
