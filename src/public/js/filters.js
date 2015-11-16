'use strict';

/* Filters */

angular.module('heartbeatFilters', []).filter('isPublished', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
