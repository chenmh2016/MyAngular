/**
 * Created by meihuan on 2016/11/25.
 */
angular.module('testChenApp')
  //校验输入框的合法性的指令
  .directive('bfFieldError',function bfFieldError($compile){
  return{
    restrict:'A',
    require:'ngModel',
    link:function(scope,element,attrs,ngModel){
      var subScope=scope.$new(true);
      subScope.hasError=function(){
        return ngModel.$invalid && ngModel.$dirty;
      };
      subScope.errors=function(){
        return ngModel.$error;
      };
      //var hint=$compile('<ul ng-if="hasError()">{{errors()}}</ul>')
      //var hint=$compile('<ul ng-if="hasError()"><li ng-repeat="(name,wrong) in errors()" ng-if="wrong">{{name}}</li></ul>')
      var hint=$compile('<ul ng-if="hasError()"><li ng-repeat="(name,wrong) in errors()" ng-if="wrong">{{name|error}}</li></ul>')
      (subScope);
      element.after(hint);
    }
  }
})
//判断确认密码正确与否的指令
   .directive('bfAssertSameAs',function bfAssertSameAs(){
      return{
        restrict:'A',
        require:'ngModel',
        link:function(scope,element,attrs,ngModel){
          var isSame=function(value){
            var anotherValue=scope.$eval(attrs.bfAssertSameAs);
            return value===anotherValue;
          };
          ngModel.$parsers.push(function(value){
            ngModel.$setValidity('same',isSame(value));
            return isSame(value) ? value :undefined;
          });
          scope.$watch(
            function(){
              return scope.$eval(attrs.bfAssertSameAs);
            }
            //function(){
            //  ngModel.$setValidity('same',isSame(ngModel ,$modelValue));
            //}
          )
        }
      }
    })


