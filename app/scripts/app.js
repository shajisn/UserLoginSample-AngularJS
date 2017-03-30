'use strict';

/**
 * @ngdoc overview
 * @name loginApp
 * @description
 * # loginApp
 *
 * Main module of the application.
 */
var appModule = angular.module('loginApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

 appModule.config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/forgotpswd', {
        templateUrl: 'views/forgotpswd.html',
        controller: 'ForgotpswdCtrl',
        controllerAs: 'forgotpswd'
      })
      .otherwise({
        redirectTo: '/'
      });
});

appModule.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);