'use strict';

/* App Module */

var heartbeatApp = angular.module('heartbeatApp', [
  'ngRoute',
  'heartbeatAnimations',
  'heartbeatControllers',
  'heartbeatFilters',
  'heartbeatServices'
]);

heartbeatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/last-beats.html',
        controller: 'heartbeatLastCtrl'
      }).
      when('/beat/:beatId', {
        templateUrl: 'partials/beat-detail.html',
        controller: 'heartbeatDetailCtrl'
      }).
      when('/send', {
        templateUrl: 'partials/send-beat.html',
        controller: 'heartbeatSendCtrl'
      }).
       when('/send/beat', {
        templateUrl: 'partials/about.html',
        controller: 'heartbeatSendBeatCtrl'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'heartbeatAboutCtrl'
      }).
      when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: 'heartbeatSignupCtrl'
      }).
      when('/signin', {
        templateUrl: 'partials/signin.html',
        controller: 'heartbeatSigninCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
