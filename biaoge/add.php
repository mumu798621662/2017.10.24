<?php
include 'db.php';
$sql = "INSERT INTO student(`name`, `sex`, `age`, `phone`, `address`, `classes`) VALUES ('','','','','','')";
$mysql->query($sql);
echo $mysql->insert_id;  //返回id
