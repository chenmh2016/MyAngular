
/**
 * Created by meihuan on 2016/11/28.
 */
/**
 * Created by meihuan on 2016/11/24.
 */
angular.module('testChenApp')
  .controller('MainCtrl.themeTreeCtrl', function ($scope,tree,$timeout,$http) {
    var　vm=this;
    $timeout(function(){
      $http.get("http://localhost:9000/2342423432")
        .success(function (response) {console.log("wwwww")});
    });



    vm.items=[
      {
        id: 1,
        title: '这是第一个主题',
        poster: "雪狼",
        dateCreated:'2016-02-19T00:00:00',
        items:[
          {
            id:11,
            title:"这是第一个回复",
            poster:"雪狼1",
            dateCreated:'2015-02-19T00:00:01',
            items:[{
              id:111,
              title:'回复1.1',
              poster:"破浪2",
              dateCreated:"2015-5-09T00:00:08"
            },{
              id:112,
              title:'回复1.2',
              poster:"破浪3",
              dateCreated:"2015-5-09T00:00:30"
            }]
          },{
            id:12,
            title:"这是第二个回复",
            poster:"雪狼2",
            dateCreated:'2015-02-19T00:00:08'
          }
        ]
      },{
        id:2,
        title:"这是第二个主题，含有字母abcd和数字1234",
        poster:"破浪",
        dateCreated:"2015-08-07T15:05:06"
      }
    ]
    $scope.users=vm.items;
    tree.enhance(vm.items);
    $scope.ifshowList=false;
    $scope.liGroup=[{"name":"1",
                      "data":[11,12,13]},
                      {"name":"2"},
                      {"name":"3",
                      "data":[31,32,33]}];

    $scope.data= [{
        "departmentId": "1",
        "departmentName": "全部",
        "comment": "整个平台的根部门，超级管理员和系统管理员属于该部门，全平台唯一",
        "level": 0,
        "isIndependent": true,
        "children": [{
        "departmentId": "42",
        "departmentName": "dtforce insight",
        "parentId": "1",
        "parentLabel": "root",
        "level": 1,
        "isIndependent": true,
        "children": [{
          "departmentId": "49",
          "departmentName": "二級部門",
          "parentId": "42",
          "parentLabel": "dtforce insight",
          "level": 2,
          "isIndependent": true,
          "departmentType": "PRIVATE"
        }],
        "departmentType": "PRIVATE"
      }, {
        "departmentId": "59",
        "departmentName": "wuyun",
        "parentId": "1",
        "parentLabel": "root",
        "level": 1,
        "isIndependent": true,
        "children": [{
          "departmentId": "60",
          "departmentName": "abc",
          "parentId": "59",
          "parentLabel": "wuyun",
          "level": 2,
          "isIndependent": true,
          "departmentType": "PRIVATE"
        }],
        "departmentType": "PRIVATE"
      }, {
        "departmentId": "33",
        "departmentName": "zmqtrypoc",
        "parentId": "1",
        "parentLabel": "root",
        "level": 1,
        "isIndependent": true,
        "children": [{
          "departmentId": "50",
          "departmentName": "aaa",
          "parentId": "33",
          "parentLabel": "zmqtrypoc",
          "level": 2,
          "isIndependent": true,
          "departmentType": "PRIVATE"
        }],
        "departmentType": "PRIVATE"
      }, {
        "departmentId": "55",
        "departmentName": "上海长宁V2V",
        "parentId": "1",
        "parentLabel": "root",
        "level": 1,
        "isIndependent": true,
        "departmentType": "PRIVATE"
      }]
    }];


    $scope.showNoteList = function($event){
      $scope.ifshowList= !$scope.ifshowList;
      $event.stopPropagation();
    };

    $scope.chooseSub = function($event,item){
      // if(scope.choosenText==''){
      //   scope.length=0;
      // }
      // item.checked = !item.checked;


          $scope.chooseText = item;


      $event.stopPropagation();
    }

  });
