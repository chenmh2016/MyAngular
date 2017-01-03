/**
 * Created by meihuan on 2016/11/29.
 */
/**
 * Created by meihuan on 2016/11/25.
 */
angular.module('testChenApp')
  //主题树
  .service('tree',function Tree(){
   var self=this;
    var enhanceItem=function(item,childrenName){
      item.$hasChildren=function(){
        var subItems=this[childrenName];
        return angular.isArray(subItems) && subItems.length;
      };
      item.$foldToggle=function(){
        this.$folded=!this.$folded;
      };
      item.$isFolded=function(){
        return this.$folded;
      };
    };
      //对传递进来的数据进行强化
      this.enhance=function(items,childrenName){
        if(angular.isUndefined(childrenName)){
          childrenName='items';
        }
        angular.forEach(items,function(item){
           enhanceItem(item,childrenName);
          //如果有子节点，则递归调用
          if(item.$hasChildren()){
            self.enhance(item[childrenName],childrenName);
          }
        });
      return items;
      }
  })


