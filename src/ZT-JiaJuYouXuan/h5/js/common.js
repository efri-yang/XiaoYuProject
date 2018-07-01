$(function() {
    var wyDialog,resultDialog, loadDialog;
    $("#J_banner-btn-lqwy,#J_ft-btn-lqwy").on("touchstart", function() {
        wyDialog = mDialog.open({
            title: false,
            width: "80%",
            duration: 250,
            content: $("#J_dialog-lqwy"),
            hasInput: true,
            onShow: function() {


            },
            onClose: function() {

            }
        });
    });
    //开发根据实际情况嵌入相应的弹出框代码

    $("#J_dialog-lqwy .ipt-submit").on("touchstart", function() {

        //提交表单 弹出加载提示框
        loadDialog = mDialog.load({
            shade: { opacity: 0 },
            shadeClose: false
        });

        //如果报名成功，弹出结果提示框
        //setTimeout只是来看到各种提示结果，实际环境直接取里面的代码
        setTimeout(function() {
        	loadDialog.close();
            if (Math.random() > 0.5) {
                wyDialog.close();
                resultDialog = mDialog.open({
                    title: false,
                    width: "75%",
                    duration: 250,
                    content: $("#J_dialog-lqresult"),
                    hasInput: true,
                    onShow: function() {


                    },
                    onClose: function() {

                    }
                });
            } else {
                //失败或验证字段提示

                mDialog.msg({
                    duration: 250,
                    pause: 2000,
                    content: "请输入xx(表单提交失败！)"
                });


            }
        }, 2000)

    });

    $("#J_dialog-lqresult .lq-close").on("click", function() {
        resultDialog.close();
    })
})