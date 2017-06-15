<?php
	
header('content-type:application:json;charset=utf8');  
header('Access-Control-Allow-Origin:*');  
header('Access-Control-Allow-Methods:POST');  
header('Access-Control-Allow-Headers:x-requested-with,content-type');
	for($i=0;$i<25000000;$i++){
		$a=10;
	}
	$rt=rand(0,1);
	$res=array("num"=>array(rand(0,6),rand(0,6),rand(0,6),rand(0,6),rand(0,6),rand(0,6)),"score"=>rand(0,200));
	echo json_encode($res);
?>