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
    //this.awesomeThings = [
    //  'HTML5 Boilerplate',
    //  'AngularJS',
    //  'Karma'
    //];
    $scope.ppp="Ddd";
    //var　vm=this;
    $scope.items=[
      {
        id: 1,
        title: '图书馆',
        items:[
          {
            id:11,
            title:"用户注册",
            url:"#/reader/create",
            state:"reader.create"
          },{
            id:12,
            title:"图书列表",
            state:"reader.list"
          },{
            id:13,
            title:"主题树",
            state:"reader.themeTree"
          }
        ]
      },{
        id:2,
        title:"主题二",
        poster:"破浪",
        dateCreated:"2015-08-07T15:05:06"
      }
    ];
    tree.enhance($scope.items);
  });
