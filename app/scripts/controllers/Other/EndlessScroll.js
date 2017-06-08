/**
 * Created by meihuan on 2016/12/22.
 */
angular.module('testChenApp')
  .controller('EndlessScrollCtrl', function ($scope,$http) {
$scope.data={
  busy:false,
  users:[],
  page:1
};
//加载更多
    $scope.loadMore=function(){
      if($scope.data.busy){
        return;
      }
      $scope.data.busy=true;
      $http.get("http://localhost:9000/data/UserInfo.json?page="+$scope.data.page).success(function(data){
        console.log(data.data);
        for(var i=0;i<data.data.length;i++){
          $scope.data.users.push(data.data[i]);
        }
      });
      $scope.data.busy=false;
      $scope.data.page++;

    }
  })


.filter('toGenderString',function(){
  return function(input){
    if(input){
      return '男';
    }else{
      return '女';
    }
  }
})

.filter('formatDate',function(){
  return function(jsondate){
    jsondate=jsondate.replace("/Date(","").replace(")/","");
    if(jsondate.indexOf("+")>0){
      jsondate=jsondate.substring(0,jsondate.indexOf("+"));
    }else if(jsondate.indexOf("-")>0){
      jsondate=jsondate.sub(0,jsondate.indexOf("-"));
    }
    var date=new Date(parseInt(jsondate,10));
    var month=date.getMonth()+1<10?"0"+(date.getMonth()+1):date.getMonth()+1;
    var currentDate=date.getDate()<10?"0"+date.getDate():date.getDate();
    return date.getFullYear()+"-"+month+"-"+currentDate;

  }
})

