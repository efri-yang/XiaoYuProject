$(function(){
var i=0;
var timer=null;
for (var j = 0; j < $('.img li').length; j++) { //����Բ��
$('.num').append('<li></li>')
}
$('.num li').first().addClass('active'); //����һ��Բ�������ʽ
var firstimg=$('.img li').first().clone(); //���Ƶ�һ��ͼƬ
$('.img').append(firstimg).width($('.img li').length*($('.img img').width())); //����һ��ͼƬ�ŵ����һ��ͼƬ������ul�Ŀ��ΪͼƬ����*ͼƬ���
// ��һ����ť
$('.next').click(function(){
i++;
if (i==$('.img li').length) {
i=1; //���ﲻ��i=0
$('.img').css({left:0}); //��֤�޷��ֲ�������leftֵ
};
$('.img').stop().animate({left:-i*700},300);
if (i==$('.img li').length-1) { //����СԲ��ָʾ
$('.num li').eq(0).addClass('active').siblings().removeClass('active');
}else{
$('.num li').eq(i).addClass('active').siblings().removeClass('active');
}
})
// ��һ����ť
$('.prev').click(function(){
i--;
if (i==-1) {
i=$('.img li').length-2;
$('.img').css({left:-($('.img li').length-1)*600});
}
$('.img').stop().animate({left:-i*700},300);
$('.num li').eq(i).addClass('active').siblings().removeClass('active');
})
//���ð�ť����ʾ������
$('.banner').hover(function(){
$('.btn').show();
},function(){
$('.btn').hide();
})
//��껮��Բ��
$('.num li').mouseover(function(){
var _index=$(this).index();
$('.img').stop().animate({left:-_index*700},150);
$('.num li').eq(_index).addClass('active').siblings().removeClass('active');
})
//��ʱ���Զ�����
timer=setInterval(function(){
i++;
if (i==$('.img li').length) {
i=1;
$('.img').css({left:0});
};
$('.img').stop().animate({left:-i*700},2000);
if (i==$('.img li').length-1) { 
$('.num li').eq(0).addClass('active').siblings().removeClass('active');
}else{
$('.num li').eq(i).addClass('active').siblings().removeClass('active');
}
},7000)
//������룬��ͣ�Զ����ţ��Ƴ�����ʼ�Զ�����
$('.banner').hover(function(){ 
clearInterval(timer);
},function(){
timer=setInterval(function(){
i++;
if (i==$('.img li').length) {
i=1;
$('.img').css({left:0});
};
$('.img').stop().animate({left:-i*700},300);
if (i==$('.img li').length-1) { 
$('.num li').eq(0).addClass('active').siblings().removeClass('active');
}else{
$('.num li').eq(i).addClass('active').siblings().removeClass('active');
}
},1000)
})
})

$(function () {
  // ������������λ
		  var header_nav = $(".header-nav");

		  $(window).scroll(function () {
			if ($(this).scrollTop() >= 381) {
			  header_nav.addClass("header-nav__fixed");
			} else {
			  header_nav.removeClass("header-nav__fixed");
			}
		  });
});

$(function() {
				var _scroll = {
					delay: 1000,
					easing: 'linear',
					items: 1,
					duration: 0.07,
					timeoutDuration: 0,
					pauseOnHover: 'immediate'
				};
				$('#ad-two').carouFredSel({
					width: 1100,
					align: false,
					items: {
						width: 'variable',
						height: 70,
						visible: 1
					},
					scroll: _scroll
				});
				$('#ad-one').carouFredSel({
					width: 1100,
					align: false,
					items: {
						width: 'variable',
						height: 70,
						visible: 1
					},
					scroll: _scroll
				});
				$('.caroufredsel_wrapper').css('width', '100%');
			});
