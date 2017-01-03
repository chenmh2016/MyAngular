'use strict';

angular.module('testChenApp')
  .controller('UiPromptCtrl', function ($scope) {
    $scope.submit=function(){
      console.log("信息"+$scope.person.name)
    };
  });

