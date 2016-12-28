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
            icon:"yundunicon-vuln-3"
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
            icon:"yundunicon-vuln-3"
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
          title:"仿云顿tab",
          url:"#/css/overviews",
          state:"css.overviews",
          groupIndex:6,
          icon:"yundunicon-vuln-3"
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
