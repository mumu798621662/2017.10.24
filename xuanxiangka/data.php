<?php
$web=[
['title'=>'1','content'=>'11'],
['title'=>'2','content'=>'22'],
['title'=>'3','content'=>'33']
];

$pe=[
['title'=>'4','content'=>'44'],
['title'=>'5','content'=>'55'],
['title'=>'6','content'=>'66']
];

$news=[
['title'=>'7','content'=>'77'],
['title'=>'8','content'=>'88'],
['title'=>'9','content'=>'99']
];

//if($_GET['name']==='web'){
//	echo json_encode($web);
//}else if($_GET['name']==='pe'){
//	echo json_encode($pe);
//}

if($_POST['name']==='web'){
	echo json_encode($web);
}else if($_POST['name']==='pe'){
	echo json_encode($pe);
}else if($_POST['name']==='news'){
	echo json_encode($news);
}
?>