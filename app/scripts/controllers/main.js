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
            state:"reader.create",
            groupIndex:1,
            icon:"yundunicon-over-3"
          },{
            id:12,
            title:"图书列表",
            state:"reader.list",
            groupIndex:2,
            icon:"yundunicon-emer-3"
          },{
            id:13,
            title:"主题树",
            state:"reader.themeTree",
            groupIndex:3,
            icon:"yundunicon-thre-3"
          }
        ]
      },{
        id:2,
        title:"主题二",
        poster:"破浪",
        dateCreated:"2015-08-07T15:05:06",
        items:[
          {
            id:11,
            title:"主题二",
            url:"#",
            state:"reader.create",
            groupIndex:4,
            icon:"yundunicon-vuln-3"
          }
        ]
      }
    ];
    tree.enhance($scope.items);
    $scope.select = function (data) {
        $scope.isActive = data.groupIndex;
    };
  });
