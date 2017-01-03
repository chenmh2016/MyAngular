/**
 * Created by meihuan on 2016/12/19.
 */
'use strict';

angular.module('testChenApp')
  .controller('ExpanderCtrl', function ($scope,tree) {
  $scope.title='点击展开';
  $scope.text="这里是内容的部分";
  $scope.temp={
    value:""
  };
    $scope.expanders=[{
      title:'angularjs自带指令',
      text:[{
        subText:"ng-repeat"
      },{
        subText:"ng-switch"
      },{
        subText:"ng-selected"
      }
      ]
    },{
      title:'自定义指令',
      text:[{subText:'sng-order'}]
    },{
      title:'主题三',
      text:[{subText:'内容三'}]
    }];

    $scope.setTemp=function(string){
      $scope.temp.value=string.split("-")[1];
      return $scope.temp.value;
    }

    //ng-repeat
    $scope.itemsRepeat=[{name:1},{name:"小明"},{name:"小王"}];
  });
