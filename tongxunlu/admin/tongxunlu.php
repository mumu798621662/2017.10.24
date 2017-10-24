<?php
header('Content-type:text/html;charset=utf8');
$mysql=new mysqli('localhost','root','','tongxunlu',3306);
$mysql->query('set names utf8');
if($mysql->connect_errno){
    echo '数据库连接失败，失败信息'.$mysql->connect_errno;
    exit;
}
$sql='select * from tongxunlu';
$result = $mysql -> query($sql);
$data=$result->fetch_all(MYSQLI_ASSOC);
echo json_encode($data);
//var_dump($data);
?>

