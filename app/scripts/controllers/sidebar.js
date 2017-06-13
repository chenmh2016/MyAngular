'use strict';

/**
 * @ngdoc function
 * @name testChenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testChenApp
 */
angular.module('testChenApp')
  .controller('SideBarCtrl', function ($scope,tree) {

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
            icon:"cmhIcon-xing"
          },{
            id:12,
            title:"图书列表",
            state:"reader.list",
            groupIndex:2,
            icon:"cmhIcon-xing"
          },{
            id:13,
            title:"主题树",
            state:"reader.themeTree",
            groupIndex:3,
            icon:"cmhIcon-xing"
          }
        ]
      },{
        id:2,
        title:"自定义指令",
        poster:"破浪",
        dateCreated:"2015-08-07T15:05:06",
        items:[
          {
            id:11,
            title:"expander",
            url:"#/ngDirective/expander",
            state:"ngDirective.expander",
            groupIndex:4,
            icon:"cmhIcon-xing"
          }
        ]
      },{
        id:3,
        title:"其他",
        poster:"破浪",
        dateCreated:"2015-08-07T15:05:06",
        items:[
          {
            id:11,
            title:"滚屏加载",
            url:"#/other/endlessScroll",
            state:"other.endlessScroll",
            groupIndex:5,
            icon:"cmhIcon-xing"
          }

        ]
      },{
      id:4,
        title:"css",
        poster:"破浪",
        dateCreated:"2015-08-07T15:05:06",
        items:[
        {
          id:11,
          title:"仿tab",
          url:"#/css/overviews",
          state:"css.overviews",
          groupIndex:6,
          icon:"cmhIcon-xing"
        },
          {
            id:22,
            title:"d3",
            url:"#/css/d3",
            state:"css.d3",
            groupIndex:7,
            icon:"cmhIcon-xing"
          }

      ]
    }
    ];
    tree.enhance($scope.items);
    $scope.select = function (data) {
      $scope.isActive = data.groupIndex;
    };
    $scope.isSidebarFold=false;
    function toggleSidebarStatus(){
      $scope.isSidebarFold = !$scope.isSidebarFold;
      var type = $scope.isSidebarFold?'mini':'full';
      console.log($scope.isSidebarFold+"$scope.isSidebarFold");
      $scope.$emit("sidebarFold",[$scope.isSidebarFold]);
    }

    $scope.toggleSidebarStatus = toggleSidebarStatus;

  });
