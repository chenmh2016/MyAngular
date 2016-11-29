/**
 * Created by meihuan on 2016/11/24.
 */
angular.module('testChenApp')
  .controller('MainCtrl.listCtrl', function ($scope) {
    var　vm=this;
    vm.items=[{
      title:'这是第一个主帖',
      poster:'雪狼',
      dateCreated:'2015-02-19T00:00:00'
    },{
      title:'这是第二个主帖',
      poster:'破狼',
      dateCreated:'2015-02-18T00:00:00'
    }
    ];
    for(var i=0;i<10;++i){
      vm.items.push({
        title:'主题'+i,
        poster:'user'+i,
        dateCreated:'2015-12-07T00:25:32'
      })
    }

    var search=function(){
      alert(vm.filter.$)
    };
    vm.search= _.debounce(search,500);
  });
