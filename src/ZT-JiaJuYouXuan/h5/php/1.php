<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header('Access-Control-Allow-Headers:x-requested-with,content-type');
$type = $_POST["type"]=1;
$arr = [];
if ($type == 1) {
    for ($a = 0; $a < 8; $a++) {
        $arr["lists"][$a]["pic"] = "upload/demo_1.jpg";
    }
} else if ($type == 2) {
    for ($a = 0; $a < 8; $a++) {
        $arr["lists"][$a]["pic"] = "upload/demo_2.jpg";
    }
}

echo json_encode($arr);
?>