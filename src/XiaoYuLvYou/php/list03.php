<?php 
header('Access-Control-Allow-Origin:*');  
// 响应类型  
header('Access-Control-Allow-Methods:POST');  
// 响应头设置  
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 
for ($i=0; $i < 1000000; $i++) { 
	$j=10+$i;
}
$page=$_REQUEST["page"];
$size=$_REQUEST["size"];



if($page==3){
	echo json_encode(array("error"=>0,"list"=>array()));
	return;
}


	$arr["error"]=0;

	for($i=0;$i<$size;$i++){
		$arr["list"][$i]["img"]="upload/pro42.jpg";
		$arr["list"][$i]["title"]="xxxxxxxx宿和三人早餐";
		$arr["list"][$i]["tags"]=array("购买返现","金牌推荐");
		$arr["list"][$i]["price"]="5600"+$i;
		$arr["list"][$i]["url"]="LvYouGongLue-XiangQing.html";

		$arr["list"][$i]["intro"]="2222222222ddd222222制造者，但真实的印度是什么样但真实的印度";
		$arr["list"][$i]["time"]="218/01/05";
		$arr["list"][$i]["user"]['avatar']="upload/banner11.jpg";
		$arr["list"][$i]["user"]['name']="艺辉22222";
	}


	echo json_encode($arr);

 ?>