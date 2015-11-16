'use strict';

/* Controllers */

var heartbeatControllers = angular.module('heartbeatControllers', ['chart.js']);

heartbeatControllers.controller('heartbeatLastCtrl', ['$scope', 'Heartbeats', 
    function($scope, Heartbeats) {
        $scope.orderProp = 'date';
        $scope.lastBeats = Heartbeats.query();
  }]);


heartbeatControllers.controller('heartbeatDetailCtrl', ['$scope', '$routeParams', 'Heartbeat', 
    function($scope, $routeParams, Heartbeat) {
        $scope.orderProp = 'date';
        $scope.beat = Heartbeat.query({heartbeatId: $routeParams.beatId});
        console.log($scope.beat);
  }]);
  
heartbeatControllers.controller('heartbeatSendCtrl', ['$scope', '$routeParams', 'Heartbeat', 
    function($scope, $routeParams, Heartbeat) {
        $scope.orderProp = 'date';
//        $scope.beat = Heartbeat.query({heartbeatId: $routeParams.beatId});
        console.log('Load send beat');
  }]);

heartbeatControllers.controller('heartbeatSendBeatCtrl', ['$scope', '$routeParams', 'HeartbeatSend', 
    function($scope, $routeParams, HeartbeatSend) {
        $scope.orderProp = 'date';
//        $scope.beat = Heartbeat.query({heartbeatId: $routeParams.beatId});
 // process the form
    $scope.submit = function() {
       console.log('Load send beat: ' + $scope.to + ' msg: ' + $scope.text);
       var result  = HeartbeatSend.query({to: $scope.to, text: $scope.text});
    };
   }]);
  
heartbeatControllers.controller('heartbeatSignupCtrl', ['$scope', 
    function($scope) {
        $scope.title = '2015 - h.eartbe.at - Pello Altadill - Cuatrovientos Centro Integrado';
  }]);
  
heartbeatControllers.controller('heartbeatSigninCtrl', ['$scope', 
    function($scope) {
        $scope.title = '2015 - h.eartbe.at - Pello Altadill - Cuatrovientos Centro Integrado';
  }]);
/*
heartbeatControllers.controller('heartbeatDetailCtrl', ['$scope', '$routeParams', 'Report',
    function($scope, $routeParams, Report) {
        $scope.report = Report.get({reportId: $routeParams.reportId}, function(report) {
          $scope.mainImageUrl = report.images[0];
        });

        $scope.setImage = function(imageUrl) {
          $scope.mainImageUrl = imageUrl;
        }
  }]);
*/
heartbeatControllers.controller('heartbeatAboutCtrl', ['$scope', 
    function($scope) {
        $scope.title = '2015 - h.eartbe.at - Pello Altadill - Cuatrovientos Centro Integrado';
  }]);