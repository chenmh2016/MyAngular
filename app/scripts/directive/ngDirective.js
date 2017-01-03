/**
 * Created by meihuan on 2016/12/19.
 */
'use strict';

angular.module('testChenApp')
  //.directive('expander',[function(){
  //  return{
  //    restrict:'EA',
  //    replace:true,
  //    transclude:true,
  //    scope:{
  //      title:'=expanderTitle'
  //    },
  //    template:'<div>'
  //              +'<div class="title" ng-click="toggle()">{{title}}</div>'
  //              +'<div class="body" ng-show="showMe" ng-transclude></div>'
  //              +'</div>',
  //    link:function(scope,element,attrs){
  //      scope.showMe=false;
  //      scope.toggle=function toggle(){
  //        scope.showMe=!scope.showMe;
  //      }
  //    }
  //  }
  //}])
  .directive("accordion", function () {
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      template: '<div ng-transclude></div>',
      controller: function () {
        var expanders = [];
        this.gotOpened = function (selectedExpander) {
          angular.forEach(expanders, function (expander) {
            if (selectedExpander != expander) {
              expander.showMe = false;
            }
          });
        };
        this.addExpander = function (expander) {
          expanders.push(expander)
        }
      }
    }
  })
  .directive('expander', [function () {
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      require: '^?accordion',
      scope: {
        title: '=expanderTitle'
      },
      template: '<div>'
      + '<div class="title" ng-click="toggle()">{{title}}</div>'
      + '<div class="body" ng-show="showMe" ng-transclude></div>'
      + '</div>',
      link: function (scope, element, attrs, accordionController) {
        scope.showMe = false;
        accordionController.addExpander(scope);
        scope.toggle = function toggle() {
          scope.showMe = !scope.showMe;
          accordionController.gotOpened(scope);
        }
      }
    }
  }])
  .directive("directiveLife", ['$log', function ($log) {
    $log.info("Injecting：" +
      "自定义指令开始执行");
    return {
      restrict: "EA",
      transclude: true,
      replace: true,
      template: '<div><h2>count:{{count}}</h2><p ng-transclude></p></div>',
      scope: {
        count: "="
      },
      compile: function (element, attrs) {
        $log.info("compile", "count value from attribute:" + attrs.count);
        return {
          pre: function (scope, element, attrs) {
            $log.info("pro-link", "count value from attribute:" + attrs.count, "count value from scope:" + scope.count);
          },
          post: function (scope, element, attrs) {
            $log.info("post-link", "count value from attribute:" + attrs.count, "count value from scope:" + scope.count);
          }
        }
      },
      controller: function($scope){
        $scope.count=1;
        $log.info("controller","count value from controller:"+$scope.count);
      }
    }
  }])
