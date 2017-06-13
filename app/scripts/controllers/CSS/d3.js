var controllerName='d3Controller';
var controllerFn=function($scope,$location){

    $scope.mapData= {
    "from" : { "ip" : "212.11.0.111",
      "location" : { "area" : "",
      "areaId" : "",
      "city" : "",
      "cityId" : "",
      "continent" : "欧洲",
      "country" : "法国",
      "countryId" : "FR",
      "region" : "",
      "regionId" : ""
    }
    },
    "to":
    [
      {
        "ip" : "42.121.55.243",
        "isMine" : false,
        "location" : {
          "area" : "华东",
          "areaId" : "300000",
          "city" : "杭州市",
          "cityId" : "330100",
          "continent" : "大洋洲",
          "country" : "澳大利亚",
          "countryId" : "CN",
          "region" : "浙江省",
          "regionId" : "330000"
        }
      },
      {
        "ip" : "42.121.55.243",
        "isMine" : false,
        "location" : {
          "area" : "华东",
          "areaId" : "300000",
          "city" : "杭州市",
          "cityId" : "330100",
          "continent" : "欧洲",
          "country" : "英国",
          "countryId" : "RA",
          "region" : "浙江省",
          "regionId" : "330000"
        }
      }
    ]
  }


  var  coordinateConfig= {

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
  };

  var getXY= function(location) {
    var coordinateConfig = coordinateConfig;
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


    return xy;};

  function init() {
    var w=500;
    var h=50;
    var dataset=[5,10,15,20,25];
    // var map=angular.element('<div class="map-container"><div class="map-img"></div></div>');
    // var div2=$("map");
    // var svg=d3.select("div").append("svg").attr("z-index","10000").attr("width",500).attr("height",50).append('g');
    // var circle=svg.append('circle');
    // circle.attr("cx",'145').attr("cy",'110').attr("r",'30').attr("opacity",'.2');
    var svg = d3.select($("#div"))
      .append("svg")
      .attr("width", '100%')
      .attr("height", '220');


    var circles=svg.selectAll("circle").data(dataset).enter().append("circle");
    circles.attr("cx",'100'
    ).attr("cy",'140').attr("r",'30').attr("z-index",'100000')

  }
init();
};
controllerFn.$inject=['$scope','$location'];
angular.module('testChenApp').controller(controllerName,controllerFn);
