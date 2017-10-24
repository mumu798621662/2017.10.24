<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>登录</title>
</head>
<style>
    *{
        padding:0;
        margin:0;
        list-style: none;
    }
    html,body{
        width: 100%;
        height:100%;
        overflow: hidden;
        background:#6FC5EE;
    }
    form{
        width: 600px;
        height:300px;
        background: #fff;
        margin:200px auto;
    }
    .formGroup{
        width: 100%;
        height:30px;
        padding:20px 0;
        margin-bottom: 10px;
        text-align: center;
    }
    h3{
      text-align: center;
        line-height: 20px;
        font-size: 20px;
    }
    input{
      width: auto;
        height:26px;
        padding:0 10px;
    }
</style>
<body>
<form action="checkuser.php" method="post">
    <div class="formGroup">
        <h3>登录界面</h3>
    </div>
    <div class="formGroup">
        <label for="">用户名</label>
        <input type="text" name="user" placeholder="请输入用户名">
    </div>
    <div class="formGroup">
        <label for="">密&nbsp&nbsp&nbsp&nbsp码</label>
        <input type="password" name="password" placeholder="请输入密码">
    </div>
    <div class="formGroup">
        <input type="submit">
    </div>
</form>
</body>
</html>