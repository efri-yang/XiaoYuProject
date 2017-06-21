<?php
	
header('content-type:application:json;charset=utf8');  
header('Access-Control-Allow-Origin:*');  
header('Access-Control-Allow-Methods:POST');  
header('Access-Control-Allow-Headers:x-requested-with,content-type');
	for($i=0;$i<1500000;$i++){
		$a=10;
	}
	$rt=1;
	
	$res=rand(0,6);
	echo json_encode($res);
?>