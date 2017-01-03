/**
 * Created by meihuan on 2016/12/22.
 */
/**
 * Created by meihuan on 2016/11/29.
 */
/**
 * Created by meihuan on 2016/11/25.
 */
angular.module('testChenApp')
  //主题树
  .factory('Reddit',function Tree($http){
    var Reddit=function(){
      this.item=[];
      this.busy=false;
      this.after='';
    }
    Reddit.prototype.nextPage=function(){
      if(this.busy) return;
      this.busy=true;

      var url="http://api.reddit.com/hot?after=' + this.after + ' &jsonp=JSON_CALLABCK";
      $http.jsonp(url).success(function(data){
        var items=data.data.children;
        for(var i=0;i<items.length;i++){
          this.items.push(items[i].data);
        }
        this.after="t3_"+this.items[this.items.length-1].id;
        this.busy=false;
      }.bind(this))
    };
    return Reddit;
  })


