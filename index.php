<?php
$backurl = "http://zz.xmfish.com";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:wb="http://open.weibo.com/wb">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title><?=$title?></title>
    <meta content="<?=$keywords?>" name="keywords">
    <meta content="<?=$description?>" name="description">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="baidu-site-verification" content="S26wXDXhpg" />
    <link rel="stylesheet" href="/styles/chanel/zzfish/zzfish0405.css" type="text/css" media="screen,projection" charset="utf-8"/>
    <script type="text/javascript" src="http://bbs.zz.xmfish.com/apps/rt/www/js/jquery-1.4.2.min.js"></script>
    <script type="text/javascript" src="<?=$urbl2bbs?>/apps/rt/client/head.php?charset=utf8&backurl=<?=$backurl?>" charset="GBK"></script>
    <style>
        body{padding:0;}
        #fish-top-skin{width:100%;height:350px;background:url('http://zz.xmfish.com/images/chanel/www/index2/campaign/20171115_zz_xyk.jpg') no-repeat center 31px;}
        #fish-top-bobing{width:100%;height:318px;background:url('http://zz.xmfish.com/images/chanel/www/index2/campaign/160818_bobing_bg.jpg') no-repeat center 0;}
        .xmfish-theme{position:absolute;display:block;top:35px;left:50%;width:499px;height:91px;margin-left:0px;z-index:2;}
        .xmfish-theme a{
            display: block;
            width: 100%;
            height: 100%;
        }

        .t_2014_subject{position:absolute;top:0;left:50%;width:300px;margin-left:-480px;}
        .t_2014_subject h2{position:relative;z-index:0;}
        .t_2014_subject h2 a{display:block;position:absolute;top:71px;left:-20px;width:216px;height:41px;background:url('http://zz.xmfish.com/images/chanel/www/index2/campaign/20171115_zz_logo.png');background-image:-webkit-image-set('http://zz.xmfish.com/images/chanel/www/index2/campaign/20171115_zz_logo.png') 1x,url('http://zz.xmfish.com/images/chanel/www/index2/campaign/20171115_zz_logo.png') 2x);background-image:-moz-image-set('http://zz.xmfish.com/images/chanel/www/index2/campaign/20171115_zz_logo.png') 1x,url('http://zz.xmfish.com/images/chanel/www/index2/campaign/20171115_zz_logo.png') 2x);background-image:-ms-image-set('http://zz.xmfish.com/images/chanel/www/index2/campaign/20171115_zz_logo.png') 1x,url('http://zz.xmfish.com/images/chanel/www/index2/campaign/20171115_zz_logo.png') 2x);background-image:-o-image-set('http://zz.xmfish.com/images/chanel/www/index2/campaign/20171115_zz_logo.png') 1x,url('http://zz.xmfish.com/images/chanel/www/index2/campaign/20171115_zz_logo.png') 2x);background-repeat:no-repeat;background-size:100% auto;_background:none;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=crop,src='http://zz.xmfish.com/images/chanel/www/index2/campaign/20171115_zz_logo.png');overflow:hidden;text-indent:-999em;z-index:0;}
        .sd-panel{width:76px; }

        .t_2014_subject h3{position:relative;z-index:0;}
        .t_2014_subject h3 a{display:block;position:absolute;top:71px;width:145px;height:30px;background:url('http://www.xmfish.com/images/chanel/www/index2/campaign/xiaoyulogo_160818_white.png');background-image:-webkit-image-set('http://www.xmfish.com/images/chanel/www/index2/campaign/xiaoyulogo_160818_white.png') 1x,url('http://www.xmfish.com/images/chanel/www/index2/campaign/xiaoyulogo_160818_white2X.png') 2x);background-image:-moz-image-set('http://www.xmfish.com/images/chanel/www/index2/campaign/xiaoyulogo_160818_white.png') 1x,url('http://www.xmfish.com/images/chanel/www/index2/campaign/xiaoyulogo_160818_white2X.png') 2x);background-image:-ms-image-set('http://www.xmfish.com/images/chanel/www/index2/campaign/xiaoyulogo_160818_white.png') 1x,url('http://www.xmfish.com/images/chanel/www/index2/campaign/xiaoyulogo_160818_white2X.png') 2x);background-image:-o-image-set('http://www.xmfish.com/images/chanel/www/index2/campaign/xiaoyulogo_160818_white.png') 1x,url('http://www.xmfish.com/images/chanel/www/index2/campaign/xiaoyulogo_160818_white2X.png') 2x);background-repeat:no-repeat;background-size:100% auto;_background:none;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=crop,src='http://www.xmfish.com/images/chanel/www/index2/campaign/xiaoyulogo_160818_white.png');overflow:hidden;text-indent:-999em;z-index:0;}
        .switch_city{position:absolute;top:74px;left:155px;width:100%;}

    </style>
<?php
$skin_today = date('Ymd');
if($skin_today >= '20170915' && $skin_today<='20171031'){
?>
<style>
#fish-top-skin{height:350px;background:url('http://www.xmfish.com/images/chanel/www/index2/bobing20170918/skin_bg.jpg') no-repeat center 0;}
#grayscale{margin-top:-486px !important;}
.t_2014_subject h2 a{background:url('http://www.xmfish.com/images/chanel/www/index2/bobing20170918/logo.png');background-image:-webkit-image-set('http://www.xmfish.com/images/chanel/www/index2/bobing20170918/logo.png') 1x,url('http://www.xmfish.com/images/chanel/www/index2/bobing20170918/logo.png') 2x);background-image:-moz-image-set('http://www.xmfish.com/images/chanel/www/index2/campaign/bobing20170918/logo.png') 1x,url('http://www.xmfish.com/images/chanel/www/index2/campaign/bobing20170918/logo.png') 2x);background-image:-ms-image-set('http://www.xmfish.com/images/chanel/www/index2/campaign/bobing20170918/logo.png') 1x,url('http://www.xmfish.com/images/chanel/www/index2/bobing20170918/logo.png') 2x);background-image:-o-image-set('http://www.xmfish.com/images/chanel/www/index2/bobing20170918/logo.png') 1x,url('http://www.xmfish.com/images/chanel/www/index2/bobing20170918/logo.png') 2x);_background:none;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=crop,src='http://www.xmfish.com/images/chanel/www/index2/bobing20170918/logo.png');}
.xmfish-theme{display:none;}
.switch_city .sc,
.switch_city .sct{color:#fff;}
</style>
<?}?>
</head>
<body class="yahei">
<div id="fish-top-skin"></div>
<span class="xmfish-theme"><a href="http://bbs.zz.xmfish.com/read-htm-tid-1633254-displayMode-1.html"></a></span>

<div class="t_2014_subject">
    <header>
        <h2 class="fl"><a href="<?=$backurl?>">漳州小鱼网</a></h2>
        <div class="switch_city switch_city_index" style="display: none;">
            <strong class="sc">漳州站</strong>
            <span class="sct">[切换城市]</span>
            <div class="city_list">
                <a href="http://www.xmfish.com/">厦门</a>
                <a href="http://qz.xmfish.com/">泉州</a>
                <a href="http://jj.xmfish.com/">晋江</a>
                <a href="http://fz.xmfish.com/">福州</a>
            </div>
        </div>
    </header>
</div>

<!-- 漳州首页对联广告 -->
<script type="text/javascript" src="http://cmm.xmfish.com/bshw/1329.js" charset="utf-8"></script>
<style>
    .ad_fr,.ad_fl{top:31px;}
</style>

<!--侧边导航-->
<div class="fixed_top">
    <aside>
        <div class="shortcut_panel">
            <div class="shortcut_ppo">
                <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1121.js" charset="utf-8"></script>
            </div>
            <div class="shortcut_top"></div>
            <ul class="s_menu ulib-b-r3">
                <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-10.html" rel="external nofollow">关注民生</a></li>
                <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-33.html" rel="external nofollow">吃喝玩乐</a></li>
                <li><a href="http://fangzi.zz.xmfish.com/" rel="external nofollow">买房优惠 </a></li>
                <li><a href="http://jiaju.zz.xmfish.com/" rel="external nofollow">家居装修</a></li>
                <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-50.html" rel="external nofollow">交友征婚</a></li>
                <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-64.html" rel="external nofollow">小鱼亲子</a></li>
                <li><a href="http://auto.zz.xmfish.com/" rel="external nofollow">小鱼汽车</a></li>
                <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-91.html" rel="external nofollow">社区热图</a></li>
                <li><a class="bs_coop" href="<?=$urbl2bbs?>/uploads/help/service.html" target="_blank" rel="external nofollow">商务合作</a></li>
                <li class="mobile_download" onMouseOver="$('.mobile-big-code').show();" onMouseOut="$('.mobile-big-code').hide();">
            	<span class="mobile-big-code"><span class="code1-arrow-wrap"></span><span class="code1-arrow"></span>
                    <a href="http://hot.xmfish.com/special/client/" target="_blank">
                        <img src="/images/chanel/www/index2/b_mobile.jpg" width="140" height="140" alt="小鱼客户端下载" /><div>下载客户端</div>
                    </a>
                </span>
                    <span class="mobile-small-code"><i></i></span>客户端
                </li>
                <li class="mobile_weixin" onMouseOver="$('.weixin-big-code').show();" onMouseOut="$('.weixin-big-code').hide();">
                    <span class="weixin-big-code"><span class="code1-arrow-wrap"></span><span class="code1-arrow"></span><a href="javascript:void(0);" target="_blank"><img src="/images/chanel/zzfish/2014/weixin-code.jpg" width="140" height="140" alt="小鱼微信" /><div>小鱼微信</div></a></span>
                    <span class="weixin-small-code"><i></i></span>微信
                </li>
                <li class="return_top ulib-b-r3"><a href="#" rel="external nofollow"><i class="up-icon"></i>回顶部</a></li>
            </ul>
        </div>
    </aside>
</div>
<!--侧边导航结束-->

<span id="grayscale" style="display:block;margin-top:-217px !important;">
    <div class="wrap">
    <!--导航-->
    <nav>
    <div class="t_2014_navpanel">
            <div class="t_2014_tab_holder clear">
                <ul class="fl clear">
                    <li class="active"><a href="http://zz.xmfish.com" rel="external nofollow">首页</a></li>
                    <li><a target="_blank" href="http://bbs.zz.xmfish.com">社区</a></li>
                    <!--                    <li><a href="http://rc.zz.xmfish.com/" target="_blank">人才网</a></li>-->
                    <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-322.html" target="_blank">小鱼卡</a></li>
                    <li><a target="_blank" href="http://bbs.zz.xmfish.com/u.php" rel="external nofollow">我的空间</a></li>
                    <li><a target="_blank" href="http://hot.xmfish.com/special/client/">手机客户端</a></li>
                </ul>
                <div class="fr follow_us">
                关注我们：
                <span class="follow_us_weibo clear" title="小鱼官方微博">
                    <a href="http://widget.weibo.com/dialog/follow.php?fuid=1747674024" target="_blank">
                        <em class="fl weibo_focus">加关注</em>
                        <em class="fr weibo_sum"><i class="plus_arr1"></i><i class="plus_arr2"></i>1.5万</em>
                    </a>
                </span>
                <span class="follow_us_weixin" onmouseover="$('.fish_weixin').show();" onmouseout="$('.fish_weixin').hide();" href="javascript:" title="小鱼官方微信">
                	<div class="fish_weixin">
                    <span class="weixin-arrow-wrap"></span>
                        <span class="weixin-arrow"></span>
                    <img src="/images/chanel/zzfish/2014/weixin-code.jpg" alt="关注小鱼官方微信">
                    </div>
                </span>
                </div>
            </div>
            <div class="t_2014_nav_holder clear">
                <dl class="t_2014_n_life">
                    <dt><span><a style="color:#085bb0;" href="http://bbs.zz.xmfish.com" target="_blank"><i class="icon"></i>社区</span></a></dt>
                    <dd>
                        <ul class="clear">
                            <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-10.html" target="_blank">民生</a></li>
                            <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-34.html" target="_blank">谈天</a></li>
                            <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-320.html" target="_blank">约稿</a></li>
                            <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-50.html" target="_blank">征婚</a></li>
                        </ul>
                        <ul class="clear">
                            <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-33.html" target="_blank">美食</a></li>
                            <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-61.html" target="_blank">旅游</a></li>
                            <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-91.html" target="_blank">摄影</a></li>
                            <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-339.html" target="_blank">专访</a></li>
                        </ul>
                    </dd>
                </dl>
                <dl class="t_2014_n_consume">
                    <dt><span><i class="icon"></i>消费</span></dt>
                    <dd>
                        <ul class="clear">
                            <li><a href="http://fangzi.zz.xmfish.com/" target="_blank">房产</a></li>
                            <li><a href="http://jiaju.zz.xmfish.com/" target="_blank">装修</a></li>
                            <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-64.html" target="_blank">亲子</a></li>
                        </ul>
                        <ul class="clear">
                            <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-166.html" target="_blank">婚嫁</a></li>
                            <li><a href="http://auto.zz.xmfish.com/" target="_blank">汽车</a></li>
                        </ul>
                    </dd>
                </dl>
                <dl class="t_2014_n_preferential">
                	<dt><span><i class="icon"></i>分类</span></dt>
                    <dd>
                        <ul class="clear">
                            <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-318.html" target="_blank">菜篮子</a></li>
                            <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-74.html" target="_blank">求职招聘</a></li>
                            <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-210.html" target="_blank">物尽其用</a></li>
                            <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-216.html" target="_blank">房屋出租</a></li>
                        </ul>
                        <ul class="clear">
                            <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-296.html" target="_blank">生活服务</a></li>
                            <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-68.html" target="_blank">商务服务</a></li>
                            <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-213.html" target="_blank">二手车</a></li>
                        </ul>
                    </dd>
                </dl>
                <dl class="t_2014_n_service">
                    <dt><span><i class="icon"></i>用户</span></dt>
                    <dd>
                        <ul class="clear">
                            <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-181.html" target="_blank">新手上路</a></li>
                        </ul>
                        <ul class="clear">
                            <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-328.html" target="_blank">投诉建议</a></li>
                        </ul>
                    </dd>
                </dl>
            </div>
        </div>
        </nav>
        <!--导航结束-->
    </div>

    <div class="wrap">
        <aside>

        <script type="text/javascript">
			function displaymarryimg(){
                jQuery("#marry_laping").slideUp("slow");
            }
            function timerun(){
                var s = document.getElementById("marry_laping_time");
                if(s.innerHTML == 0){
                    return false;
                }
                s.innerHTML = s.innerHTML * 1 - 1;
            }
            function displaysdmarryimg(){
                jQuery("#marry_laping").slideDown("slow");
                setTimeout("displaymarryimg()",6000);
                window.setInterval("timerun();", 1000);
                window.setInterval("displaymarryimg();", 12000);
            }
		</script>
		<style>
		.marry_laping_opt{position:absolute;top:22px;right:15px;vertical-align:text-top;color:#fff;}
        .marry_laping_dj{padding:0 8px;}
        .marry_laping_close{display:inline-block;width:21px;height:20px;border:#ddd 1px solid;background-color:#f1f1f1;line-height:18px;text-align:center;font-size:18px;color:#333;cursor:pointer;}
		</style>
            <?php if ($laping){?>
                <div id="marry_laping" style="display:none;position:relative;width:1000px;height:600px;padding-top:8px;">
                    <div class="marry_laping_opt">
                        <span class="marry_laping_close fr" onclick="displaymarryimg();">x</span>
                        <span class="fr" style="padding-top:2px;color:#fff;">自动关闭<span id="marry_laping_time" class="marry_laping_dj">6</span></span>
                    </div>
                    <a href="<?=$laping['url']?>" target="_blank"><img onload="displaysdmarryimg();" src="<?=$laping['img']?>" width="1000" height="600" alt="<?=$laping['title']?>"  /></a>
                </div>
            <?}?>



            <!--广告-->
            <div class="mt8">
                <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1399.js" charset="utf-8"></script>
            </div>
            <div class="mt8">
                <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1397.js" charset="utf-8"></script>
            </div>
            <div class="mt8">
            	<script type="text/javascript" src="http://cmm.xmfish.com/bshw/1398.js" charset="utf-8"></script>
            </div>
            <div class="mt8">
                <script type="text/javascript" src="http://cmm.xmfish.com/bshw/395.js" charset="utf-8"></script>
            </div>

            <div class="mt8">
                <script type="text/javascript" src="http://cmm.xmfish.com/bshw/396.js" charset="utf-8"></script>
            </div>
            <div class="mt8">
                <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1393.js" charset="utf-8"></script>
            </div>
            <div class="mt8">
               <script type="text/javascript" src="http://cmm.xmfish.com/bshw/695.js" charset="utf-8"></script>
            </div>

            <div class="mt8">
               <script type="text/javascript" src="http://cmm.xmfish.com/bshw/696.js" charset="utf-8"></script>
            </div>

            <div class="mt8">
               <script type="text/javascript" src="http://cmm.xmfish.com/bshw/709.js" charset="utf-8"></script>
               <script type="text/javascript" src="http://cmm.xmfish.com/bshw/666.js" charset="utf-8"></script>
               <script type="text/javascript" src="http://cmm.xmfish.com/bshw/710.js" charset="utf-8"></script>
            </div>

            <div class="mt8">
               <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1129.js" charset="utf-8"></script>
            </div>

            <div class="mt8">
               <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1330.js" charset="utf-8"></script>
            </div>
            <div class="mt8">
               <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1331.js" charset="utf-8"></script>
            </div>
            <div class="mt8">
               <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1332.js" charset="utf-8"></script>
            </div>
            <div class="mt8">
               <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1333.js" charset="utf-8"></script>
            </div>
            <div class="mt8">
               <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1334.js" charset="utf-8"></script>
            </div>

            <div class="mt8">
               <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1314.js" charset="utf-8"></script>
            </div>
            <!--结束-->
        </aside>
    </div>

    <div class="wrap">
    <article>
        <!--头条-->
        <?php if (!empty($tldd1) || !empty($tldd2)) { ?>
            <div class="mt10 thumb-panel">
                <h3 class="thumb-panel-tt">头条</h3>
                <div id="headlines_slider">
                    <div class="headlines_con">
                        <?php
                        if ($tldd1) {
                            $tldd1_top = array_slice($tldd1, 0, 1);
                            $tldd1_sub = array_slice($tldd1, 1);
                            ?>
                            <div class="thumb-pin">
                                <h4 class="thumb-tt fn-nowrap"><a href="<?php echo $tldd1_top[0]['url'] ?>" target="_blank"><?php echo $tldd1_top[0]['title'] ?></a></h4>
                                <p class="thumb-list fn-nowrap">
                                    <?php foreach ($tldd1_sub as $item) {
                                        ?>
                                        <a target="_blank" style="font-weight:normal;" href="<?php echo $item['url'] ?>">[<?php echo $item['title'] ?>]</a>
                                    <?php } ?>
                                </p>
                            </div>
                        <?php } ?>
                        <?php
                        if ($tldd2) {
                            $tldd2_top = array_slice($tldd2, 0, 1);
                            $tldd2_sub = array_slice($tldd2, 1);
                            ?>
                            <div class="thumb-pin">
                                <h4 class="thumb-tt fn-nowrap"><a href="<?php echo $tldd2_top[0]['url'] ?>" target="_blank"><?php echo $tldd2_top[0]['title'] ?></a></h4>
                                <p class="thumb-list fn-nowrap">
                                    <?php foreach ($tldd2_sub as $item) {
                                        ?>
                                        <a target="_blank" style="font-weight:normal;" href="<?php echo $item['url'] ?>">[<?php echo $item['title'] ?>]</a>
                                    <?php } ?>
                                </p>
                            </div>
                        <?php } ?>
                    </div>
                    <?php if (!empty($tldd1) && !empty($tldd2)) { ?>
                        <div class="switcher">
                            <a class="cur">1</a>
                            <a >2</a>
                        </div>
                    <?php } ?>
                </div>
            </div>
        <?php } ?>
        <!--头条结束-->
        <div class="mt20 clear">
            <div class="fl col_300">
                <div>
                    <!-- 小鱼网首页导图上方图片 -->
                    <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1402.js" charset="utf-8"></script>
                </div>
                <!--导读幻灯-->
                    <div id="review_slider" >
                        <div onmouseover="jQuery('#review_slider').find('.prev,.next').css('display','block');" onmouseout="jQuery('#review_slider').find('.prev,.next').css('display','none');">
                        <div class="slides_container">
                            <?php if(is_array($AL1)){foreach ($AL1 as $k=>$v){$disply = $k ? 'style=" disply: none"' : ''; ?>
                                <div class="review_pin"<?= $disply?>>
                            	<a href="<?=$v['url']?>" target="_blank" title="<?=$v['title']?>">
                                 <img class="lazy" data-original="<?=$v['img']?>" width="300" height="340" border="0" alt="<?=$v['title']?>">
                                 <h5 class="review_tt fn-nowrap"><?=$v['title']?></h5>
                                </a>
                            </div>
                            <?php  } }  ?>
                        </div>
                        <a class="prev" href="javascript:void(0);"><</a>
                        <a class="next" href="javascript:void(0);">></a>
                        </div>
                    </div>
                <!--导读幻灯结束-->

                <div>
                    <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1403.js" charset="utf-8"></script>
                </div>

                <!--便民链接 20140919-->
                <div class="mt8 mb10 bianmin-opt-hd clear">
                <div class="bianmin-opt-tt fl">生活<b>好帮手&raquo;</b></div>
                </div>
                <ul class=" bianmin-opt clear">
                    <li><a class="bianmin-wjqy" href="http://fangzi.zz.xmfish.com/" target="_blank"><i class="icon"></i>找房子</a></li>
                    <li><a class="bianmin-qzzp" href="http://bbs.zz.xmfish.com/thread-htm-fid-74.html" target="_blank"><i class="icon"></i>找工作</a></li>
                    <li><a class="bianmin-esqc" href="http://bbs.zz.xmfish.com/thread-htm-fid-50.html" target="_blank"><i class="icon"></i>找对象</a></li>
                    <li><a class="bianmin-fwcz" href="http://bbs.zz.xmfish.com/thread-htm-fid-210.html" target="_blank"><i class="icon"></i>淘二手</a></li>
                    <li><a class="bianmin-esfw" href="http://bbs.zz.xmfish.com/thread-htm-fid-318.html" target="_blank"><i class="icon"></i>菜篮子</a></li>
                    <li><a class="bianmin-jpyd" href="http://fj.122.gov.cn/views/inquiry.html" target="_blank"><i class="icon"></i>违章查询</a></li>
                </ul>
                <!--便民链接结束-->

                <!--YUYU最新的爆料-->
                <div class="mt15 yuyu_baoliao">
                    <div class="yuyu_baoliao_hd clear">
                        <div class="yuyu_baoliao_tt fl"><a href="" target="_blank">鱼鱼<b>爆料&raquo;</b></a></div>
                        <div class="mobile_download fr" onMouseOver="$('.mobile-code').show();" onMouseOut="$('.mobile-code').hide();"><span class="mobile-code"><span class="code2-arrow-wrap"></span><span class="code2-arrow"></span><a href="http://hot.xmfish.com/special/client/" target="_blank"><img src="/images/chanel/www/index2/b_mobile.jpg" width="140" height="140" alt="小鱼客户端下载" /><div>下载客户端</div></a></span><i class="icon"></i>下载客户端</div>
                    </div>
                    <div class="yuyu_baoliao_bd mt10">
                        <?php
                        if($broke_news){$i = 0;
                            foreach ($broke_news as $item){
                                ?>
                                <dl class="yuyu_baoliao_list <?php if($i == 0){ ?>on<?php } ?>">
                            <dt><a href="<?=$item['url']?>" target="_blank"><img class="lazy" data-original="<?=$item['imgpath']?>" alt="<?=$item['title']?>"><p><?=$item['title']?></p></a></dt>
                            <dd><i>爆</i><a href="<?=$item['url']?>"><?=$item['title']?></a></dd>
                        </dl>
                                <?php $i++;}}?>
                    </div>
                </div>
                <!--YUYU最新的爆料结束-->


            </div>
            <div class="fl ml20 col_400">
                    <dl class="thumb">
                    <?php if(is_array($AC1) && is_array($AM)){
                        $i = 0;
                        foreach($AC1 as $k=>$v){
                            $i++;
                            $v['title_style'] = '';
                            ?>
                            <dt><a <?=$v['title_style']?> href="<?=$v['url']?>" target="_blank"><?=$v['title']?></a></dt>
                    <?php if($v['content'] && $v['title_count']){?>
                                <dd <?=$v['title_style']?> class="bds"><?=$v['content']?><a class="view-detailed" href="<?=$v['url']?>" target="_blank">[详细]</a></dd>
                            <?php  }elseif($v['content'] && !$v['title_count']){ ?>
                                <dd style="white-space: normal;color: #777;font-size: 14px;height: 50px;line-height: 30px;overflow: hidden;padding-bottom: 8px;width: 100%;<?=$v['title_style'] ? 'color:#f30;' :''?>"><?=$v['content']?><a class="view-detailed" href="<?=$v['url']?>" target="_blank">[详细]</a></dd>
                            <?php }
                            if($v['title_count'] < 3 && $v['title_count'] > 0 ){
                                ?>
                                <dd class="bds">
                        <?php foreach($v['title_small'] as $vv){
                            ?>
                            <a <?=$v['title_style']?> href="<?=$vv['url']?>" target="_blank">[<?=$vv['title']?>]</a>
                        <?php } ?>
                        </dd>
                            <?php } elseif($v['title_count'] > 3){ $i = 0; ?>
                                <dd class="bds">
                        <?php foreach($v['title_small'] as $vv){
                            if($i < 2){ $i++;
                                ?>
                                <a <?=$v['title_style']?> href="<?=$vv['url']?>" target="_blank">[<?=$vv['title']?>]</a>
                            <?php }} ?>
                        </dd>
                   <?php if(($v['title_count'] > 2) && !$v['content']){ $title_small = array_slice($v['title_small'], 2); ?>
                                    <dd class="bds">
                        <?php foreach($title_small as $vv){ $i++;
                            ?>
                            <a <?=$v['title_style']?> href="<?=$vv['url']?>" target="_blank">[<?=$vv['title']?>]</a>
                        <?php } ?>
                        </dd>
                                <?php } } } } ?>
                    </dl>
                <?php if(is_array($AC2)){
                $AC2_1 = array_slice($AC2,0,7);
                $AC2_2 = array_slice($AC2,7,6);
                $AC2_3 = array_slice($AC2,13);
                ?>
                <ul class="news_list">
                    <?php
                    foreach($AC2_1 as $k=>$v){
                        $substyle = '';
                        $v['isred'] == '启用' ? $substyle='style=\'color:rgb(255, 0, 0)\'' : '';
                        ?>
                        <li>
                        <span class="fl">
                            <b><a class="class_lk" href="<?=$cate[$v['bankuai']]?>" target="_blank" rel="external nofollow">[<?=$v['bankuai']?>]</a></b>
                            <?php if($v['title_count'] ) {
                                foreach($v['title_small'] as $vv){
                                    ?>
                                    <a href="<?=$vv['url']?>" target="_blank" ><?=$vv['title']?></a>
                                <?php } }else{
                                ?>
                                <a href="<?=$v['url']?>" target="_blank" <?=$substyle?>><?=$v['title']?></a>
                            <?php } ?>
                        </span>
                            <?php if(!$v['title_count'] ) { ?>
                                <em class="fr"><a href="<?=$v['url']?>" target="_blank" rel="external nofollow"><?=$v['author']?></a></em>
                            <?php } ?>
                        </li>
                        <?php
                    }
                    ?>
                	</ul>
                    <div class="news-tip"><div class="fn-nowrap"><a href="<?=$AM[0]['url']?>" target="_blank"><?=$AM[0]['title']?></a></div></div>
                    <ul class="news_list">
                    <?php
                    foreach($AC2_2 as $k=>$v){
                        $substyle = '';
                        $v['isred'] == '启用' ? $substyle='style=\'color:rgb(255, 0, 0)\'' : '';
                        ?>
                        <li>
                        <span class="fl">
                            <b><a class="class_lk" href="<?=$cate[$v['bankuai']]?>" target="_blank" rel="external nofollow">[<?=$v['bankuai']?>]</a></b>
                            <?php if($v['title_count'] ) {
                                foreach($v['title_small'] as $vv){
                                    ?>
                                    <a href="<?=$vv['url']?>" target="_blank" ><?=$vv['title']?></a>
                                <?php } }else{
                                ?>
                                <a href="<?=$v['url']?>" target="_blank" <?=$substyle?>><?=$v['title']?></a>
                            <?php } ?>
                        </span>
                            <?php if(!$v['title_count'] ) { ?>
                                <em class="fr"><a href="<?=$v['url']?>" target="_blank" rel="external nofollow"><?=$v['author']?></a></em>
                            <?php } ?>
                        </li>
                        <?php
                    }
                    ?>
                	</ul>
                    <div class="news-tip"><div class="fn-nowrap"><a href="<?=$AM[1]['url']?>" target="_blank"><?=$AM[1]['title']?></a></div></div>
                    <ul class="news_list">
                        <?php
                        foreach($AC2_3 as $k=>$v){
                            $substyle = '';
                            $v['isred'] == '启用' ? $substyle='style=\'color:rgb(255, 0, 0)\'' : '';
                            ?>
                            <li>
                        <span class="fl">
                            <b><a class="class_lk" href="<?=$cate[$v['bankuai']]?>" target="_blank" rel="external nofollow">[<?=$v['bankuai']?>]</a></b>
                            <?php if($v['title_count'] ) {
                                foreach($v['title_small'] as $vv){
                                    ?>
                                    <a href="<?=$vv['url']?>" target="_blank" ><?=$vv['title']?></a>
                                <?php } }else{
                                ?>
                                <a href="<?=$v['url']?>" target="_blank" <?=$substyle?>><?=$v['title']?></a>
                            <?php } ?>
                        </span>
                                <?php if(!$v['title_count'] ) { ?>
                                    <em class="fr"><a href="<?=$v['url']?>" target="_blank" rel="external nofollow"><?=$v['author']?></a></em>
                                <?php } ?>
                        </li>
                            <?php
                        }}
                        ?>
                	</ul>
                    <div class="more-news">
                        <?php if($DH) {$count = count($DH);$i = 1;
                            foreach ($DH as $v){
                                if($i == $count){
                                    ?>
                                    <a target="_blank" href="<?=$v['url']?>" style="border-right:none;"><?=$v['title']?></a>
                                <?php }  else {$i++; ?>
                                    <a target="_blank" href="<?=$v['url']?>"><?=$v['title']?></a>
                                <?php }}}?>
                    </div>
                </div>
            <div class="fr col_260">
                <div class="notice">
                        <ul class="noticeTab clear">
                            <li class="on"><a>公告</a></li>
                            <li><a>规则</a></li>
                            <li><a>版块</a></li>
                            <li><a>公益</a></li>
                        </ul>
                        <div class="noticeCon">
                            <div class="noticeItem">
                                <ul class="clear">
                                    <?php if($GG){
                                        foreach($GG as $v){ ?>
                                            <li class="fn-nowrap"><a href="<?=$v['url']?>" style="<?=$v['title_style']?>" target="_blank"><?=$v['title']?></a></li>
                                        <?php }} ?>
                                </ul>
                            </div>
                            <div class="noticeItem">
                                <ul class="clear">
                                    <?php if($GZ){
                                        foreach($GZ as $v){ ?>
                                            <li class="fn-nowrap"><a href="<?=$v['url']?>" style="<?=$v['title_style']?>" target="_blank"><?=$v['title']?></a></li>
                                        <?php }} ?>
                                </ul>
                            </div>
                            <div class="noticeItem">
                                <ul class="clear">
                                    <?php if($BK){
                                        foreach($BK as $v){ ?>
                                            <li class="fn-nowrap"><a href="<?=$v['url']?>" style="<?=$v['title_style']?>" target="_blank"><?=$v['title']?></a></li>
                                        <?php }} ?>
                                </ul>
                            </div>
                            <div class="noticeItem">
                                <ul class="clear">
                                    <?php if($GY){
                                        foreach($GY as $v){ ?>
                                            <li class="fn-nowrap"><a href="<?=$v['url']?>" style="<?=$v['title_style']?>" target="_blank"><?=$v['title']?></a></li>
                                        <?php }} ?>
                                </ul>
                            </div>
                        </div>
                    </div>

                <!--登录框-->
                <div >
                  <script src="http://bbs.zz.xmfish.com/lgs.php?t=<?=time()?>" type="text/javascript" charset="gbk"></script>
                </div>
                <!--登录框结束-->

                <div>
                    <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1404.js" charset="utf-8"></script>
                </div>

                <!--YUYU喜爱的活动-->
                <div class="mt10 yuyu_huodong">
                    <div class="yuyu_huodong_hd clear">
                       <div class="yuyu_huodong_tt fl"><a href="" target="_blank">活动<b>看台&raquo;</b></a></div>
                    </div>
                    <div class="yuyu_huodong_bd mt10">
                        <div class="yuyu_huodong_focus" id="huodong_slider">
                            <div class="yuyu_huodong_con">
                                <ul class="clear">
                                    <?php if(is_array($AL2)){foreach ($AL2 as $k=>$v){ ?>
                                        <li><a href="<?=$v['url']?>" target="_blank"><img src="<?=$v['img']?>" alt=""></a></li>
                                    <?php }}?>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!--YUYU喜爱的活动结束-->

                <div class="mt10 hotScan">
                        <div class="hotScan_hd clear">
                            <div class="hotScan_tt fl"><a>热门<b>点击&raquo;</b></a></div>
                            <div class="new-news fr">
                                <div class="rv_bulletin_tx">
                                    <div id="notice" style="overflow:hidden;height:24px;">
                                        <ul>
                                            <?php if(is_array($AL4)){
                                                foreach($AL4 as $k=>$v)
                                                {
                                                    ?>
                                                    <li><a href="<?=$v['url'] ?>" target="_blank" ><?=$v['title'] ?></a></li>
                                                    <?php
                                                }}
                                            ?>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hotScan_bd clear mt10">
                            <?php if($hot){ ?>
                                <dl>
                                <dd class="hotScan_top1 fn-nowrap"><i></i><a href="<?=$hot[0]['url']?>" target="_blank" title="<?=$hot[0]['title'] ?>"><?=$hot[0]['title']?> </a></dd>
                                <dd class="hotScan_top2 fn-nowrap"><i></i><a href="<?=$hot[1]['url']?>" target="_blank" title="<?=$hot[1]['title'] ?>"><?=$hot[1]['title']?></a></dd>
                                <dd class="hotScan_top3 fn-nowrap"><i></i><a href="<?=$hot[2]['url']?>" target="_blank" title="<?=$hot[2]['title'] ?>"><?=$hot[2]['title']?></a></dd>
                                    <?php for($i=3; $i<14;$i++){?>
                                        <dd class="fn-nowrap"><i></i><a href="<?=$hot[$i]['url']?>" target="_blank" title="<?=$hot[$i]['title'] ?>"><?=$hot[$i]['title']?></a></dd>
                                    <?php }?>
                            </dl>
                            <?php }?>
                        </div>
                    </div>

                <div class="mt10">
                    <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1457.js" charset="utf-8"></script>
                </div>

            </div>
        </div>

        <div id="s-preferential" class="mt20">
            <script charset="utf-8" src="http://cmm.xmfish.com/bshw/398.js" type="text/javascript"></script>
        </div>

        <div id="s-recreation" class="mt20">
           <script type="text/javascript" src="http://cmm.xmfish.com/bshw/399.js" charset="utf-8"></script>
        </div>
        <!--吃喝玩乐上4小banner-->
        <div class="mt20 a_ppo_4_231">
           <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1455.js" charset="utf-8"></script>
        </div>

        <!--吃喝玩乐开始-->
        <div class="mt20 public_panel">
            <div class="panel_hd clear">
                <h3 class="panel_title fl">吃货美食</h3>
                <ul class="panel_cate mt5 fl">
                    <li>
                        <a href="http://bbs.zz.xmfish.com/thread-htm-fid-33-type-456-type-559.html#tabA" target="_blank">我要咨询</a>
                        <span class="opr_line">|</span>
                    </li>
                    <li>
                        <a href="http://bbs.zz.xmfish.com/thread-htm-fid-33-type-5-type-456.html#tabA" target="_blank">下厨房</a>
                        <span class="opr_line">|</span>
                    </li>
                    <li>
                        <a href="http://bbs.zz.xmfish.com/thread-htm-fid-33-type-5-type-5.html#tabA" target="_blank">美食情报</a>
                        <span class="opr_line">|</span>
                    </li>
                    <li>
                        <a href="http://bbs.zz.xmfish.com/thread-htm-fid-33-type-6.html" target="_blank">美食DIY</a>
                        <span class="opr_line">|</span>
                    </li>
                    <li>
                        <a href="http://bbs.zz.xmfish.com/thread-htm-fid-322.html" target="_blank">小鱼卡</a>
                    </li>
                </ul>
                <span class="fr mt8"><a href="http://bbs.zz.xmfish.com/thread-htm-fid-322.html" target="_blank">美食休闲商家商务合作请点击&gt;&gt;</a></span>
            </div>
            <div class="block-recreation clear " style="margin-bottom:20px;">
                    <div class="eat-tab fl">
                        <dl>
                            <dd class="cur"><a href="javascript:void(0)">小鱼卡<i></i></a></dd>
                            <dd><a href="javascript:void(0)">呷虾米<i></i></a></dd>
                            <dd><a href="javascript:void(0)">下厨房<i></i></a></dd>
                        </dl>
                    </div>
                    <div class="eat-con fl">
                        <ul class="clear">
                            <?php
                            if(is_array($food_wzk)) {
                                $left = array_slice($food_wzk,0,2);
                                $middle = array_slice($food_wzk,2,1);
                                $right = array_slice($food_wzk,3,2);
                                ?>
                                <li>
                                    <?php
                                    foreach ($left as $item) {
                                        ?>
                                        <a target="_blank" href="<?php echo $item['url'] ?>"><img alt="<?php echo $item['title'] ?>" class="lazy" data-original="<?php echo $item['img'] ?>"><p><?php echo $item['title'] ?></p></a>
                                        <?php
                                    }
                                    ?>
                                </li>
                                <li class="eat-con-li">
                                    <?php
                                    foreach ($middle as $item) {
                                        ?>
                                        <a target="_blank" href="<?php echo $item['url'] ?>"><img alt="<?php echo $item['title'] ?>" class="lazy" data-original="<?php echo $item['img'] ?>"><p><?php echo $item['title'] ?></p></a>
                                        <?php
                                    }
                                    ?>
                                </li>
                                <li>
                                    <?php
                                    foreach ($right as $item) {
                                        ?>
                                        <a target="_blank" href="<?php echo $item['url'] ?>"><img alt="<?php echo $item['title'] ?>" class="lazy" data-original="<?php echo $item['img'] ?>"><p><?php echo $item['title'] ?></p></a>
                                        <?php
                                    }
                                    ?>
                                </li>
                                <?php
                            }
                            ?>
                        </ul>
                        <ul>
                            <?php
                            if(is_array($food_jxm)) {
                                $left = array_slice($food_jxm,0,2);
                                $middle = array_slice($food_jxm,2,1);
                                $right = array_slice($food_jxm,3,2);
                                ?>
                                <li>
                                <?php
                                foreach ($left as $item) {
                                    ?>
                                    <a target="_blank" href="<?php echo $item['url'] ?>"><img alt="<?php echo $item['title'] ?>" class="lazy" data-original="<?php echo $item['img'] ?>"><p><?php echo $item['title'] ?></p></a>
                                    <?php
                                }
                                ?>
                            </li>
                                <li class="eat-con-li">
                                <?php
                                foreach ($middle as $item) {
                                    ?>
                                    <a target="_blank" href="<?php echo $item['url'] ?>"><img alt="<?php echo $item['title'] ?>" class="lazy" data-original="<?php echo $item['img'] ?>"><p><?php echo $item['title'] ?></p></a>
                                    <?php
                                }
                                ?>
                            </li>
                                <li>
                                <?php
                                foreach ($right as $item) {
                                    ?>
                                    <a target="_blank" href="<?php echo $item['url'] ?>"><img alt="<?php echo $item['title'] ?>" class="lazy" data-original="<?php echo $item['img'] ?>"><p><?php echo $item['title'] ?></p></a>
                                    <?php
                                }
                                ?>
                            </li>
                                <?php
                            }
                            ?>
                        </ul>
                        <ul>
                            <?php
                            if(is_array($food_xcf)) {
                                $left = array_slice($food_xcf,0,2);
                                $middle = array_slice($food_xcf,2,1);
                                $right = array_slice($food_xcf,3,2);
                                ?>
                                <li>
                                    <?php
                                    foreach ($left as $item) {
                                        ?>
                                        <a target="_blank" href="<?php echo $item['url'] ?>"><img alt="<?php echo $item['title'] ?>" class="lazy" data-original="<?php echo $item['img'] ?>"><p><?php echo $item['title'] ?></p></a>
                                        <?php
                                    }
                                    ?>
                                </li>
                                <li class="eat-con-li">
                                    <?php
                                    foreach ($middle as $item) {
                                        ?>
                                        <a target="_blank" href="<?php echo $item['url'] ?>"><img alt="<?php echo $item['title'] ?>" class="lazy" data-original="<?php echo $item['img'] ?>"><p><?php echo $item['title'] ?></p></a>
                                        <?php
                                    }
                                    ?>
                                </li>
                                <li>
                                    <?php
                                    foreach ($right as $item) {
                                        ?>
                                        <a target="_blank" href="<?php echo $item['url'] ?>"><img alt="<?php echo $item['title'] ?>" class="lazy" data-original="<?php echo $item['img'] ?>"><p><?php echo $item['title'] ?></p></a>
                                        <?php
                                    }
                                    ?>
                                </li>
                                <?php
                            }
                            ?>
                        </ul>

                    </div>
                </div>
        </div>
        <!--吃喝玩乐结束-->

        <div id="s-recreation" class="mt20">
           <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1081.js" charset="utf-8"></script>
        </div>

        <!--房产楼市开始-->
        <div class="mt20 public_panel">
            <div class="panel_hd clear">
                <h3 class="panel_title fl"><a href="#" target="_blank">房产楼市</a></h3>
                <ul class="panel_cate mt5 fl">
                    <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-141.html" target="_blank">房产论坛</a><span class="opr_line">|</span></li>
                    <li><a href="http://fangzi.zz.xmfish.com/web/buildings_blist.html" target="_blank">新房楼盘</a><span class="opr_line">|</span></li>
                    <li><a href="http://fangzi.zz.xmfish.com/web/sell2.html" target="_blank">二手房</a><span class="opr_line">|</span></li>
                    <li><a href="http://fangzi.zz.xmfish.com/web/search_hire.html" target="_blank">房屋租赁</a><span class="opr_line">|</span></li>
                    <li><a href="http://fangzi.zz.xmfish.com/web/tuan/line.html" target="_blank">品房团</a></li>
                </ul>
                <a href="http://fangzi.zz.xmfish.com/web/tuan/line.html" class="fr mt8 panel_more" target="_blank">找房找优惠，请点击&gt;&gt;</a>
            </div>
            <div>
                    <div class="block-house clear">
                        <div class="fl col_730">
                        	<div class="clear">
                                <div class="fl">
                                    <!--导读幻灯-->
                                    <div id="house_slider" onmouseover="jQuery('#house_slider').find('.prev,.next').css('display','block');" onmouseout="jQuery('#house_slider').find('.prev,.next').css('display','none');">
                                        <div class="slides_container">
                                            <?php if(is_array($EL1)){foreach($EL1 as $k=>$v){ ?>
                                                <div class="pic_pin">
                                                <a href="<?php echo $v['url']?>" target="_blank" title="<?php echo $v['title']?>">
                                                 <img class="lazy" data-original="<?php echo $v['img']?>" width="340" height="240" border="0" alt="<?php echo $v['title']?>">
                                                 <h5 class="pic_tt"><span class="pic_info fn-nowrap"><?php echo $v['title']?></span></h5>
                                                </a>
                                             </div>
                                            <?php  } }  ?>
                                        </div>
                                        <a class="prev" href="javascript:void(0);"><</a>
                                        <a class="next" href="javascript:void(0);">></a>
                                    </div>
                                    <!--导读幻灯结束-->
                                </div>
                                <div class="fl block-house-news ml20">
                                	<?php if(is_array($EC1)){foreach($EC1 as $k=>$v){ $v['title_style'] = str_ireplace('font-weight:normal;','',$v['title_style']); ?>
                                        <div class="news-title fn-nowrap"><a href="<?php echo $v['url']?>" target="_blank"><?php echo $v['title']?></a></div>
                                        <p class="news-cnt"><?php echo $v['content']?></p>
                                    <?php  } }  ?>
                                </div>
                            </div>
                            <div class="block-house-img">
                            	<div class="clear">
                                	<h4 class="fl sh_housing_tt">新房推荐</h4>
                                    <a class="fr sh_housing_more" href="http://fangzi.xmfish.com/web/sell2.html" target="_blank">更多&gt;&gt;</a>
                                </div>
                                <div id="house_act_con" style="position:relative;width:680px;overflow:hidden;">
                                    <ul class="fl clear">
                                    <?php if(is_array($esftj)) {foreach($esftj as $item) {?>
                                        <li class="fl">
                                            <a href="<?php echo $item['url']?>" target="_blank"><img class="lazy" data-original="<?php echo $item['img']?>" alt="<?php echo $item['title']?>" width="155" height="140"></a>
                                            <div class="txt-wrap fn-nowrap"><a href="<?php echo $item['url']?>" class="txt-cnt" target="_blank"><?php echo $item['title']?></a></div>
                                            <div class="sh_housing_info clear">
                                                <div class="fl sh_housing_price"><?php echo $item['price']?></div>
                                                <div class="fr sh_housing_area fn-nowrap"><?php echo $item['area']?></div>
                                            </div>
                                        </li>
                                    <?php }} ?>
                                    </ul>
                                </div>
                                <a href="javascript:void(0);" class="sw-pre" id="house_LeftArr" title="上一页"><span class="ulib-arrow-wrap"></span></a>
                                <div class="sw-nextbg"><a href="javascript:void(0);" class="sw-next" id="house_RightArr" title="下一页"><span class="ulib-arrow-wrap"></span></a></div>
                            </div>
                        </div>
                        <div class="fr col_240 bd_lf pl19" style="height:460px;">
                            <h4 class="rg_tt">网上房展</h4>
                            <dl class="area-panel bg_eee clear">
                                <dt class="fl">
                                    <span><a href="http://fangzi.zzfish.cn/web/buildings_blist.html?area=59601" target="_blank">芗城</a></span>
                                </dt>
                                <dd class="fl">
                                	<div class="area-con">
                                            <?php if(is_array($zfdn)) {foreach($zfdn as $item) {?>
                                                <a target="_blank" href="<?php echo $item['url']?>"><?php echo $item['title']?></a>
                                            <?php }}?>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="area-panel clear">
                                <dt class="fl">
                                    <span><a href="http://fangzi.zzfish.cn/web/buildings_blist.html?area=59602" target="_blank">龙文</a></span>
                                </dt>
                                <dd class="fl">
                                	<div class="area-con">
                                    <?php if(is_array($zfhc)) {foreach($zfhc as $item) {?>
                                        <a target="_blank" href="<?php echo $item['url']?>"><?php echo $item['title']?></a>
                                    <?php }}?>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="area-panel bg_eee clear">
                                <dt class="fl">
                                    <span><a href="http://fangzi.zzfish.cn/web/buildings_blist.html?area=59603" target="_blank">角美</a></span>
                                </dt>
                                <dd class="fl">
                                	<div class="area-con">
                                            <?php if(is_array($zfjm)) {foreach($zfjm as $item) {?>
                                                <a target="_blank" href="<?php echo $item['url']?>"><?php echo $item['title']?></a>
                                            <?php }}?>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="area-panel clear">
                                <dt class="fl">
                                    <span style="line-height:14px;font-size:12px;"><a href="http://fangzi.zzfish.cn/web/buildings_blist.html?area=59604" target="_blank" >漳州港</a></span>
                                </dt>
                                <dd class="fl">
                                	<div class="area-con">
                                        <?php if(is_array($zfxa)) {foreach($zfxa as $item) {?>
                                            <a target="_blank" href="<?php echo $item['url']?>"><?php echo $item['title']?></a>
                                        <?php }}?>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="area-panel bg_eee clear">
                                <dt class="fl">
                                    <span><a href="http://fangzi.zzfish.cn/web/buildings_blist.html?area=59605" target="_blank">龙海</a></span>
                                </dt>
                                <dd class="fl">
                                	<div class="area-con">
                                            <?php if(is_array($zfta)) {foreach($zfta as $item) {?>
                                                <a target="_blank" href="<?php echo $item['url']?>"><?php echo $item['title']?></a>
                                            <?php }}?>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="area-panel clear">
                                <dt class="fl">
                                    <span><a href="http://fangzi.zzfish.cn/web/buildings_blist.html?area=59606" target="_blank">漳浦</a></span>
                                </dt>
                                <dd class="fl">
                                	<div class="area-con">
                                            <?php  if(is_array($zfzz)) {foreach($zfzz as $item) { ?>
                                                <a target="_blank" href="<?php echo $item['url']?>"><?php echo $item['title']?></a>
                                            <?php }}?>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="area-panel bg_eee clear">
                                <dt class="fl">
                                    <span><a href="http://fangzi.zzfish.cn/web/buildings_blist.html?area=59610" target="_blank">南靖</a></span>
                                </dt>
                                <dd class="fl">
                                	<div class="area-con">
                                            <?php  if(is_array($zfnj)) {foreach($zfnj as $item) { ?>
                                                <a target="_blank" href="<?php echo $item['url']?>"><?php echo $item['title']?></a>
                                            <?php }}?>
                                    </div>
                                </dd>
                            </dl>
                            <!--<div class="house-join" title="小鱼看房团"><a href="http://fangzi.xmfish.com/web/tuan/line.html" target="_blank" class="join-btn ulib-btn-b">我要加入</a></div>-->
                        </div>
                    </div>

                </div>
        </div>
        <!--房产楼市结束-->

        <div id="s-recreation" class="mt20">
           <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1082.js" charset="utf-8"></script>
        </div>

        <!--家居装饰开始-->
        <div class="mt20 public_panel">
            <div class="panel_hd clear">
                <h3 class="panel_title fl"><a href="http://jiaju.zz.xmfish.com/" target="_blank">家居装饰</a></h3>
                <ul class="panel_cate mt5 fl">
                    <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-312.html" target="_blank">家装课堂</a><span class="opr_line">|</span></li>
                    <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-38-type-1724.html#tabA" target="_blank">装修日记</a><span class="opr_line">|</span></li>
                    <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-38-type-1087-type-664.html#tabA" target="_blank">家装互助</a><span class="opr_line">|</span></li>
                    <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-38-type-1724-type-1087.html#tabA" target="_blank">维权吐槽</a><span class="opr_line">|</span></li>
                    <li><a href="http://jiaju.xiaoyu.com/home/4718/activity" target="_blank">优惠活动</a></li>
                </ul>
                <a href="http://jiaju.xiaoyu.com/home/4718/activity" class="fr mt8 panel_more" target="_blank">优惠活动正在进行中，请点击&gt;&gt;</a>
            </div>
            <div>

            <div class="block-house clear">
                <div class="fl">
                            <!--导读幻灯-->
                            <div id="home_slider" onmouseover="jQuery('#home_slider').find('.prev,.next').css('display','block');" onmouseout="jQuery('#home_slider').find('.prev,.next').css('display','none');">
                                <div class="slides_container">
                                	<?php if(is_array($jzimg)) { foreach($jzimg as $item) { ?>
                                        <div class="pic_pin">
                                        <a href="<?php echo $item['url']?>" target="_blank" title="<?php echo $item['title']?>">
                                         <img class="lazy" data-original="<?php echo $item['img']?>" width="340" height="240" border="0" alt="<?php echo $item['title']?>">
                                         <h5 class="pic_tt"><span class="pic_info fn-nowrap"><?php echo $item['title']?></span></h5>
                                        </a>
                                    </div>
                                    <?php }}?>
                                </div>
                                <a class="prev" href="javascript:void(0);" style="display: none;">&lt;</a>
                                <a class="next" href="javascript:void(0);" style="display: none;">&gt;</a>
                            </div>
                    <!--导读幻灯结束-->
                        </div>
                        <div class="fl block-house-news ml20">
                            <?php  if(is_array($jztl)) { foreach($jztl as $item) { $item['title_style'] = str_ireplace('font-weight:normal;','',$item['title_style']);?>
                                <div class="news-title fn-nowrap"><a href="<?php echo $item['url']?>" target="_blank"><?php echo $item['title']?></a></div>
                                <p class="news-cnt"><?php echo $item['content']?></p>
                            <?php }}?>
                        </div>
                <div class="fr col_240 bd_lf pl19" style="height:240px;">
                    <h4 class="rg_tt">免费获取</h4>
                    <dl class="home_plan pb15 bd_dt">
                        <dt class="clear">
                        <h5 class="fl">户型设计预算方案</h5>
                        <span class="fr home_plan_num">已有<b><?php echo $MC6 ?></b>人成功申请</span>
                        </dt>
                        <form id="step1">
                        <dd>
                            <input class="home_plan_tx" type="text" placeholder="业主姓名" name="name" id="home_name"/>
                        </dd>
                        <dd>
                            <input class="home_plan_tx" type="text" placeholder="手机号码" name="tel" id="home_tel"/>
                        </dd>
                        <dd>
                            <input class="home_plan_tx" type="text" placeholder="小区名称" name="loupan" id="home_loupan"/>
                        </dd>
                        <dd>
                            <span class="home_plan_tx">客服电话：2967928</span>
                            <button class="home_plan_btn yahei"onclick="apply_jiaju();" type="button">申请</button>
                        </dd>
                        </form>
                        </dd>
                    </dl>
                </div>
            </div>

            <div class="block-home-img">
                <div id="home_act_con" style="position:relative;width:980px;overflow:hidden;">
                    <ul class="fl clear">
                        <?php if(is_array($EF1)){  foreach($EF1 as $k=>$v){?>
                            <li class="fl">
                        <a href="<?php echo $v['url']?>" target="_blank"><img class="lazy" data-original="<?php echo $v['img']?>" alt="<?php echo $v['title']?>" width="225" height="160"></a>
                        <div class="txt-wrap"><a href="<?php echo $v['url']?>" class="txt-cnt" target="_blank"><?php echo $v['title']?></a></div>
                        </li>
                        <?php  } }  ?>
                    </ul>
                </div>
                <a href="javascript:void(0);" class="sw-pre" id="home_LeftArr" title="上一页"><span class="ulib-arrow-wrap"></span></a>
                <div class="sw-nextbg"><a href="javascript:void(0);" class="sw-next" id="home_RightArr" title="下一页"><span class="ulib-arrow-wrap"></span></a></div>
             </div>

            </div>
        </div>
        <!--家居装饰结束-->

        <div id="s-recreation" class="mt20">
           <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1083.js" charset="utf-8"></script>
        </div>

        <!--结婚大事开始-->
        <div class="mt20 public_panel" style="display: none">
            <div class="panel_hd clear">
                <h3 class="panel_title fl"><a href="http://marry.xmfish.com/" target="_blank">小鱼婚嫁</a></h3>
                <ul class="panel_cate mt5 fl">
                    <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-50.html" target="_blank">征婚交友</a><span class="opr_line">|</span></li>
                    <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-50.html" target="_blank">相亲活动</a><span class="opr_line">|</span></li>
                    <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-166-type-110.html#tabA" target="_blank">幸福婚纱</a><span class="opr_line">|</span></li>
                    <li><a href="http://bbs.zz.xmfish.com/thread-htm-fid-29.html" target="_blank">婚姻生活</a></li>
                </ul>
                <!--<a href="http://marry.xmfish.com/bid/" class="fr mt8 panel_more" target="_blank">免费申请结婚宝，请点击&gt;&gt;</a>-->
            </div>
            <div class="block-recreation clear">
                <div class="fl co" style="width:730px;overflow:hidden;">
                    <ul class="wedding-ppreciate clear">
                        <?php if(is_array($FC2)){foreach($FC2 as $k=>$v){?>
                            <li>
                            <span class="wedding-pic"><a href="<?php echo $v['url']?>" target="_blank"><img class="lazy" data-original="<?php echo $v['img']?>" width="227" height="360" alt="<?php echo $v['title']?>"></a></span>
                            <div class="txt-wrap fn-nowrap"><a href="<?php echo $v['url']?>" class="txt-cnt" target="_blank"><?php echo $v['title']?></a></div>
                        </li>
                        <?php }}?>
                    </ul>
                </div>
                <div class="fr col_240 bd_lf pl19" style="height:360px;overflow:hidden;">
                    <h4 class="rg_tt">征婚交友</h4>
                    <div class="mt10 hotScan">
                        <div class="hotScan_bd clear mt10">
                            <?php if($hot_marry){ ?>
                                <dl>
                                <?php foreach ($hot_marry as $v){?>
                                    <dd class="fn-nowrap"><i></i><a href="<?=$v['url']?>" target="_blank" title="<?=$v['title'] ?>"><?=$v['title']?></a></dd>
                                <?php }?>
                            </dl>
                            <?php }?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt20 block-love-img">
                    <ul class="clear">
                        <?php if(is_array($FF1)){ foreach($FF1 as $k=>$v){ ?>
                            <li class="fl">
                        <a href="<?php echo $v['url']?>" target="_blank"><img class="lazy" data-original="<?php echo $v['img']?>" alt="<?php echo $v['title']?>" width="235" height="160"></a>
                        <div class="txt-wrap fn-nowrap"><a href="<?php echo $v['url']?>" class="txt-cnt" target="_blank"><?php echo $v['title']?></a></div>
                        </li>
                        <?php  } }  ?>
                    </ul>
            </div>

        </div>
        <!--结婚大事结束-->

        <div id="s-car" class="mt20">
            <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1492.js" charset="utf-8"></script>
        </div>

        <!--小鱼汽车-->
        <div class="mt20 public_panel">
            <div class="panel_hd clear">
                <h3 class="panel_title fl"><a href="http://auto.zz.xmfish.com" target="_blank">小鱼汽车</a></h3>
                <ul class="panel_cate mt5 fl">
                    <?if($AUTO_LABEL&&is_array($AUTO_LABEL)){
                        $auto_label_length = count($AUTO_LABEL)-1;
                        foreach ($AUTO_LABEL as $key => $value){
                            ?>
                        <li>
                            <a href="<?=$value['url']?>" target="_blank" title="<?=$value['title']?>">
                                <?=$value['title']?>
                            </a>
                            <?=$auto_label_length > $key ?  '<span class="opr_line">|</span>' : '' ?>
                        </li>
                    <?}}?>
                </ul>
                <a href="http://bbs.zz.xmfish.com/thread-htm-fid-156-type-95-type-90.html#tabA" class="fr mt8 panel_more" target="_blank">一个城市 一只车标 免费领取小鱼车标 享优惠&gt;&gt;</a>
            </div>
            <div>

                <div class="block-car clear">
                     <div class="fl">
                        <!--导读幻灯-->
                        <div id="car_slider" onmouseover="jQuery('#car_slider').find('.prev,.next').css('display','block');" onmouseout="jQuery('#car_slider').find('.prev,.next').css('display','none');">
                            <div class="slides_container">
                                <?php if(is_array($GL1)){foreach($GL1 as $k=>$v){?>
                                    <div class="pic_pin">
                                            <a href="<?php echo $v['url']?>" target="_blank" title="<?php echo $v['title']?>">
                                                <img class="lazy" data-original="<?php echo $v['img']?>" width="300" height="390" border="0" alt="<?php echo $v['title']?>">
                                                <h5 class="pic_tt"><span class="pic_info fn-nowrap"><?php echo $v['title']?></span></h5>
                                            </a>
                                        </div>
                                <?php  } }  ?>
                            </div>
                            <a class="prev" href="javascript:void(0);" style="display: none;">&lt;</a>
                            <a class="next" href="javascript:void(0);" style="display: none;">&gt;</a>
                        </div>
                         <!--导读幻灯结束-->
                    </div>
            <div class="fr" style="width:680px;">
            <div class="clear">
                    <div class="fl block-car-news mr20">
                    <?php if($GC1){foreach($GC1 as $item) { ?>
                        <div class="news-title fn-nowrap"><a href="<?php echo $item['url'] ?>" target="_blank"><?php echo $item['title'] ?></a></div>
                        <p class="news-cnt"><?php echo $item['content'] ?><a class="view-detailed" href="<?php echo $item['url'] ?>" target="_blank" rel="external nofollow">[详细]</a></p>
                    <?php }}?>
                        <ul class="clear news_list">
                        <?php if($GF1){ foreach($GF1 as $item) { ?>
                            <li><a href="<?php echo $item['url'] ?>" target="_blank"><?php echo $item['title'] ?></a></li>
                        <?php } }?>
                    </ul>
                </div>
                    <div class="fr col_240 bd_lf pl19" style="height:250px;">
                    <h4 class="rg_tt">预约试驾</h4>
                    <dl class="car_plan">
                        <dt>现在登记<span>购车意向</span>，有更多优惠哦</dt>
                        <dd class="clear">
                        <input class="fl car_plan_tx input_name" id="car_name" maxlength="10" type="text" value="填写您的姓名">
                            <span class="fr car_sex">
                                <label><input name='car_sex' type="radio" value="m" checked/>先生</label>
                                <label><input name='car_sex' type="radio" value="f" />小姐</label>
                            </span>
                        </dd>
                        <dd class="clear">
                            <input class="fl car_plan_tx input_tel" id="car_tel" type="text" maxlength="13" value="填写您的手机号码">
                            <select class="fr car_sl" name="brand" id="brand" onchange="brandCx(this.value)">
                                <option value="0" selected>意向品牌</option>
                                <option value="27">A 阿斯顿·马丁</option>
                                <option value="4191">B BRABUS巴博斯</option>
                                <option value="4235">B 北京汽车</option>
                                <option value="1531">B 宝骏</option>
                                <option value="40">B 布嘉迪</option>
                                <option value="39">B 宾利</option>
                                <option value="38">B 保时捷</option>
                                <option value="37">B 北汽</option>
                                <option value="36">B 奔腾</option>
                                <option value="35">B 标致</option>
                                <option value="34">B 奔驰</option>
                                <option value="33">B 宝马</option>
                                <option value="32">B 比亚迪</option>
                                <option value="31">B 别克</option>
                                <option value="30">B 本田</option>
                                <option value="4014">C 长安(商用车)</option>
                                <option value="138">C 川汽野马</option>
                                <option value="45">C 长丰</option>
                                <option value="43">C 长安(轿车)</option>
                                <option value="42">C 长城</option>
                                <option value="46">C 昌河</option>
                                <option value="47">D 大众</option>
                                <option value="4241">D DS</option>
                                <option value="48">D 东南</option>
                                <option value="49">D 帝豪</option>
                                <option value="50">D 东风</option>
                                <option value="51">D 东风风神</option>
                                <option value="52">D 道奇</option>
                                <option value="56">F 法拉利</option>
                                <option value="4375">F Fisker</option>
                                <option value="54">F 丰田</option>
                                <option value="60">F 福迪</option>
                                <option value="59">F 菲亚特</option>
                                <option value="55">F 福特</option>
                                <option value="57">F 风行</option>
                                <option value="58">F 福田</option>
                                <option value="1534">G 广汽传祺</option>
                                <option value="63">G 光冈</option>
                                <option value="62">G GMC</option>
                                <option value="4206">H 海格</option>
                                <option value="1537">H 黄海</option>
                                <option value="4239">H 恒天</option>
                                <option value="68">H 海马(商用车)</option>
                                <option value="65">H 海马</option>
                                <option value="66">H 哈飞</option>
                                <option value="67">H 悍马</option>
                                <option value="76">H 华泰</option>
                                <option value="70">H 红旗</option>
                                <option value="77">J 吉普</option>
                                <option value="74">J 江淮</option>
                                <option value="80">J 捷豹</option>
                                <option value="75">J 吉利</option>
                                <option value="4209">J 九龙</option>
                                <option value="78">J 金杯</option>
                                <option value="4383">J 金旅</option>
                                <option value="79">J 江铃</option>
                                <option value="82">J 吉奥</option>
                                <option value="85">K 凯迪拉克</option>
                                <option value="87">K 柯尼赛格</option>
                                <option value="1555">K 开瑞</option>
                                <option value="88">K 克莱斯勒</option>
                                <option value="4221">K 卡尔森</option>
                                <option value="866">L 路特斯</option>
                                <option value="4090">L 劳伦士</option>
                                <option value="89">L 铃木</option>
                                <option value="90">L 路虎</option>
                                <option value="96">L 莲花</option>
                                <option value="91">L 雷克萨斯</option>
                                <option value="92">L 兰博基尼</option>
                                <option value="93">L 力帆</option>
                                <option value="94">L 陆风</option>
                                <option value="97">L 雷诺</option>
                                <option value="95">L 劳斯莱斯</option>
                                <option value="98">L 林肯</option>
                                <option value="4381">M 迈凯伦</option>
                                <option value="4218">M MAXUS大通</option>
                                <option value="100">M 马自达</option>
                                <option value="101">M MG</option>
                                <option value="102">M MINI</option>
                                <option value="103">M 迈巴赫</option>
                                <option value="104">M 玛莎拉蒂</option>
                                <option value="106">N 纳智捷</option>
                                <option value="108">O 欧宝</option>
                                <option value="107">O 讴歌</option>
                                <option value="4237">O 欧朗</option>
                                <option value="111">Q 全球鹰</option>
                                <option value="109">Q 奇瑞</option>
                                <option value="110">Q 起亚</option>
                                <option value="4184">Q 启辰</option>
                                <option value="115">R 瑞麒</option>
                                <option value="113">R 日产</option>
                                <option value="114">R 荣威</option>
                                <option value="4359">R 如虎</option>
                                <option value="4203">S 陕汽通家</option>
                                <option value="4382">S 绅宝</option>
                                <option value="1556">S Smart</option>
                                <option value="4238">S 思铭</option>
                                <option value="116">S 斯柯达</option>
                                <option value="117">S 三菱</option>
                                <option value="123">S 世爵</option>
                                <option value="118">S 斯巴鲁</option>
                                <option value="119">S 双龙</option>
                                <option value="120">S 双环</option>
                                <option value="4240">W 五十铃</option>
                                <option value="127">W 威麟</option>
                                <option value="126">W 沃尔沃</option>
                                <option value="4087">W 威兹曼</option>
                                <option value="4194">W 威旺</option>
                                <option value="125">W 五菱</option>
                                <option value="4427">X 新凯</option>
                                <option value="129">X 雪佛兰</option>
                                <option value="4236">X 西雅特</option>
                                <option value="128">X 现代</option>
                                <option value="130">X 雪铁龙</option>
                                <option value="134">Y 一汽</option>
                                <option value="135">Y 永源</option>
                                <option value="136">Y 英菲尼迪</option>
                                <option value="137">Y 英伦</option>
                                <option value="1238">Y 依维柯</option>
                                <option value="142">Z 众泰</option>
                                <option value="143">Z 中兴</option>
                                <option value="1239">Z 中华</option>
                            </select>
                        </dd>
                        <dd class="clear">
                            <select class="fl car_sl" name="cx" id="cx">
                                <option value="">意向车型</option>
                            </select>
                            <button class="fr car_plan_btn yahei" id="car_up">立即登记</button>
                        </dd>
                    </dl>
                    <div class="mt20">
                        <?if($AUTO_AD){foreach ($AUTO_AD as $value){?>
                            <a class="car_calculator" href="<?=$value['url']?>" target="_blank">
                                <img style="width: 240px;height: 48px;" src="<?=$value['img']?>" />
                            </a>
                        <?}}?>
                    </div>
                </div>
                </div>
                 <div class="mt20">

                <div class="mt20">

                <div class="fr">
                    <dl class="car_businesses">
                        <dt class="fl"><span>网上4S店</span></dt>
                        <dd class="fr">
                            <a class="prev" href="javascript:void(0);"><i></i></a>
                            <a class="next" href="javascript:void(0);"><i></i></a>
                            <div id="car_act_con" style="width:600px; overflow:hidden;">
                                <ul class="car_businesses_list">
                                    <?php $j = 0; for($i = 0; $i<ceil(count($GF2)/3); $i++) { ?>
                                        <li>
                                            <dl>
                                                <?php  while($item = $GF2[$j]){ ?>
                                                    <dd class="car_businesses_item">
                                                     <span class="fl car_businesses_logo">											<a href="<?php echo $item['url']?>" target="_blank" rel="external nofollow">
                                                            <img class="lazy" data-original="<?php echo $item['img'] ?>" alt="<?php echo $item['title'] ?>" width="38" height="38">
                                                            </a>
                                                      </span>
                                                    <span class="fl car_businesses_tx">
                                                        <span class="car_businesses_info fn-nowrap">
                                                                <a href="<?php echo $item['url'] ?>" target="_blank"><?php echo $item['title'] ?></a>
                                                        </span>
                                                        <span class="car_businesses_tel fn-nowrap"><?php echo $item['tel'] ?></span>
                                                    </span>
                                                    </dd>
                                                    <?php $j++;  if($j%3 == 0 || $j == count($GF2)) break; } ?>
                                            </dl>
                                        </li>
                                    <?php }  ?>
                                </ul>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
                </div>
            </div>
            </div>
                </div>
            </div>
        <!--小鱼汽车结束-->
        <div id="s-car" class="mt20">
            <script type="text/javascript" src="http://cmm.xmfish.com/bshw/1493.js" charset="utf-8"></script>
        </div>
        <!--妈咪宝开始-->
        <div class="mt20 public_panel">
            <div class="panel_hd clear">
                <h3 class="panel_title fl">小鱼亲子</h3>
                <ul class="panel_cate mt5 fl">
                    <li>
                        <a href="http://bbs.zz.xmfish.com/thread-htm-fid-64-special-1-type-72.html#tabA" target="_blank">亲子活动</a>
                        <span class="opr_line">|</span>
                    </li>
                    <li>
                        <a href="http://bbs.zz.xmfish.com/thread-htm-fid-64-type-72-type-75.html#tabA" target="_blank">缤纷孕事</a>
                        <span class="opr_line">|</span>
                    </li>
                    <li>
                        <a href="http://bbs.zz.xmfish.com/thread-htm-fid-64-search-all-type-1773.html#tabA" target="_blank">孕婴团购汇</a>
                        <span class="opr_line">|</span>
                    </li>
                    <li>
                        <a href="http://bbs.zz.xmfish.com/thread-htm-fid-64-type-75-type-74.html#tabA"target="_blank">教育培训</a>
                    </li>
                </ul>
                <!--<a href="#" class="fr mt8 panel_more" target="_blank">本地亲子商户申请入驻，请点击&gt;&gt;</a>-->
            </div>
            <div class="block-parent-child clear">
                    <div class="col_730 fl">
                            <div class="clear">
                            <div class="fl col_210">
                                <ul class="pic_w185">
                                	  <?php if(is_array($IL1)){ foreach($IL1 as $k=>$v){$k % 2 == 1 && $cl = "class='mt20'";?>
                                          <li <?php echo $cl?>>
                                        <div class="imgtxt">
                                        <a href="<?php echo $v['url']?>" target="_blank" rel="external nofollow"><img class="lazy" data-original="<?php echo $v['img']?>" alt="<?php echo $v['title']?>" width="210" height="140"></a>
                                        <div class="txt-wrap"><a href="<?php echo $v['url']?>" class="txt-cnt" target="_blank"><?php echo $v['title']?></a></div>
                                        </div>
                                    </li>
                                      <?php  } }  ?>
                                </ul>
                            </div>
                            <div class="fl col_490 ml20">
                            	<?php if(is_array($IC1)){    foreach($IC1 as $k=>$v){ ?>
                                    <div class="imgtxt">
                                    <a href="<?php echo $v['url']?>" target="_blank" rel="external nofollow"><img class="lazy" data-original="<?php echo $v['img']?>" alt="<?php echo $v['title']?>" width="490" height="300"></a>
                                    <div class="txt-wrap"><a href="<?php echo $v['url']?>" class="txt-cnt" target="_blank"><?php echo $v['title']?></a></div>
                                </div>
                                <?php  } }  ?>
                            </div>
                        </div>
                    </div>

                    <div class="fr col_240 bd_lf pl19" style="height:300px;">
                        <h4 class="rg_tt">亲子乐园</h4>
                        <div class="parent-child-news">
                            <dl class="love-review">
                            	<?php if(is_array($IR1)){  foreach($IR1 as $k=>$v){$v['title_style'] = str_ireplace('font-weight:normal;','',$v['title_style']);  ?>
                                    <dt class="fn-nowrap"><a href="<?php echo $v['url']?>" target="_blank"><?php echo $v['title']?></a></dt>
                                    <dd><?php echo $v['content']?><a class="view-detailed" href="<?php echo $v['url']?>" target="_blank">[详细]</a></dd>
                                <?php  } }  ?>
                            </dl>
                            <ul class="love-news">
                            	<?php if(is_array($IR2)){ foreach($IR2 as $k=>$v){ ?>
                                    <li class="fn-nowrap"><b><a class="class_lk" href="<?php echo $cate[$v['bankuai']]?>" target="_blank" rel="external nofollow">[<?php echo $v['bankuai']?>]</a></b><a href="<?php echo $v['url']?>" target="_blank"><?php echo $v['title']?></a></li>
                                <?php  } }  ?>
                            </ul>
                            <ul class="parent-child-shortcut">
                                <li class="fl"><a class="yuer" href="http://bbs.xmfish.com/read-htm-tid-5941929.html" target="_blank"><i></i>育儿宝典</a></li>
                                <li class="fl"><a class="zhun_mom" href="http://bbs.xmfish.com/read-htm-tid-5074099.html" target="_blank"><i></i>准妈妈教室</a></li>
                                <li class="fl"><a class="mom_tool" href="http://bbs.xmfish.com/read-htm-tid-7592695.html" target="_blank"><i></i>妈咪百宝箱</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div class="clear">
                    <dl class="mom-news fl clear">
                        <dt class="fl">
                        <?php if(is_array($IF1)){   foreach($IF1 as $k=>$v){ ?>
                            <a href="<?php echo $v['url']?>" target="_blank" title="<?php echo $v['title']?>"><img class="lazy" data-original="<?php echo $v['img']?>" alt="<?php echo $v['title']?>" width="150" height="110"></a>
                        <?php  } }  ?>
                        </dt>
                        <dd class="fl">
                        <ul class="mom-news-list">
                        <?php if(is_array($IF2)){
                            foreach($IF2 as $k=>$v){   ?>
                                <li class="fn-nowrap"><a href="<?php echo $v['url']?>" target="_blank"><?php echo $v['title']?></a></li>
                            <?php  } }  ?>
                        </ul>
                        </dd>
                    </dl>
                    <dl class="mom-news fl clear">
                        <dt class="fl">
                        <?php if(is_array($IF3)){ foreach($IF3 as $k=>$v){  ?>
                            <a href="<?php echo $v['url']?>" target="_blank" title="<?php echo $v['title']?>"><img class="lazy" data-original="<?php echo $v['img']?>" alt="<?php echo $v['title']?>" width="150" height="110"></a>
                        <?php  } }  ?>
                        </dt>
                        <dd class="fl">
                        <ul class="mom-news-list">
                        <?php if(is_array($IF4)){
                            foreach($IF4 as $k=>$v){ ?>
                                <li class="fn-nowrap"><a href="<?php echo $v['url']?>" target="_blank"><?php echo $v['title']?></a></li>
                            <?php  } }  ?>
                        </ul>
                        </dd>
                    </dl>
                    <dl class="ulib-indent mt10 fr clear">
                        <div class="imgtxt">
                            <a href="<?=$IF5[0]['url']?>" target="_blank" rel="external nofollow"><img class="lazy" data-original="<?=$IF5[0]['img']?>" alt="<?=$IF5[0]['title']?>" width="200" height="110" style="display: block;"></a>
                            <div class="txt-wrap"><a href="<?=$IF5[0]['url']?>" class="txt-cnt" target="_blank"><?=$IF5[0]['title']?></a></div>
                        </div>
                    </dl>
            	</div>

        </div>
        <!--谈车论驾结束-->

        <!--社区热图结束-->
        <div class="mt20 public_panel">
            <div class="panel_hd clear">
                    <h3 class="panel_title fl">社区热图</h3>
                    <ul class="panel_cate mt5 fl">
                        <li>
                            <a href="http://bbs.zz.xmfish.com/thread-htm-fid-91-type-125.html" target="_blank">人像人体</a>
                        </li>
                        <li>
                            <a href="http://bbs.zz.xmfish.com/thread-htm-fid-91-type-126.html" target="_blank">民俗纪实</a>
                        </li>
                        <li>
                            <a href="http://bbs.zz.xmfish.com/thread-htm-fid-91-type-127.html" target="_blank">风景生态</a>
                        </li>
                        <li>
                            <a href="http://bbs.zz.xmfish.com/thread-htm-fid-91-type-129.html" target="_blank">都市掠影</a>
                        </li>
                    </ul>
                </div>

            <div class="block-hotimg-wrap">
                <div class="block-hotimg clear">
                    <div class="hotimg-wrap">
                    <?php if(is_array($FL1)){
                    $styles=array(array('width'=>'220','height'=>'240'),array('width'=>'220','height'=>'160'),array('width'=>'220','height'=>'160'),array('width'=>'220','height'=>'240'));
                    foreach($FL1 as $k=>$v){?>
                        <div class="imgtxt">
                            <a href="<?=$v['url']?>" target="_blank"><img class="lazy" data-original="<?=$v['img']?>" alt="<?=$v['title']?>" width="<?=$styles[$k]['width']?>" height="<?=$styles[$k]['height']?>" /></a>
                            <div class="txt-wrap"><a href="<?=$v['url']?>" class="txt-cnt" target="_blank"><?=$v['title']?></a></div>
                       </div>
                        <?php if($k==1){?>
                          </div>
                          <div class="hotimg-wrap">
                       <?php }?>
                       <?php  } }  ?>
                   </div>
                    <?php if(is_array($FR1)){
                        $styles=array(array('width'=>'336','height'=>'240'),array('width'=>'220','height'=>'240'),array('width'=>'168','height'=>'160'),array('width'=>'167','height'=>'160'),array('width'=>'220','height'=>'160'));
                        foreach($FR1 as $k=>$v){?>
                            <div class="imgtxt">
                       <a href="<?=$v['url']?>" target="_blank"><img class="lazy" data-original="<?=$v['img']?>" alt="<?=$v['title']?>" width="<?=$styles[$k]['width']?>" height="<?=$styles[$k]['height']?>" /></a>
                       <div class="txt-wrap"><a href="<?=$v['url']?>" class="txt-cnt" target="_blank"><?=$v['title']?></a></div>
                   </div>
                        <?php  } }  ?>
               </div>
           </div>
        </div>
        <!--社区热图结束-->

        <div class="mt20 mb20">
            <div class="t7">
                    <div class="l_box clear" style=" border-bottom:none;">
                            <h5 style="float:left;line-height: 19px;"><span>小鱼分站</span></h5>
                            <ul class="l_font clear">
                                    <li><a href="http://www.xmfish.com/" target="_blank">厦门小鱼</a></li>
                                    <li><a href="http://www.v17go.com/" target="_blank">福州小鱼</a></li>
                                    <li><a href="http://www.qzbbs.com/" target="_blank">泉州小鱼</a></li>
                                    <li><a href="http://www.zzfish.cn/" target="_blank">漳州小鱼</a></li>
                                    <li><a href="http://www.jjj8.cn/" target="_blank">晋江小鱼</a></li>
                            </ul>
                            <div style="overflow-y: hidden; height: 0px; clear: both"></div>
                    </div>
                    <div class="l_box" style="*margin-bottom:10px;">
                            <h5><span>友情链接</span></h5>
                            <ul class="l_font clear">
                            <?php if(is_array($GR1)){ foreach($GR1 as $k=>$v){ ?>
                                <li><a <?php if($v['nofollow']=='启用'){?> rel="nofollow"<?php }?> href="<?=$v['url']?>" target="_blank"><?=$v['title']?></a></li>
                            <?php  } }  ?>
                            </ul>
                            <div style="overflow-y:hidden;height:0px;clear:both"></div>
                    </div>
            </div>
    </div>
    </article>

    <script type="text/javascript">
    $(document).ready(function() {
        //轮播图
        function picslider(slider) {
            var sWidth = jQuery(slider).width();
            var len = jQuery(slider).children('ul').children('li').length;
            var index = 0;
            var picTimer;

            var btn = "<div class='btn'>";
            for(var i=0; i < len; i++) {
                btn += "<span class='ulib-r5'></span>";
            }
            btn += "</div>";
            jQuery(slider).append(btn);

            jQuery(slider).children('.btn').children('span').mouseenter(function() {
                index = jQuery(this).index();
                showPics(index);
            }).eq(0).trigger("mouseenter");

            jQuery(slider).children('ul').css("width",sWidth * (len));

            jQuery(slider).hover(function() {
                clearInterval(picTimer);
            },function() {
                picTimer = setInterval(function() {
                    showPics(index);
                    index++;
                    if(index == len) {index = 0;}
                },4000);
            }).trigger("mouseleave");

            function showPics(index) {
                var nowLeft = -index*sWidth;
                jQuery(slider).children('ul').stop(true,false).animate({"left":nowLeft},300);
                jQuery(slider).children('.btn').children('span').removeClass("on").eq(index).addClass("on");
            }
        }
        //爆料台
        picslider('#pl_slider');
        picslider('#pl_slider1');
        //结婚宝
        picslider('#marry_slider');

        //公告轮播
        function frann() {
            var h = 0;
            var ih = jQuery('#fr_ann ul')
                .height();
            var scroll = function() {
                setTimeout(function() {
                    h += 20;
                    if (h + 5 >= ih) {
                        h = 0;
                    }
                    jQuery('#fr_ann ul')
                        .animate({
                            top: -h + 'px'
                        }, 400);
                    scroll();
                }, 4000);
            };
            scroll();
        }
        frann();
    });
    </script>

    </div>
</span>
<?php if(is_array($AR4)){?>
    <div id="votejsc" style="display:none">
        <?php  foreach($AR4 as $k=>$v){?>
            <?=$v['js_code']?>
        <?php  }  ?>
    </div>
    <script language="javascript" type="text/javascript">
        document.getElementById("votejs").innerHTML = document.getElementById("votejsc").innerHTML;
    </script>
<?php  }  ?>
<? include_once APPPATH.'views/chanel/zzfish/footer.php';?>
<script src="http://tjs.sjs.sinajs.cn/open/api/js/wb.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript" src="/js/chanel/www/jquery.SuperSlide.js"></script>
<script type="text/javascript" src="/js/chanel/www/jquery.lazyload.js"></script>
<script type="text/javascript" src="/js/chanel/www/index2.js"></script>
<script>
    jQuery(function(){
        jQuery("img.lazy").lazyload({ placeholder : "/images/chanel/www/index2/load.gif", effect : "show",skip_invisible : false, threshold : 1500});

    });
</script>
<script>
    function apply_jiaju()
    {
        tel = $('#home_tel').val();
        name = $('#home_name').val();
        loupan =$('#home_loupan').val();
        if(tel.length != 11 || tel.charAt(0)  != '1')
        {
            alert('请填写正确的手机号码。');
        }
        else if (tel == '请填写您的手机')
        {
            alert('请填写手机号码。');
        }
        else if ( name == '业主姓名')
        {
            alert('请填写姓名。');
        }
        else if ( loupan == '请填写您装修所在楼盘')
        {
            alert('请填写楼盘信息。');
        }
        else
        {
            $.ajax({
                type : "get",
                url : "http://jiaju.zz.xmfish.com/apply/",
                data:{
                    'type':2,
                    'name':name,
                    'tel':tel,
                    'loupan':loupan
                },
                dataType : "jsonp",
                success : function(data){
                    if(data.result)
                    {
                        $("#step1")[0].reset();
                        alert('报名成功');
                    }
                    else
                    {
                        alert('报名失败');
                    }

                },
                error:function(){
                    alert('网络错误，请刷新重试');
                }
            });
        }
    }

    function brandCx(ccid,val){
        var html = '';
        jQuery.ajax({
            type : "get",
            url : "http://hot.xmfish.com/chanel/car/getbrandcx.html",
            data:{'ccid':ccid},
            dataType : "jsonp",
            jsonp: "callback",
            jsonpCallback:"success_jsonpCallback",
            success : function(data){
                jQuery.each(data,function(key,value){
                    if(value.ccid == val){
                        html += '<option value="'+value.ccid+'" selected>'+value.letter+' '+value.ptitle+' '+value.title+'</option>';
                    }else{
                        html += '<option value="'+value.ccid+'">'+value.letter+' '+value.ptitle+' '+value.title+'</option>';
                    }
                });
                jQuery('select#cx').html(html);
            },
            error:function(){
                alert('fail');
            }
        });
    }
</script>
</body>
</html>
