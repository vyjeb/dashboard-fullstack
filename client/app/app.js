'use strict';

angular.module('dashboardFullstackApp', [
  'dashboardFullstackApp.auth',
  'dashboardFullstackApp.admin',
  'dashboardFullstackApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
