
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/animate.css@3.2.4/animate.min.css">
        <link rel="stylesheet" href="./static/editor.css">
        <title>猫影视TV配置编辑器</title>
</head>
<body>
<div id="loading"
     style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; background-color: #000; opacity: 0.5; z-index:9999;">
    <center style="position: absolute; top: 50%; left: 50%; color:#fff">请稍候...</center>
</div>
<div class="container">
    <div class="page-header">
        <h3>
            配置编辑器 &nbsp;<small>本地记录依赖浏览器缓存，清空缓存将丢失记录</small><img src="./static/gh_16e4613251a6_258.jpg" style="width:150px;height:150px;position:absolute; top:10px; right:10px">
        </h3>
    </div>
    <div class="row">
        <div class="btn-group btn-group-sm col-md-5" role="group">
            <button type="button" class="btn btn-success" onclick="show_visual('999999')">可视</button>
            <button type="button" class="btn btn-info" onclick="show_code('999999')">源码</button>
            <button type="button" class="btn btn-warning" onclick="empty_diy('999999')">清空</button>
            <button type="button" class="btn btn-primary" onclick="save_diy('999999')">保存</button>
        </div>
        <div class="col-md-5">
            <label class="btn btn-primary btn-sm">
                配置转图片 <input type="file" onchange="toImg(event)" style="display: none;">
            </label>
        </div>
    </div>
    <h4></h4>
    <form id="diy_cfg_jf_999999" style="display: none;"></form>
    <textarea rows="30" class="form-control" id="diy_cfg_code_999999" style="margin-top: 10px; display: none;"></textarea>    
</div>
</body>
<script src="//cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/bootstrap-notify@3.1.3/bootstrap-notify.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/bootbox@4.4.0/bootbox.min.js"></script>
<script src="./static/index.js"></script>
<script src="//cdn.jsdelivr.net/npm/underscore@1.13.1/underscore-min.js"></script>
<script src="//cdn.jsdelivr.net/npm/jquery-ui-dist@1.12.1/jquery-ui.min.js"></script>
<script src="//cdn.jsdelivr.net/gh/sytelus/CryptoJS@master/components/core-min.js"></script>
<script src="//cdn.jsdelivr.net/gh/sytelus/CryptoJS@master/components/cipher-core-min.js"></script>
<script src="//cdn.jsdelivr.net/gh/sytelus/CryptoJS@master/components/aes-min.js"></script>
<script src="//cdn.jsdelivr.net/gh/sytelus/CryptoJS@master/components/mode-ecb-min.js"></script>
<script src="//cdn.jsdelivr.net/npm/clipboard@2.0.8/dist/clipboard.min.js"></script>
<script src="./static/jsonform.js"></script>
<script src="./static/jsv.js"></script>
<script src="./static/editor.js"></script>
<script src="./static/jsonlint.js"></script>
</html>
