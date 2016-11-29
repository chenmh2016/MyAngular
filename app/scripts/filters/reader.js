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
  .filter("timenew",function(){
    return function(time){
      var date=new Date();
      //if(date.getTime()-time.getTime()>60){
      //  return "一小时之前"
      //}else if(date.getTime()-time.getTime()>10){
      //  return "一会之前"
      //}else if(date.getTime()-time.getTime()==1){
      //  return "一分钟之前"
      //}
return "一分钟之前"
    }
  })

  .filter("page",function(){
    return function(input,page,pageSize){
      if(!input){
        return input;
      }
      if(page<0||pageSize<=0){
        return [];
      }
      var start=page*pageSize;
      var end=(page+1)*pageSize;
      return input.slice(start,end)
    }
  })
