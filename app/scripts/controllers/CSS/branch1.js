/**
 * Created by wb-wangzhanqun.d on 2017/1/6.
 */
//angular.module('testChenApp').controller('branch1Controller', function ($scope,tree) {
//
//})
var controllerName = 'branch1Controller';
var controllerFn = function($scope,$location,$http) {
  var div=$("<h6>cmh的jqury，测试用的</h6>");
  var html=$("#branch1");
  html.append(div);

  //练习使用ajax请求json数据、jqury的方式
//$("button").click(function(){
//  $.ajax({url:"../../../data/test.json",
//          success:function(result){
//            var pageData=result.data.list[0].accessKey;
//            $("#pageData").html(pageData)
//  }
//  })
//})

  $scope.search=function(){

    $http.get("../../../data/test.json")
      .success(function(response){
        //alert("ok")
        $scope.result=response.data.list[0].accessKey;
        })
  }

  //select2的使用方式
  //$("#sel_menu2").select2({
  //  tags: true,
  //  maximumSelectionLength: 3  //最多能够选择的个数
  //});

//learn the new method for controller
//  var own=ydCom.controller($scope);
//  own.set({
//    model:{
//      columns:gridModels.model.columns,
//      config:gridModels.model.config
//    },
//    pageItems:[10,20,30,50,70],
//    params:{
//      uuid:$location.$$search.uuid||'',
//      remark:aqsCommon.getSearchTxt(),
//      groupId:aqsCommon.getGroupId()
//    },
//    tableParams:{}
//  });
//  own.module({
//    getTabNum:function(){
//      var options=angular.copy($scope.params);
//      angular.forEach(options,function(item,k){
//        if(item==='') delete options[k];
//      })
//      aqsRequest.aqs.init.getStatistics(function(data){
//        $scope.data=data;
//      },aqsCommon.STRGET,options);
//    },
//    getCycle:function(){
//      aqsRequest.aqs.config.getScheduleConfig(function(data){
//        angular.forEach(data,function(item){
//          if(item.project=='health'){
//            $scope.cycle=item.cycle;
//          }
//        },'get');
//      })
//    },
//    getTableList:function(options){
//      $scope.loadingState=true;
//      angular.forEach(options,function(item,k){
//        if(item==='') delete options[k];
//      });
//      aqsRequest.aqs.health.getHealthEvents(function(d){
//        $scope.loadingState=false;
//        $scope.storeList= d.list;
//        $scope.pageInfo= d.pageInfo;
//      },'get',options)
//    },
//    reFresh:function(){
//      var options=angular.copy($scope.parems);
//      own.mods.getTableList(options);
//      own.mods.getTabNum();
//    }
//  })
//own.fn({
//  search:function(str){
//    $scope.params.remark=str;
//    aqsCommon.setSearchTxt(str);
//    own.mods.reFresh();
//  },
//  select:function(id){
//    $scope.params.remark='';
//    $scope.params.groupId=id;
//    aqsCommon.setGroupId(id);
//    own.mods.reFresh();
//  },
//  updateTableData:function(data){
//    var options=$scope.params;
//    own.mods.getTableList(options);
//  },
//  changePage:function(num,size){
//    var options=angular.copy($scope.params);
//    $scope.tableParams.pageSize=size;
//    $scope.tableParams.currentPage=num;
//    angular.extend(options.$scope.tableParams);
//    own.mods.getTableList(options);
//  }
//});
//  own.run(function(){
//    if(!aqsCommon.getURLParam("params")){
//      aqsCommon.setSearchTxt("");
//      aqsCommon.setGroupID(null);
//      delete $scope.params.remark;
//      delete $scope.params.groupId;}
//    own.mods.getCycle();
//    own.mods.getTabNum();
//
//    $scope.$on('refreshSafeList',function(){
//      own.mods.reFresh();
//    })
//  })
};
controllerFn.$inject = ['$scope','$location','$http'];
angular.module('testChenApp').controller(controllerName, controllerFn);
