/**
 * Created by meihuan on 2016/12/22.
 */
angular.module('testChenApp')
  .controller('EndlessScrollCtrl', function ($scope,Reddit) {
  $scope.reddit=new Reddit();
  })
