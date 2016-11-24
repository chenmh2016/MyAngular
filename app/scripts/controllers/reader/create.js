/**
 * Created by meihuan on 2016/11/24.
 */
angular.module('testChenApp')
  .controller('MainCtrl.ReaderCreatCtrl', function ($scope) {

     $scope.submit=function(form){
       console.log(form)
     }
   
  });
