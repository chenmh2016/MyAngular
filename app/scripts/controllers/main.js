'use strict';

/**
 * @ngdoc function
 * @name testChenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testChenApp
 */
angular.module('testChenApp')
  .controller('MainCtrl', function ($scope,tree) {

    $scope.aaa="Dfdf";
    $scope.$on('sidebarFold', function (event,data) {
      $scope.isSidebarFold=data;
      console.log($scope.isSidebarFold+"isSidebarFold");
    })

  });
