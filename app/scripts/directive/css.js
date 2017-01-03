/**
 * Created by meihuan on 2016/12/23.
 */
/**
 * Created by meihuan on 2016/12/19.
 */
'use strict';

angular.module('testChenApp')
  .directive('tabNav', [function () {
    var tabs = {
      'overviews': [
        {
          text: "总览",
          url: "/overviews",
          spm: '1'
        },
        {
          text: "分支1",
          url: "/branch1",
          spm: '2'
        },
        {
          text: "分支2",
          url: "/branch2",
          spm: '3'
        }
      ],
      'vul': [
        {
          text: '漏洞',
          url: '/apps/vul',
          mark: 'MENU_VULNERABILITY'
        },

        {
          text: '弱口令',
          url: '/securityThreat/list',
          mark: 'WEAK_PASSWORD'
        },

        {
          text: '配置项检测',
          url: '/securityThreat/confCheck',
          mark: 'WEAK_CONFIGURATION'
        }
      ]

    };
    return {
      scope: {
        item: '='
      },

      restrict: 'E',

      replace: true,

      template: function () {

        var html = [
          '<ul class="nav nav-tabs nav-tags">',
          '<li ng-class="{ active: $index == index }" ng-repeat="item in tabs">',
          '<a aliyun-console-spm="{{ item.spm }}" href="#/css{{ item.url }}">',
          '{{ item.text }}' +
          '<div ng-if="item.mark" sas-message-mark="{{ item.mark }}" type="num" nav="{{ module }}"></div>' +
          '</a>',
          '</li>',
          '</ul>'
        ];
        return html.join('');
      },

      link: function (scope, elem, attrs) {
        var module = attrs.module || 'overviews';
        var index = attrs.index;

        if (module == 'overviews') {
          scope.showLogNav = true;
        }

        scope.module = module;
        scope.tabs = tabs[module];
        scope.index = index || 0;
      }
    }

  }])
  .directive('countTab', ['$timeout', '$stateParams', function ($timeout, $stateParams) {

    return {

      scope: {
        model: '=countTab',
        caption: '@',
        tid: '=',
        click: '&countClick'
      },

      template: '<ul class="nav nav-tags">' +
      '<li><span style="margin-right: 15px;">分组:</span></li>' +
      '<li><a class="tab-span" ng-class="{active: isActive==\'total\'}" ng-click="select()">全部({{total}}台)</a></li>' +
      '<li ng-repeat="item in businessGroup"><a class="tab-span"  ng-class="{active: isActive==item.Index}" ng-click="select(item)" style="margin-right: 4px;">{{item.group}}({{item.count}}台)</a>' +
      '</li>' +
      '</ul>',

      link: function (scope, elem, attrs) {

        scope.businessGroup = [{
          group: "第一个",
          Index: 1,
          count: 33
        }, {
          group: "第二个",
          Index: 2,
          count: 2423
        }, {
          group: "第三个",
          Index: 3,
          count: 2423
        }];
        scope.select = function (data) {
          if (data && data.Index != 'total') {
            scope.isActive = data.Index;
            console.log("选中的是",data.group)
          } else {
            scope.isActive = "total";
          }
        }
      }

    };

  }]);




