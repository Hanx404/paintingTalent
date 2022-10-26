// 处理多次点击
function noMultipleClicks(methods) {
    let that = this;
    
    if (that.noClick) {
        that.noClick= false;
        methods();
        setTimeout(function () {
            that.noClick= true;
        }, 2000)
    } else {
        console.log("请稍后点击")
    }
}

//导出
export default {
	noMultipleClicks,//禁止多次点击
}