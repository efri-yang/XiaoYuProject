$(function() {

    var $human = $("#J_human"), //小人物elem
        $dice=$("#J_dice"),//骰子
        $gifts=$(".gift-item"),
        $startBtn = $("#J_game-start"); //开始按钮

    var totalStep,
        isAnim=false,
        serverData;

  

    if($human.attr("data-run")>0){
        $gifts.eq(initRunStep).addClass('open');
    }
   
    
    /**
     * 骰子对象
     */
    var Dice=(function(){
        var DiceDia = $("#J_dialog-dice-box").dialogs({
            shadeClose: false,
            afterHide: function() {
                $dice.get(0).className="";                
                $human.attr("data-run",totalStep);
            }
        });

        var diceAnim=function(){
            setTimeout(function(){
                DiceDia.hide();
                //人物行走
                Human.anim();
            },750)
        }
        return {
            dialog:DiceDia,
            animDone:diceAnim
        }
    })();

    /**
     * 小人物对象
     */
    var Human=(function(){
        var animDone=function(){
            $human.transitionEnd(function(){
                var $gift=$gifts.eq(totalStep-1);
                $gift.addClass('open');
                Gift.anim($gift);
            })
        }
        return {
            anim:animDone
        }
    })();

    /**
     * 礼物盒子对象
     */
    var Gift=(function(){

        var noPrizeDia = $("#J_dialog-noprize-box").dialogs({
            shadeClose: false,
            beforeShow:function(){
                 this.$element.find('.txt-guide').html(serverData.name)
            }
        });
        var hadPrizeDia = $("#J_dialog-hadprize-box").dialogs({
            shadeClose:true,
            beforeShow:function(){
               this.$element.find('.prize-name').html(serverData.name);
            }
        });

        var animDone=function($elem){
            $elem.transitionEnd(function(){
                handleGiftDialog();
                $startBtn.show();
            })
        }
        return {
            anim:animDone,
            DialogY:hadPrizeDia,
            DialogN:noPrizeDia
        }  
    })();



    function  handleGiftDialog(){
            if(serverData.isPrize){
                Gift.DialogY.show();
            }else{
                Gift.DialogN.show();
            }
    }





    /**
     * [点击开始按钮的时候]
     * 判断是否还有次数，
     *      有，然后掷骰子
     *      没有，弹出提示框，提示分享 或者提示今天次数已经用光了
     *      
     * 服务端返回 
     *    fasle 今天次数超过规定的次数
     *    0 次数用完（还没超过规定次数） 
     *    
     */
    $startBtn.on("touchstart", function() {
        $.ajax({
            url: "http://wnworld.com/conn/dice.php",
            data: "",
            dataType: "json",
            beforeSend: function() {
                //弹出加载层
                layer.open({ type: 2, shade: false });
            },
            success: function(data) {
                layer.closeAll();
                /**
                 * false 0
                 * {
                 *    isPrize:true,//是否中奖
                 *    dice:"1",//骰子数值
                 *    name:"xxxxxxxx",//公司名字
                 *    prize:"奖品奖品"//奖品名字
                 * }
                 */
                if (!!data) {

                    serverData=data;//覆盖全局变量
                    $startBtn.hide();
                    Dice.dialog.show(function() {

                        //开发修改这里
                        var stepcount=parseInt($human.attr("data-run"));
                        totalStep=stepcount+data.dice;
                        if(totalStep>12){
                             totalStep=12;
                             alert("重新刷新下浏览器满格了！")
                             return false;
                        };


                        //骰子动画
                        $dice.addClass("dice" + data.dice);
                        $dice.animationEnd(Dice.animDone);
                        //小人物动画
                       
                    });
                } else if(!data && data===0) {
                    layer.open({
                        content: '次数用光啦！通过分享可以获取机会！',
                        btn: '我知道了'
                    });
                }else if(!data && data===false) {
                    layer.open({
                        content: '您今天已经玩过两次哦！休息一下，明天继续拼搏！',
                        btn: '我知道了'
                    });
                }
            }
        })
    })
})

