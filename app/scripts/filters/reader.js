angular.module('testChenApp').filter('error',function(Errors){
  //通过注入Errors常量来用了，所以就不需要这么定义死了。在function中的参数写
  //var messages={
  //  email:'不是有效格式的邮件地址',
  //  required:'此项不能为空'
  //};
  return function(name){
    //return messages[name]||name;
    return Errors[name]||name;
  };
})
