/**
 * Created by meihuan on 2016/11/24.
 */
angular.module('testChenApp')
  .controller('ReaderCreatCtrl', function ($scope,$http) {
// 注意我们reader下面的控制器并不一定要用MainCtrl.ReaderCreatCtrl的形式，可以直接用后面， 然后在app.js的路由中指定路由器和view的关系。我仅仅改了create的controller，list和themetree的没有修改controller的命名
    $(function() {
      $("#time").datepicker({
        format: 'yyyy-mm-dd',  //默认显示日期的格式
        weekStart: 1,
        autoclose: true,  //选择完日期之后自动关闭
        todayBtn: 'linked',
        language: 'cn'
      });
    })
    var　vm=this;　
      vm.submit=function(form){
      console.log(form)
        $http.get("http://localhost:9000")
          .success(function (response) {console.log("create")});
    }
  });
