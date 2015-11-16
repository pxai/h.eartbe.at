'use strict';

/* Services */

var heartbeatServices = angular.module('heartbeatServices', ['ngResource']);

/*
heartbeatServices.factory('Report', ['$resource',
  function($resource){
    return $resource('reports/report.:reportId.json', {}, {
      query: {method:'GET', params:{reportId:'1'}, isArray:false}
    });
  }]);
  */
  
heartbeatServices.factory('Heartbeat', ['$resource',
  function($resource){
    return $resource('/api/beat/get/:heartbeatId', {}, {
    //return $resource('reports/reports.json', {}, {
      query: {method:'GET', params:{}, isArray:false}
    });
  }]);
  
heartbeatServices.factory('Heartbeats', ['$resource',
  function($resource){
    return $resource('/api/beats/get/last', {}, {
    //return $resource('reports/reports.json', {}, {
      query: {method:'GET', params:{}, isArray:false}
    });
  }]);

heartbeatServices.factory('HeartbeatSend', ['$resource',
  function($resource){
    return $resource('/api/beats/send/', {}, {
      query: {method:'POST', params:{}, isArray:false}
    });
  }]);
  /*
 heartbeatServices.factory('ReportProvince', ['$resource',
  function($resource){
    return $resource('reports/report.province.json', {}, {
      query: {method:'GET', params:{}, isArray:false}
    });
  }]);
  
 heartbeatServices.factory('ReportAutonomy', ['$resource',
  function($resource){
    return $resource('/api/reports/autonomy', {}, {
    //return $resource('reports/report.autonomy.json', {}, {
      query: {method:'GET', params:{}, isArray:false}
    });
  }]);
  
 heartbeatServices.factory('ReportStudy', ['$resource',
  function($resource){
    return $resource('/api/reports/study', {}, {
    //return $resource('reports/report.autonomy.json', {}, {
      query: {method:'GET', params:{}, isArray:false}
    });
  }]);
  
  
 heartbeatServices.factory('ReportTechnologyProvince', ['$resource',
  function($resource){
        return $resource('reports/report.:tech.json', {}, {
            query: {method:'GET', params:{tech:'java'}, isArray:false}
        });
  }]);
  
 heartbeatServices.factory('ReportCategory', ['$resource',
  function($resource){
    return $resource('/api/reports/category', {}, {
    //return $resource('reports/report.autonomy.json', {}, {
      query: {method:'GET', params:{}, isArray:false}
    });
  }]);
  
 heartbeatServices.factory('ReportSubcategory', ['$resource',
  function($resource){
    return $resource('/api/reports/subcategory', {}, {
    //return $resource('reports/report.autonomy.json', {}, {
      query: {method:'GET', params:{}, isArray:false}
    });
  }]);
  
  
  heartbeatServices.factory('ReportSector', ['$resource',
  function($resource){
    return $resource('/api/reports/sector/:nameSector', {}, {
      query: {method:'GET', params:{nameSector:'name'}, isArray:true}
    });
  }]);
  
 heartbeatServices.factory('ReportSkill', ['$resource',
  function($resource){
    return $resource('/api/reports/skill/:nameSector', {}, {
      query: {method:'GET', params:{nameSector:'name'}, isArray:true}
    });
  }]);
  
  */