<?php
	
header('content-type:application:json;charset=utf8');  
header('Access-Control-Allow-Origin:*');  
header('Access-Control-Allow-Methods:POST');  
header('Access-Control-Allow-Headers:x-requested-with,content-type');
	for($i=0;$i<1500000;$i++){
		$a=10;
	}
	
	$arr[]=0;
	$arr[]=false;
	$arr[]=array("isPrize"=>false,"dice"=>1,"name"=>"亲子嘉年华火热报名中，线下活动赢取万元大奖。");
	$arr[]=array("isPrize"=>false,"dice"=>4,"name"=>"邮储银行火热预约中，现金好礼送不停。");
	$arr[]=array("isPrize"=>true,"dice"=>3,"name"=>"全家福照 价值1688元 ");
	$arr[]=array("isPrize"=>true,"dice"=>5,"name"=>"IPhone7 价值6188元 ");
	$res=rand(0,6);
	echo json_encode($arr[$res]);
?>