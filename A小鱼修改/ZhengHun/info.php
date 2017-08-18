<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>小鱼相亲个人资料 - 厦门小鱼网</title>
    <script src="/js/2017/marry/jquery-1.7.2.min.js"></script>
    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <script src="/js/jquery-1.12.2.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/bootstrap-modal.js"></script>
    <link rel="stylesheet" href="http://i.xmfish.com/css/2017/marry/default.min.css">
    <link rel="stylesheet" href="http://i.xmfish.com/css/2017/marry/headernav.css">
    <link rel="stylesheet" href="http://i.xmfish.com/css/2017/marry/header.css">
    <link rel="stylesheet" href="http://i.xmfish.com/css/2017/marry/pw_core.css?v=151020">
    <style>
        a{color: #333;}
        a:hover{text-decoration: underline;color:#0383cc;}
        .wrap,.module{width: 960px;}
        .main{margin-top: 8px;margin-bottom: 60px;}
        .main .border{border:1px solid #0673b5;}
        .hd .title{font-size: 18px;margin-bottom: 5px;margin-top: 20px;}
        .hd .sub-title{font-size: 12px;color: #666;}
        .hd{width: 920px;margin:0 auto;padding-bottom: 20px;border-bottom: 1px solid #0673b5;}
        .bd{width: 920px;margin:10px auto 30px;}
        .bd .review{margin:20px 0px; border:1px solid #c1d8ea;border-bottom: none;}
        .bd dt.title{font-size: 18px;padding: 20px 0;border-bottom: 1px solid #c1d8ea;}
        .bd .review .lay-left{border-right: 1px solid #c1d8ea;margin-right: -1px;}
        .bd .review .row{border-bottom: 1px solid #c1d8ea; margin-right: 0px;  margin-left: 0px;min-height: 60px;line-height: 60px!important;}
        .bd .review .row .left{line-height: 60px!important;}
        .bd .review .col-2{width: 12.5%;}
        .bd .review .col-2 .text,.bd .review .col-3 .text{padding-left:25px;line-height: 60px;}
        .photo{width: 136px;height: 136px;border:1px solid #ccc;margin: 22px 5px 22px;background-position: center;-webkit-background-size: 100% 100%;background-size: 100% 100%;background-repeat: no-repeat;}
        .protocol-box{font-size: 12px;}
        .protocol-box input{padding: 3px 5px;height: 20px;margin-right: 5px;line-height: 20px;vertical-align: middle;}
        .protocol-box .text{margin-right: 50px;}
        .protocol-box .status{margin-right: 35px;}
        .btn-list{width: 280px;margin: 40px auto 30px;}
        .icon-btns{width: 170px;height: 27px; background: url(/img/2017/marry/icons1.png); background-repeat: no-repeat; background-position: 0 0; border: none;cursor: pointer;vertical-align: middle;}
        .icon-btns.edit{width: 100px;-ms-background-position-x: -170px;background-position-x: -170px;}
        #fish-top-skin{width:100%;height:318px;background:url('/img/2017/marry/2014theme-6.1.jpg') no-repeat center 0;}
        .xmfish-theme{position:absolute;display:block;top:40px;left:50%;width:227px;height:80px;margin-left:232px;background:url('/img/2017/marry/xmfish-spring-theme.png') no-repeat 0 0;_background:none;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=crop,src='http://www.xmfish.com/images/chanel/www/index2/xmfish-spring-theme.png');text-indent:-999em;overflow:hidden;z-index:2;}
        .t_2014_subject{position:absolute;top:0;left:50%;width:300px;margin-left:-480px;}
        .t_2014_subject h2{position:relative;z-index:0;}
        .t_2014_subject h2 a{display:block;position:absolute;top:71px;width:145px;height:30px;background:url('http://www.xmfish.com/images/chanel/www/index2/xiaoyulogo-145-30.png');background-image:-webkit-image-set('/img/2017/marry/xiaoyulogo-145-30.png') 1x,url('/img/2017/marry/xiaoyulogo-290-60.png') 2x);background-image:-moz-image-set('/img/2017/marry/xiaoyulogo-145-30.png') 1x,url('/img/2017/marry/xiaoyulogo-290-60.png') 2x);background-image:-ms-image-set('/img/2017/marry/xiaoyulogo-145-30.png') 1x,url('/img/2017/marry/xiaoyulogo-290-60.png') 2x);background-image:-o-image-set('/img/2017/marry/xiaoyulogo-145-30.png') 1x,url('/img/2017/marry/xiaoyulogo-290-60.png') 2x);background-repeat:no-repeat;background-size:100% auto;_background:none;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=crop,src='/img/2017/marry/xiaoyulogo-145-30.png');overflow:hidden;text-indent:-999em;z-index:0;}
        .header1 div.wrap{ width:1000px; }
        .t_2014_subject h3{position:relative;z-index:0;}
        .t_2014_subject h3 a{display:block;position:absolute;top:71px;width:145px;height:30px;background:url('/img/2017/marry/xiaoyulogo_160818_white.png');background-image:-webkit-image-set('/img/2017/marry/xiaoyulogo_160818_white.png') 1x,url('/img/2017/marry/xiaoyulogo_160818_white2X.png') 2x);background-image:-moz-image-set('/img/2017/marry/xiaoyulogo_160818_white.png') 1x,url('/img/2017/marry/xiaoyulogo_160818_white2X.png') 2x);background-image:-ms-image-set('/img/2017/marry/xiaoyulogo_160818_white.png') 1x,url('/img/2017/marry/xiaoyulogo_160818_white2X.png') 2x);background-image:-o-image-set('/img/2017/marry/xiaoyulogo_160818_white.png') 1x,url('/img/2017/marry/xiaoyulogo_160818_white2X.png') 2x);background-repeat:no-repeat;background-size:100% auto;_background:none;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=crop,src='/img/2017/marry/xiaoyulogo_160818_white.png');overflow:hidden;text-indent:-999em;z-index:0;}
        .switch_city{position:absolute;top:74px;left:155px;width:100%;}
        .reletive{position:relative;}
        .t_2014_tab_star{position:absolute;top:-3px;right:1px;color:#f50;font-size:14px;-webkit-animation:animations 3s ease-out;-moz-animation:animations 3s ease-out;-o-animation:animations 3s ease-out;-ms-animation:animations 3s ease-out;animation:animations 3s ease-out;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-o-animation-iteration-count:infinite;-ms-animation-iteration-count:infinite;animation-iteration-count:infinite;font-style:normal;}
        #head{margin-top:-185px;}
        #breadCrumb{zoom:1; height:30px; border:1px solid #c1d8ea;background:#f5fafe;padding:0 5px 0 10px;margin-top:10px; margin-bottom:10px; overflow:hidden;}
        #breadCrumb a{line-height:30px;}
        #breadCrumb .fr{padding-top:7px;}
        #breadCrumb .fr a{line-height:18px;}
        #breadCrumb .fr .link_down{margin-top:-1px;}
        #breadCrumb em{ font-family:Simsun;margin:0 5px;}
        #breadCrumb img.breadHome{float:left;margin:6px 5px 0 0;}
        .main .quick{background-image: url(/img/2017/marry/1.png);height: 32px;line-height: 31px;background-position-y: -10px;}
        .main .quick .text{font-size: 14px;color: #333;font-weight: 600;margin:0px 5px 0px 10px;}
        .main .quick .btns{padding: 1px 10px;border:1px solid #a1a1a1;border-radius: 3px;font-size: 12px;color: #111;margin-left:5px;background-color: #f2f2f0;text-decoration:none;}
        .main .quick .right{margin-right: 20px;}
        #scrollBar,#scrollBar_new{z-index: 999;}
    </style>
</head>
<body class="yahei" style="padding-top: 0px; ">
<script type="text/javascript" src="http://bbs.xmfish.com/apps/rt/client/head.php?charset=utf8&backurl=http%3A%2F%2Fi.dev.xmfish.com%2F2016%2Fymj" charset="GBK"></script>
<div class="page">

    <div id="fish-top-skin"></div>

    <div class="t_2014_subject">
        <header>
            <h2 class="fl"><a href="http://www.xiaoyu.com/switch?area=63">厦门小鱼网</a></h2>
            <div class="switch_city switch_city_index" style="top:79px;">
                <strong class="sc">厦门</strong>
                <span class="sct">[切换城市]</span>
                <div class="city_list" style="display: none;">
                    <a href="http://www.xiaoyu.com/switch?area=62">漳州</a>
                    <a href="http://www.xiaoyu.com/switch?area=68">泉州</a>
                    <a href="http://www.xiaoyu.com/switch?area=59">晋江</a>
                    <a href="http://www.xiaoyu.com/switch?area=53">福州</a>
                </div>
            </div>
        </header>
    </div>

    <div id="head" style="background-color:#fff;">

        <div class="wrap">
            <!--导航-->
            <nav>
                <div class="t_2014_navpanel" style="position:relative;z-index:2;">
                    <div class="t_2014_tab_holder clear">
                        <ul class="fl clear">
                            <li><a href="http://www.xmfish.com" rel="external nofollow">首页</a></li>
                            <li class="active"><a target="_blank" href="http://bbs.xmfish.com">社区</a></li>
                            <li><a target="_blank" href="http://bbs.xmfish.com/u.php" rel="external nofollow">我的空间</a></li>
                            <li><a target="_blank" href="http://app.xmfish.com/">手机客户端</a></li>
                            <li><a href="http://love.xmfish.com/" target="_blank">小鱼温度</a></li>
                            <li><a href="http://8.xiaoyu.com/" target="_blank">小鱼金融</a></li>
                            <li class="reletive"><a href="http://auto.xmfish.com/usedcar" target="_blank">小鱼二手车</a></li>
                            <li class="reletive"><a href="http://travel.xiaoyu.com" target="_blank">小鱼旅游</a></li>
                        </ul>
                        <div class="fr follow_us">
                            关注我们：
                            <span class="follow_us_weibo clear" title="小鱼官方微博">
						<a href="http://www.xmfish.com/auto/read.html?url=http%3a%2f%2fwidget.weibo.com%2fdialog%2ffollow.php%3ffuid%3d1747501965" target="_blank">
						<em class="fl weibo_focus">加关注</em>
						<em class="fr weibo_sum"><i class="plus_arr1"></i><i class="plus_arr2"></i>14.8万</em>
						</a>
						</span>
                            <span class="follow_us_weixin" onmouseover="jQuery('.fish_weixin').show();" onmouseout="jQuery('.fish_weixin').hide();" href="javascript:" title="小鱼官方微信">
							<div class="fish_weixin">
								<span class="weixin-arrow-wrap"></span>
								<span class="weixin-arrow"></span>
								<img src="/img/2017/marry/weixin-code.jpg" alt="关注小鱼官方微信">
							</div>
						</span>
                        </div>
                    </div>
                    <div class="t_2014_nav_holder clear">
                        <dl class="t_2014_n_life">
                            <dt><span><a style="color:#085bb0;" href="http://bbs.xmfish.com" target="_blank"><i class="icon"></i>社区</a></span></dt>
                            <dd>
                                <ul class="clear">
                                    <li><a href="http://bbs.xmfish.com/thread-htm-fid-6.html" target="_blank">鹭岛生活</a></li>
                                    <li><a href="http://bbs.xmfish.com/thread-htm-fid-27.html" target="_blank">谈天说地</a></li>
                                    <li><a href="http://www.xiaoyu.com/health/index" target="_blank">小鱼健康</a></li>
                                </ul>
                                <ul class="clear">
                                    <li><a href="http://bbs.xmfish.com/thread-htm-fid-75.html" target="_blank">亲子乐园</a></li>
                                    <li><a href="http://food.xmfish.com/" target="_blank">美食吃货</a></li>
                                    <li><a href="http://lady.xiaoyu.com/" target="_blank">时尚丽人</a><i class="t_2014_n_star">★</i></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl class="t_2014_n_consume">
                            <dt><span><i class="icon"></i>消费</span></dt>
                            <dd>
                                <ul class="clear">
                                    <li><a href="http://house.xmfish.com/" target="_blank">房产楼市</a></li>
                                    <li><a href="http://home.xmfish.com/" target="_blank">家居装饰</a></li>
                                </ul>
                                <ul class="clear">
                                    <li><a href="http://auto.xmfish.com/" target="_blank">小鱼汽车</a></li>
                                    <li><a href="http://marry.xmfish.com/" target="_blank">小鱼婚嫁</a></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl class="t_2014_n_preferential">
                            <dt><span><i class="icon"></i>优惠</span></dt>
                            <dd>
                                <ul class="clear">
                                    <li><a href="http://card.xiaoyu.com/" target="_blank">小鱼卡</a></li>
                                    <li><a href="http://city.xmfish.com/" target="_blank">小鱼城事</a></li>
                                </ul>
                                <ul class="clear">
                                    <li><a href="http://bbs.xmfish.com/hack.php?H_name=jingpai" target="_blank" _hover-ignore="1">小鱼币</a></li>
                                    <li><a href="http://auto.xmfish.com/#sale-car" target="_blank">特惠汽车<i class="t_2014_n_star">★</i></a></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl class="t_2014_n_service">
                            <dt><span><a style="color:#085bb0;" href="http://info.xmfish.com" target="_blank"><i class="icon"></i>分类</a></span></dt>
                            <dd>
                                <ul class="clear">
                                    <li><a href="http://bbs.xmfish.com/thread-htm-fid-55.html" target="_blank">物尽</a></li>
                                    <li><a href="http://fangzi.xmfish.com/web/search_hire.html" target="_blank">租房</a></li>
                                    <li><a href="http://hot.xmfish.com/chanel/pinche/" target="_blank">拼车</a></li>
                                    <li><a href="http://fangzi.xmfish.com/web/sell2.html" target="_blank">二手房</a></li>
                                </ul>
                                <ul class="clear">
                                    <li><a href="http://job.xmfish.com/" target="_blank">求职</a></li>
                                    <li><a href="http://hot.xmfish.com/chanel/market/" target="_blank">集市</a></li>
                                    <li><a href="http://info.xmfish.com/chanel/fuwu/classlist.html?fid=355" target="_blank">教育</a></li>
                                    <li><a href="http://bbs.xmfish.com/thread-htm-fid-26.html" target="_blank">小鱼上门</a></li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                </div>
            </nav>
            <!--导航结束-->
        </div>
    </div>

    <div class="view-path">
        <div class="module">
            <div id="breadCrumb" class="cc">
                <img id="td_cate" align="absmiddle" src="/img/2017/marry/home.gif" alt="forumlist" class="cp breadHome">
                <em class="breadEm"></em>
                <a href="http://bbs.xmfish.com/">厦门小鱼社区_厦门小鱼网</a>
                <em>&gt;</em><a href="http://bbs.xmfish.com/thread-htm-fid-6.html">鹭岛生活</a>
                <em>&gt;</em><a href="#">征婚资料备案</a>
            </div>
        </div>
    </div>

    <div class="main">
        <div class="module">
            <div class="border">
                <div class="hd">
                    <div class="text-center">
                        <div class="title">
                            <?php
                            switch ($member['ifcheck']) {
                                case 0:
                                    echo '备案资料已提交';
                                    break;
                                case 1:
                                    echo '恭喜审核通过';
                                    break;
                                case -1:
                                    echo ' 审核不通过';
                                    break;
                            }
                            ?></div>
                        <div class="sub-title">
                            <?php
                            switch ($member['ifcheck']) {
                                case 0:
                                    echo '管理员正审核中';
                                    break;
                                case 1:
                                    echo '编辑后需要重新审核';
                                    break;
                                case -1:
                                    echo '正确填写真实资料才会通过哦';
                                    break;
                            }
                            ?>
                        </div>
                    </div>
                </div>
                <div class="bd">
                    <dl class="review">
                        <dt class="title text-center">个人资料</dt>
                        <dd class="clear">
                            <div class="col-6 lay-left left clear">
                                <div class="row">
                                    <div class="left col-3">
                                        <div class="text">照片</div>
                                    </div>
                                    <div class="left col-9">
                                        <?php
                                        if($member['imgs']) {
                                            foreach ($member['imgs'] as $img) {

                                                echo "<div class=\"photo left\" width=\"136\" height=\"136\"  style=\"background-image:url({$img});\"></div>";

                                            }
                                        }
                                        ?>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="left col-3">
                                        <div class="text">出生年月</div>
                                    </div>

                                    <div class="left col-9"><?=$member['birthday']?></div>
                                </div>

                                <div class="row">
                                    <div class="left col-3">
                                        <div class="text">身高</div>
                                    </div>
                                    <div class="left col-9"><?=$member['height'] ? $member['height'].'CM' : '保密'?></div>
                                </div>

                                <div class="row">
                                    <div class="left col-3">
                                        <div class="text">手机号</div>
                                    </div>
                                    <div class="left col-9">
                                        <?=$member['mobile']['num']?>
                                        <?php
                                        switch($member['mobile']['status']) {
                                            case 2:
                                                echo '(好友可见)';
                                                break;
                                            case 0:
                                                echo '(不公开)';
                                                break;
                                        }
                                        ?>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="left col-3">
                                        <div class="text">婚姻状况</div>
                                    </div>

                                    <div class="left col-9"><?=$member['ismarry']?></div>
                                </div>
                                <div class="row">
                                    <div class="left col-3">
                                        <div class="text">房车</div>
                                    </div>

                                    <div class="left col-9"><?=$member['asset']?></div>
                                </div>
                            </div>
                            <div class="col-6 lay-right left clear">
                                <div class="row">
                                    <div class="left col-3">
                                        <div class="text">填表时间</div>
                                    </div>

                                    <div class="left col-9"><?=date('Y-m-d H:i:s', $member['addtime'])?></div>
                                </div>

                                <div class="row">
                                    <div class="left col-3">
                                        <div class="text">昵称</div>
                                    </div>
                                    <div class="left col-9"><?=$member['username']?>（ID <?=$member['uid']?>）</div>
                                </div>

                                <div class="row">
                                    <div class="left col-3">
                                        <div class="text">性别</div>
                                    </div>
                                    <div class="left col-9"><?=$member['sex']?></div>
                                </div>
                                <div class="row">
                                    <div class="left col-3">
                                        <div class="text">籍贯</div>
                                    </div>

                                    <div class="left col-9"><?=$member['origin'] ? implode(' ', $member['origin']) : '' ?></div>
                                </div>
                                <div class="row">
                                    <div class="left col-3">
                                        <div class="text">体重</div>
                                    </div>

                                    <div class="left col-9"><?=$member['weight'] ? $member['weight'].'KG' : '保密'?></div>
                                </div>

                                <div class="row">
                                    <div class="left col-3">
                                        <div class="text">微信</div>
                                    </div>
                                    <div class="left col-9">
                                        <?=$member['wechat']['name']?>
                                        <?php
                                        switch($member['wechat']['status']) {
                                            case 2:
                                                echo '(好友可见)';
                                                break;
                                            case 0:
                                                echo '(不公开)';
                                                break;
                                        }
                                        ?>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="left col-3">
                                        <div class="text">学历</div>
                                    </div>

                                    <div class="left col-9"><?=$member['edu']?></div>
                                </div>

                                <div class="row">
                                    <div class="left col-3">
                                        <div class="text">职业</div>
                                    </div>
                                    <div class="left col-9"><?=$member['occupation']?></div>
                                </div>
                            </div>
                        </dd>
                        <dd class="clear">
                            <div class="row">
                                <div class="left col-2">
                                    <div class="text">QQ</div>
                                </div>
                                <div class="left col-10">
                                    <?=$member['oicq']['num']?>
                                    <?php
                                    switch($member['oicq']['status']) {
                                        case 2:
                                            echo '(好友可见)';
                                            break;
                                        case 0:
                                            echo '(不公开)';
                                            break;
                                    }
                                    ?>
                                </div>
                            </div>
                        </dd>
                        <dt class="title text-center">
                            对心目中的Ta的要求
                        </dt>
                        <dd class="clear">
                            <div class="row">
                                <div class="left col-2">
                                    <div class="text">籍贯要求</div>
                                </div>

                                <div class="left col-10"><?=$member['target']['origin'] ?></div>
                            </div>
                            <div class="col-6 lay-left left clear">
                                <div class="row">
                                    <div class="left col-3">
                                        <div class="text">年龄要求</div>
                                    </div>

                                    <div class="left col-9"><?=$member['target']['age'] ? $member['target']['age']['start'].'-'.$member['target']['age']['end'].'岁' : '不限'?></div>
                                </div>
                                <div class="row">
                                    <div class="left col-3">
                                        <div class="text">婚姻状况</div>
                                    </div>

                                    <div class="left col-9"><?=$member['target']['ismarry'] ? implode('或', $member['target']['ismarry']) : '不限' ?></div>
                                </div>
                                <div class="row">
                                    <div class="left col-3">
                                        <div class="text">房车要求</div>
                                    </div>

                                    <div class="left col-9"><?=$member['target']['asset'] ? $member['target']['asset'] : '不限'?></div>
                                </div>
                            </div>
                            <div class="col-6 lay-right left clear">
                                <div class="row">
                                    <div class="left col-3">
                                        <div class="text">身高要求</div>
                                    </div>

                                    <div class="left col-9"><?=$member['target']['height']['start'].'-'.$member['target']['height']['end'] ?>CM</div>
                                </div>
                                <div class="row">
                                    <div class="left col-3">
                                        <div class="text">学历要求</div>
                                    </div>

                                    <div class="left col-9"><?=$member['target']['edu'] ? $member['target']['edu'] : '不限'?></div>
                                </div>
                                <div class="row">
                                    <div class="left col-3">
                                        <div class="text">薪资要求</div>
                                    </div>

                                    <div class="left col-9"><?=$member['target']['salary'] ? $member['target']['salary'] : '不限'?></div>
                                </div>
                            </div>
                        </dd>
                        <dt class="title text-center">
                            更多的描述自己／心目中的她和他
                        </dt>
                        <dd class="clear">
                            <div class="row">
                                <?=$member['describe']?>
                            </div>
                        </dd>
                    </dl>
                    <div class="btn-list">
                        <?php
                        switch ($member['ifcheck']) {
                            case 1:
                                echo '<a href="javascript:void(0)"><button class="icon-btns" data-toggle="modal" data-target="#myModal"></button></a><a href="/2017/marry/sign"><button value="" class="icon-btns edit"></button></a>';
                                break;
                            case -1:
                                echo '<a href="/2017/marry/sign"><button class="icon-btns edit"></button></a>';
                                break;
                        }
                        ?>


                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        function getObj(id) {
            return document.getElementById(id);
        }
        function getEvent(){
            if(document.all)
            {
                return window.event;//如果是ie
            }
            var func=getEvent.caller;
            while(func!=null)
            {
                var arg0=func.arguments[0];
                if(arg0)
                {
                    if((arg0.constructor==Event || arg0.constructor ==MouseEvent)
                        ||(typeof(arg0)=="object" && arg0.preventDefault && arg0.stopPropagation))
                    {
                        return arg0;
                    }
                }
                func=func.caller;
            }
            return null;
        }
        jQuery(document).ready(function(){
            jQuery('#header .sd-wrap').hover(function(){
                jQuery(this).addClass('active');
            },function(){
                jQuery(this).removeClass('active');
            });
            jQuery('.switch_city .sct,.switch_city .city_list').hover(
                function(){
                    jQuery('.switch_city .city_list').show();
                },
                function(){
                    jQuery('.switch_city .city_list').hide();
                });
        });
    </script>
    <script src="/js/2017/marry/global.js"></script>
</div>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="overflow-y: auto;">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">图片预览</h4>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary download" style="display: inline;">下载</button>如果下载不成功,请自行右键保存
            </div>
        </div>
    </div>
</div>
<a id="download-img" href="" style="display: none;"></a>
<iframe id="preview-iframe" src="/2017/marry/table" height="0" frameborder="0"></iframe>
<script src="/js/2017/marry/html2canvas.js"></script>
<script>
    /**
     * 在本地进行文件保存
     * @param  {String} data     要保存到本地的图片数据
     * @param  {String} filename 文件名
     */
    var saveFile = function(data, filename){
        var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
        save_link.href = data;
        save_link.download = filename;

        var event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        save_link.dispatchEvent(event);
    };

    /**
     * 获取mimeType
     * @param  {String} type the old mime-type
     * @return the new mime-type
     */
    var _fixType = function(type) {
        type = type.toLowerCase().replace(/jpg/i, 'jpeg');
        var r = type.match(/png|jpeg|bmp|gif/)[0];
        return 'image/' + r;
    };

    $(function() {
        $('#myModal').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget) // Button that triggered the modal
            var recipient = button.data('whatever') // Extract info from data-* attributes
            var modal = $(this)
            html2canvas($('#preview-iframe').contents().find('#view')[0], {
                background:'white',
                onrendered: function (canvas) {
                    console.debug(canvas);
                    var type = 'jpg';
                    var imgData = canvas.toDataURL(type);
                    imgData = imgData.replace(_fixType(type), 'image/octet-stream');
                    modal.find('.modal-body').html('<img src="'+imgData+'" style="width: 100%;" />');
                }
            });

        })
        $(".download").on("click",function() {
            html2canvas($('#preview-iframe').contents().find('#view')[0], {
                background:'white',
                onrendered: function (canvas) {
                    console.debug(canvas);
                    var type = 'jpg';
                    var imgData = canvas.toDataURL(type);
                    imgData = imgData.replace(_fixType(type), 'image/octet-stream');
                    var filename = 'xiaoyu_' + (new Date()).getTime() + '.' + type;
                    saveFile(imgData, filename);
                }
            });
        });

    });
</script>
<?php
include APPPATH.'views/foot.php';
?>
</body>
</html>