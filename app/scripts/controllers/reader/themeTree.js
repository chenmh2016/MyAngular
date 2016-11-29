
/**
 * Created by meihuan on 2016/11/28.
 */
/**
 * Created by meihuan on 2016/11/24.
 */
angular.module('testChenApp')
  .controller('MainCtrl.themeTreeCtrl', function ($scope,tree) {
    var　vm=this;
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
            poster:"雪狼",
            dateCreated:'2015-02-19T00:00:01',
            items:[{
              id:111,
              title:'回复1.1',
              poster:"破浪",
              dateCreated:"2015-5-09T00:00:08"
            },{
              id:112,
              title:'回复1.2',
              poster:"破浪",
              dateCreated:"2015-5-09T00:00:30"
            }]
          },{
            id:12,
            title:"这是第二个回复",
            poster:"雪狼",
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
    tree.enhance(vm.items);

  });
