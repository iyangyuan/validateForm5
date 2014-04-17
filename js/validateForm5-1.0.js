(function($){
  $.fn.extend({
    //通用ajax表单提交验证方法，最大程度兼容html5 form表单提交
    //通过jquery选择器获取需要验证的表单元素数组，只针对input、textarea标签
    //通过标签的required属性判断元素是否为必填(必选)，优先级高于pattern
    //通过标签的pattern属性获取验证的正则表达式，然后进行验证
    //通过标签的data-group属性获取组，同一组内的所有值应相同，组名以字母开头，应用场景：两次输入密码一致
    validateForm5: function(){
      var result = true;
      var tags = this;
      
      //遍历-移除所有错误样式
      for(var i=0;i<tags.length;i++){
        $(tags[i]).removeClass("has-error-extend");
      }
      
      //遍历-验证必填(必选)项
      for(var i=0;i<tags.length;i++){
        var s = $(tags[i]);
        //判断是否有required属性
        if(s.attr("required")){
          //判断是否为checkbox或radio元素
          if(s.attr("type") == "checkbox" || s.attr("type") == "radio"){
            //判断是否选中
            if(!s.attr("checked")){
              //没有选中，添加错误样式
              s.addClass("has-error-extend");
              //结果标记为false
              result = false;
            }
          }else{
            //判断是否有值
            if(s.val() == ""){
              //没有值，添加错误样式
              s.addClass("has-error-extend");
              //结果标记为false
              result = false;
            }
          }
        }
      }
      
      //遍历-验证表达式
      for(var i=0;i<tags.length;i++){
        var s = $(tags[i]);
        //获取验证表达式
        var regText = s.attr("pattern");
        //判断是否有验证表达式
        if(regText){
          //有表达式，则创建正则对象，进行验证(忽略为空的情况)
          var reg = new RegExp(regText);
          if(!reg.test(s.val()) && s.val()!=""){
            //验证不通过，添加错误样式
            s.addClass("has-error-extend");
            //结果标记为false
            result = false;
          }
        }
      }
      
      //遍历-验证组
      var group = {};
      for(var i=0;i<tags.length;i++){
        var s = $(tags[i]);
        //判断有无组属性
        var groupName = s.attr("data-group");
        if(groupName){
          //判断属性值是否存过
          var groupValue = group[groupName];
          if(groupValue){
            //保存过判断当前值与保存的值是否相等
            if(groupValue != s.val()){
              //不相同添加错误样式
              s.addClass("has-error-extend");
              //结果标记为false
              result = false;
            }
          }else{
            //没存过直接保存
            group[groupName] = s.val();
          }
        }
      }

      return result;
    }
  });
})(jQuery);