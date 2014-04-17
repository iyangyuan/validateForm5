validateForm5
=============  
  
JS：
-------------  
  
###语法：  
  
    $("#testFrom").find("input,textarea").validateForm5();  
    
说明：  
  
该例验证`id`为`testFrom`的元素下，所有`input`或`textarea`元素。  
也就是说，通过`Jquery`选择器获取到元素之后，直接调用`validateForm5`方法即可。  
验证通过返回`true`。  
验证不通过返回`false`，并且高亮所有不通过的元素。  
  
标签：  
-------------   
  
###required  
  
####语法：  
  
    < required>  
  
####说明：  
  
该属性表明元素是必填(必选)的，兼容`HTML5`。  
它可以用在`input`、`textarea`标签上。  
  
####示例：  
  
对应输入类型的input标签而言，是必填含义。  
    <input type="text" required>  
对于选择类型的input标签而言，是必选的含义。  
    <input type="checkbox" required>  
  
###pattern  
  
####语法：  
  
    < pattern="正则表达式">
  
####说明：  
  
该属性表示用何种规则去验证输入内容，规则为正则表达式，兼容`HTML5`。  
该属性只能用于输入类型的`input`标签上，当然，`textarea`标签也可以。  
当元素没有`required`属性时，可以不输入任何内容，此时`pattern`也不起作用，输入内容之后`pattern`才起作用。  
  
####示例：  
  
`pattern`与`required`一起使用，使得该元素即不能为空，也要符合表达式。  
    <input type="text"  pattern="^[1-9a-zA-Z]{6,20}$" required>。  
只有`pattern`属性，说明该元素可以不填，但填写内容之后，必须符合表达式。  
    <input type="email"  pattern="^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$">  
  
###data-group  
  
####语法：  
  
    < data-group="组名">  
  
####说明：  
  
该属性表示将多个元素归为一组，他们的值必须相同。  
组名不能以数字开头，基本上26个字母够用了。  
该属性只能用于输入类型的`input`标签上(包括`textarea`标签)。  
验证两次密码输入是否一致是常见的用法。  
  
####示例：  
  
两个元素均标识为pw组，保证内容一致。  
    <input type="password"  pattern="^\[1-9a-zA-Z\]\{6,20\}$" data-group="pw" required>  
    <input type="password"  pattern="^\[1-9a-zA-Z\]\{6,20\}$" data-group="pw" required>  
   
   
   
三者混用，威力无穷！
=============


