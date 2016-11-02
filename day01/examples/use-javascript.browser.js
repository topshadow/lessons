document.addEventListener("keydown", function () {
    console.log('js脚本告诉你,当前日期' + new Date().toLocaleDateString());
});

// debugger 在浏览器打开开发者控制台的时候会自动断点
// debugger;
var a = b * 10;
// throw Error('抛出自定义的错误');