/**
 * Created by meihuan on 2016/11/28.
 */
/**
 * Created by meihuan on 2016/11/24.
 */
angular.module('testChenApp')
  .controller('MainCtrl.themeTreeCtrl', function ($scope, tree, $timeout, $http) {
    var vm = this;
    $timeout(function () {
      $http.get("http://localhost:9000/2342423432")
        .success(function (response) {
          console.log("wwwww")
        });
    });


    vm.items = [
      {
        id: 1,
        title: '这是第一个主题',
        poster: "雪狼",
        dateCreated: '2016-02-19T00:00:00',
        items: [
          {
            id: 11,
            title: "这是第一个回复",
            poster: "雪狼1",
            dateCreated: '2015-02-19T00:00:01',
            items: [{
              id: 111,
              title: '回复1.1',
              poster: "破浪2",
              dateCreated: "2015-5-09T00:00:08"
            }, {
              id: 112,
              title: '回复1.2',
              poster: "破浪3",
              dateCreated: "2015-5-09T00:00:30"
            }]
          }, {
            id: 12,
            title: "这是第二个回复",
            poster: "雪狼2",
            dateCreated: '2015-02-19T00:00:08'
          }
        ]
      }, {
        id: 2,
        title: "这是第二个主题，含有字母abcd和数字1234",
        poster: "破浪",
        dateCreated: "2015-08-07T15:05:06"
      }
    ]
    $scope.users = vm.items;
    tree.enhance(vm.items);
    $scope.ifshowList = false;
    $scope.liGroup = [{
      "name": "1",
      "data": [11, 12, 13]
    },
      {"name": "2"},
      {
        "name": "3",
        "data": [31, 32, 33]
      }];

    $scope.showNoteList = function ($event) {
      $scope.ifshowList = !$scope.ifshowList;
      $event.stopPropagation();
    };

    $scope.chooseSub = function ($event, item) {
      // if(scope.choosenText==''){
      //   scope.length=0;
      // }
      // item.checked = !item.checked;


      $scope.chooseText = item;
      $event.stopPropagation();
    }


    $scope.treeList =
      [{
        "treeId": "42",
        "treeName": "我是大树",
        "parentId": "1",
        "level": 1,
        "isIndependent": true,
        "children": [{
          "treeId": "49",
          "treeName": "我是小树",
          "parentId": "42",
          "level": 2
        }],
        "departmentType": "PRIVATE"
      },{
        "treeId": "42",
        "treeName": "我是大树",
        "parentId": "1",
        "level": 1,
        "isIndependent": true,
        "children": [{
          "treeId": "49",
          "treeName": "我是小树",
          "parentId": "42",
          "level": 2
        }],
        "departmentType": "PRIVATE"
      },{
        "treeId": "42",
        "treeName": "我是大树",
        "parentId": "1",
        "level": 1,
        "isIndependent": true,
        "children": [{
          "treeId": "49",
          "treeName": "我是小树",
          "parentId": "42",
          "level": 2
        }],
        "departmentType": "PRIVATE"
      },{
        "treeId": "42",
        "treeName": "我是大树",
        "parentId": "1",
        "level": 1,
        "isIndependent": true,
        "children": [{
          "treeId": "49",
          "treeName": "我是小树",
          "parentId": "42",
          "level": 2
        }],
        "departmentType": "PRIVATE"
      },{
        "treeId": "42",
        "treeName": "我是大树",
        "parentId": "1",
        "level": 1,
        "isIndependent": true,
        "children": [{
          "treeId": "49",
          "treeName": "我是小树",
          "parentId": "42",
          "level": 2
        }],
        "departmentType": "PRIVATE"
      }, {
        "treeId": "59",
        "treeName": "wuyun",
        "parentId": "1",
        "parentLabel": "root",
        "level": 1,
        "isIndependent": true,
        "children": [{
          "treeId": "60",
          "treeName": "abc",
          "parentId": "59",
          "parentLabel": "wuyun",
          "level": 2
        }]
      }]
    $scope.selectContent=$scope.treeList[0].children[0].treeName;
    $scope.isShow = false;


    $scope.showTree = function () {
      document.onmouseup = null;
      $scope.isShow = !$scope.isShow;
    };

    var lala = function (e) {
      console.log(e.target.tagName);
      if (e.target.tagName != 'SPAN' && e.target.tagName != 'I') {
        $scope.isShow = false;
      } else {
        $scope.isShow = true;
      }
      $scope.$apply();
    };
    $scope.isShowFn = function () {
      document.onmouseup = lala;
    };



    $scope.showSelected = function (sel) {
      $scope.selectContent = sel.treeName;
      $scope.isShow = !$scope.isShow;
      $timeout(function () {
        $("#isSelected").blur();
      }, 0, false);
    };


  });
