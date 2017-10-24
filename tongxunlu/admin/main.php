<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>main</title>
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
        display: flex;
    }
    .left{
        width: 200px;
        height:100%;
        background: #6FC5EE;
    }
    .right{
        flex-grow: 1;
    }
    li{
        width: 100%;
        height:30px;
        margin-top:30px;

    }
</style>
<body>
<div class="left">
    <ul>
        <li><a href="guanliyuan/guanliyuan.html" target="right">管理员管理</a></li>
        <li><a href="lianxiren/lianxiren.html" target="right">联系人管理</a></li>
    </ul>
</div>
<div class="right">
    <iframe src="" frameborder="0" name="right" width="100%" height="100%"></iframe>
</div>
</body>
</html>