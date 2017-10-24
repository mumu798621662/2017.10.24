
<?php
include 'db.php';
$sql='select * from admin';
$result = $mysql -> query($sql);
$data=$result->fetch_all(MYSQLI_ASSOC);
echo json_encode($data);
?>