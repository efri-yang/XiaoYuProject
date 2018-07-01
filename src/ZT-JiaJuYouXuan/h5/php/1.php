<?php
$type = $_POST["type"];
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