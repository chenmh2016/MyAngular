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

  }])
  .directive("dMap",[function(){
    var MAP = function(svg) {
      this.svg = svg;
      this.init();
    };

    MAP.prototype = {

      init: function() {
        var instances = {};
        var ts = ['circle', 'line'];

        for (var i = 0, l = ts.length; i < l; i++) {
          instances[ts[i]] = [];
        }

        this.instances = instances;
      },

      attrs: function(o, opts) {
        opts = opts || {};

        for (var x in opts) {
          o.attr(x, opts[x]);
        }
      },

      push: function(type, instance) {
        this.instances[type].push(instance);
      },

      circle: function(cxy, r, opts, isAnimate) {

        var g = this.svg.append('g');
        var circleWrap = g.append('circle');
        var circle = g.append('circle');

        circleWrap.attr('cx', cxy[0]).attr('cy', cxy[1]).attr('r', r + 3).attr('opacity', .2);
        this.attrs(circleWrap, opts);

        circle.attr('cx', cxy[0]).attr('cy', cxy[1]).attr('r', r);
        this.attrs(circle, opts);

        circle.on('mouseenter', function() {
          circle
            .attr('r', r + 1)
            .attr('opacity', .8);
        });

        circle.on('mouseout', function() {
          circle
            .attr('r', r)
            .attr('opacity', 1);
        });

        this.push('circle', circle);

        if (!isAnimate) {
          this.circleAnimate(circleWrap);
        }

        return circle;
      },

      line: function(s, e, opts, offset, callback) {
        var line = this.svg.append('line');

        line.attr('x1', s[0]).attr('y1', s[1]).attr('x2', e[0] + offset).attr('y2', e[1]);
        this.attrs(line, opts);
        this.arrow(line);


        callback && callback(line);

        this.push('line', line);
      },

      text: function(x, y, t) {
        var text = this.svg.append('text');

        text
          .attr('x', x)
          .attr('y', y)
          .attr('font-size', '12px')
          .attr('fill', '#000')
          .text(t || '');

        return text;
      },

      rect: function(xy, width, height) {
        var rect = this.svg.append('rect');

        rect
          .attr('x', xy[0])
          .attr('y', xy[1])
          .attr('width', width)
          .attr('height', height);

        return rect;
      },

      tips: function(xy, text, width, height) {
        var tips = this.rect(xy, 100, 50);
        var tips = tips.append('text');

        tips.text(text);

        return tips;
      },

      arrow: function(line) {
        if (!this.arrowMarker) {
          this.marker();
        }

        line.attr('marker-end', 'url(#arrow)');
      },

      marker: function() {

        var defs = this.svg.append('defs');
        var arrowMarker = defs.append('marker');
        var arrowPath = 'M2,2 L10,6 L2,10 L6,6 L2,2';

        arrowMarker
          .attr('id', 'arrow')
          .attr('markerUnits', 'strokeWidth')
          .attr('markerWidth', '12')
          .attr('markerHeight', '12')
          .attr('viewBox', '0 0 12 12')
          .attr('refX', '6')
          .attr('refY', '6')
          .attr('orient', 'auto');

        arrowMarker
          .append('path')
          .attr('d', arrowPath)
          .attr('fill', '#ed462f');
      },

      circleAnimate: function(circle) {
        var r = parseFloat(circle.attr('r'));
        var i = 0;
        var plus = true;

        window.setInterval(function() {

          if (plus) {
            i = i + 0.1;
          } else {
            i = i - 0.1;
          }

          if (i >= .6) {
            plus = false;
          }

          if (i <= .3) {
            plus = true;
          }


          circle
            .transition()
            .duration(290)
            .attr('opacity', i);

        }, 300);

      }

    };
    var Map=function(elem,data){
      this.container=d3.select(elem[0]||$('console-container').get(0));
      this.data=data;
      this.render();
    };
    angular.extend(Map.prototype,{
      coordinateConfig: {

        'cn': {
          name: '中国',
          xy: [145, 110]
        },

        'hk': {
          name: '香港',
          xy: [150, 130]
        },

        'tw': {
          name: '台湾',
          xy: [165, 120]
        },

        'asia': {
          name: '亚洲',
          xy: [145, 110]
        },

        'europe': {
          name: '欧洲',
          xy: [32, 90]
        },

        'africa': {
          name: '非洲',
          xy: [40, 130]
        },

        'america': {
          name: '美洲',
          xy: [340, 96]
        },

        'samerica': {
          name: '南美洲',
          xy: [390, 170]
        },

        'namerica': {
          name: '北美洲',
          xy: [340, 96]
        },

        'ra': {
          name: '俄罗斯',
          xy: [85, 70]
        },

        'jp': {
          name: '日本',
          xy: [190, 100]
        },

        'oceania': {
          name: '大洋洲',
          xy: [180, 180]
        }
      },

      renderData:function(){
        var data=this.data;
        this.drawBubble(this.sc, data.from, data.to);
      },

      render: function() {

        var svg = this.container.append('svg').attr('z-index', 1000).attr('width', '100%').attr('height', '220').append('g');
        this.sc = new MAP(svg);
        this.renderData();


      },
      drawBubble: function(sc, from, to) {

        var that = this;
        var fromXY = this.getXY(from.location);
        sc.circle(fromXY, 12, {
          'fill': '#ed462f'
        }).attr('data-country', from.location.country).attr('data-ip', '攻击IP: ' + from.ip);

        angular.forEach(to, function(item) {

          var toXY = that.getXY(item.location);

          sc.line(fromXY, toXY, {
            'stroke': '#ed462f',
            'stroke-width': 1.5
          }, 0);

          sc.circle(toXY, 6, {
            'fill': '#fdf733'
          }).attr('data-country', item.location.country).attr('data-ip', '被攻击IP: ' + item.ip);

        });

        // this.setTips();

      },getXY: function(location) {
        var coordinateConfig = this.coordinateConfig;
        var xy = [0, 0];
        var exist = false;

        if (angular.isString(location)) {
          xy = (coordinateConfig[location] || {}).xy || xy;
        } else {
          location = location || {};
          angular.forEach(coordinateConfig, function(item, k) {
            var name = item.name;

            if (!exist && (location.country == name || location.continent == name)) {
              xy = item.xy;
              exist = true;
            }
          })
        }


        return xy;
      }
    })


    return{
      scope:{
        data:'='
      },
      link:function(scope,elem,attrs){
        var map=angular.element('<div class="map-container"><div class="map-img"></div></div>');
        var svg=angular.element('<div class="svg-container"></div>')
        elem.html(map).append(svg).addClass('map-wrap');
        var t=scope.$watch('data',function(nval){
          if(!nval) return;
          new Map(svg,nval);
          t();
        })
      }
    }

  }]);




