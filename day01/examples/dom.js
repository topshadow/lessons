// dom元素操作
$("button.continue").html("已经到了下一步")


// 事件处理
var message = $('#banner-message');
$("#banner-container button").on("click", function () {
    message.show();
})

//  Ajax请求
$.ajax({
    url: "demo.json",
    success: function (result) {
        alert(JSON.stringify(result));
    }
})