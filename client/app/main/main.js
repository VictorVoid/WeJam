'use strict';

angular.module('musicSocialApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      template: '<header></header>'
    });
  });
