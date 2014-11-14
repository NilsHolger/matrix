'use strict';

/**
 * @ngdoc overview
 * @name matrixApp
 * @description
 * # matrixApp
 *
 * Main module of the application.
 */
angular
  .module('matrixApp', [ 'ui.bootstrap', 'ngGrid',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/characters', {
        templateUrl: 'views/characters.html',
        controller: 'CharactersCtrl'
      })
      .when('/panel', {
        templateUrl: 'views/panel.html',
        controller: 'PanelCtrl'
      })
       .when('/members', {
        templateUrl: 'views/members.html',
        controller: 'MembersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
