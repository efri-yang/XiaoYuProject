<html>
<head>
</head>
<body class="yahei">
<style>
    #view{background-image:url(./images/logo-bg.png);width:750px;margin:0 auto;}
    #view .hd{font-size:32px;text-align:center;color:#000;width:750px;height:140px;line-height:140px;padding:0;border-bottom:1px solid #0673b5;}
    #view .bd{width:700px;padding:0px 25px 20px;margin:0;}
    #view .bd .title{text-align:center;font-size:28px;height:70px;line-height:80px;border:none;}
    #view .bd .photo-box{text-align:center;}
    #view .bd .photo-box .photo{width:360px;height:360px;background-position: center;background-size: 100% 100%;background-repeat: no-repeat;margin:10px auto;}
    #view .bd dt.title{text-align:center;font-size:28px;height:90px;line-height:100px;border:none;padding:0;}
    #view .bd .row{clear:both;font-size:24px;margin-bottom:12px;color:#666;}
    #view .bd .row .left.text{width:130px;margin-left:60px;float:left;color:#1a1a1a;}
    #view .bd .row .info{color:#666;}
    #view .bd .row .note{line-height: 40px;}
    .page{position: relative;}
</style>

<div class="preview" id="view" style="background-image:url(/img/2017/marry/logo-bg.png);width:750px;margin:0 auto;;">
    <div class="hd" style="font-size:32px;text-align:center;color:#000;width:750px;height:140px;line-height:140px;padding:0;border-bottom:1px solid #0673b5;">青春不常在，抓紧谈恋爱</div>
    <dl class="bd info-list" style="width:700px;padding:0px 25px 20px;margin:0;">
        <dt class="title" style="text-align:center;font-size:28px;height:70px;line-height:80px;border:none;">近期照片</dt>
        <dd class="photo-box" style="text-align:center;">
            <img src="<?=$member['imgs'][0]?>" alt="" class="photo" height="360" width="360" style="width:360px;height:360px;background-position: center;background-size: 100% 100%;background-repeat: no-repeat;margin:10px auto;">
        </dd>
        <dt class="title" >个人资料</dt>
        <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
            <div class="left text" >填表时间</div>
            <div class="info"><?=date('Y年-m月-d日 H:i:s', $member['addtime'])?></div>
        </dd>
        <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
            <div class="left text" >昵称</div>
            <div class="info"><?=$member['username']?>（ID <?=$member['uid']?>）</div>
        </dd>
        <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
            <div class="left text" >出生年月</div>
            <div class="info"><?=$member['birthday']?></div>
        </dd>
        <?php
        if($member['height']) {
            ?>
            <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
                <div class="left text" >身高</div>
                <div class="info"><?=$member['height']?>CM</div>
            </dd>
        <?php
        }
        ?>
        <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
            <div class="left text" >手机号</div>
            <div class="info">
                <?php
                switch ($member['mobile']['status']) {
                    case 0:
                        echo '保密';
                        break;
                    case 2:
                        echo '好友可见';
                        break;
                    default:
                        echo $member['mobile']['num'];
                }
                ?>
            </div>
        </dd>
        <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
            <div class="left text" >婚姻状况</div>
            <div class="info"><?=$member['ismarry']?></div>
        </dd>
        <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
            <div class="left text" >房／车</div>
            <div class="info"><?=$member['asset']?></div>
        </dd>
        <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
            <div class="left text" >性别</div>
            <div class="info"><?=$member['sex']?></div>
        </dd>
        <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
            <div class="left text" >籍贯</div>
            <div class="info"><?=implode(' ', $member['origin'])?></div>
        </dd>
        <?php
        if($member['weight']) {
            ?>
            <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
                <div class="left text" >体重</div>
                <div class="info"><?=$member['weight']?>KG</div>
            </dd>
        <?php
        }
        ?>
        <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
            <div class="left text" >微信</div>
            <div class="info">
                <?php
                switch ($member['wechat']['status']) {
                    case 0:
                        echo '保密';
                        break;
                    case 2:
                        echo '好友可见';
                        break;
                    default:
                        echo $member['wechat']['name'];
                }
                ?>
            </div>
        </dd>
        <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
            <div class="left text" >QQ</div>
            <div class="info">
                <?php
                switch ($member['oicq']['status']) {
                    case 0:
                        echo '保密';
                        break;
                    case 2:
                        echo '好友可见';
                        break;
                    default:
                        echo $member['oicq']['num'];
                }
                ?>
            </div>
        </dd>
        <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
            <div class="left text" >学历</div>
            <div class="info"><?=$member['edu']?></div>
        </dd>
        <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
            <div class="left text" >职业</div>
            <div class="info"><?=$member['occupation']?></div>
        </dd>
        <dt class="title" >对心目中的Ta的要求 </dt>
        <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
            <div class="left text" >籍贯要求</div>
            <div class="info"><?=$member['target']['origin']?></div>
        </dd>
        <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
            <div class="left text" >年龄要求</div>
            <div class="info"><?=$member['target']['age']['start']?>-<?=$member['target']['age']['end']?>岁</div>
        </dd>
        <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
            <div class="left text" >婚姻状况</div>
            <div class="info"><?=$member['target']['ismarry'] ? implode('或',$member['target']['ismarry']) : '不限'?></div>
        </dd>
        <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
            <div class="left text" >房车要求</div>
            <div class="info"><?=$member['target']['asset'] ? $member['target']['asset'] : '不限'?></div>
        </dd>
        <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
            <div class="left text" >身高要求</div>
            <div class="info"><?=$member['target']['height']['start'].'-'.$member['target']['height']['end']?>CM</div>
        </dd>
        <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
            <div class="left text" >学历要求</div>
            <div class="info"><?=$member['target']['edu'] ? $member['target']['edu'] : '不限'?></div>
        </dd>
        <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
            <div class="left text" >薪资要求</div>
            <div class="info"><?=$member['target']['salary']?></div>
        </dd>
        <dt class="title" >更多的描述自己／心目中的她和他</dt>
        <dd class="row" style="clear:both;font-size:24px;margin-bottom:12px;color:#666;">
            <div class="note text" style="line-height:40px;">
                <?=$member['describe']?>
            </div>
        </dd>
    </dl>
</div>
</body>
</html>