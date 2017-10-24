<?php
include 'db.php';


$user=$_POST['user'];
$password = $_POST['password'];



$sql = 'select *  from  admin';
$result = $mysql->query($sql);
$data=$result->fetch_all(MYSQLI_ASSOC);

for($i=0;$i<count($data);$i++){
   if($data[$i]['username']==$user && $data[$i]['password']==$password){
       $message='登录成功';
       $url='main.php';
       include 'message.html';
       exit();
   }else{
       $message='登录失败';
       $url='login.php';
       include 'message.html';
       exit();
   }
}
?>