//加载首页脚本
alert(1);
require(['apps/index'], function(index) {
    alert(2);
    index();
});