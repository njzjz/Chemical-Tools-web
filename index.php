<!DOCTYPE html>
<html lang="zh-cn">
  <head>
   <meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>首页 -- 化学e+</title>
<?php include 'head.php';?>
  </head>
  <body>
<?php include 'header.php';?>
    <section class="main-content">		
<?php
require 'load.php';
include 'title.php';
require 'doyouknow.php';
?>
<h2><img src="/ico/red_apple.png" width=30 height=30>你知道吗？</h2>
<p><?=$doyouknow?></p>
<?php
if ($currentUser != null) {
	$element=$currentUser->get("historyElementOutputHtml");
	if($element=="")$element="您尚未使用本功能，赶快试试吧！";
	$mass=$currentUser->get("historyMassOutput");
	if($mass=="")$mass="您尚未使用本功能，赶快试试吧！";
	$acid=$currentUser->get("historyAcidOutput");
	if($acid=="")$acid="您尚未使用本功能，赶快试试吧！";
	$correct=(int)($currentUser->get("examCorrectNumber"));
	$incorrect=(int)($currentUser->get("examIncorrectnumber"));
	$sum=$correct+$incorrect;
	$rate=(double)$correct/(double)$sum*100;
	if($sum>0)$exam= '共回答'.$sum.'题，其中'.$correct.'题正确，正确率为'.sprintf("%.2f", $rate).'%';
	else $exam="您尚未使用本功能，赶快试试吧！";
}else{
	$element='<a href="login.php">登陆</a>或<a href="signup.php">注册</a>后，即可查看历史记录，赶快试试吧！';
	$mass='<a href="login.php">登陆</a>或<a href="signup.php">注册</a>后，即可查看历史记录，赶快试试吧！';
	$acid='<a href="login.php">登陆</a>或<a href="signup.php">注册</a>后，即可查看历史记录，赶快试试吧！';
	$exam='<a href="login.php">登陆</a>或<a href="signup.php">注册</a>后，即可存储战绩，赶快试试吧！';
}
?>
<h2><img src="/ico/blue_apple.png" width=30 height=30><a href="element.php">元素查询</a></h2>
<p><?=nl2br($element)?></p>
<h2><img src="/ico/lime_apple.png" width=30 height=30><a href="mass.php">质量计算</a></h2>
<p><?=nl2br($mass)?></p>
<h2><img src="/ico/gray_apple.png" width=30 height=30><a href="acid.php">酸碱计算</a></h2>
<p><?=nl2br($acid)?></p>
<h2><img src="/ico/orange_apple.png" width=30 height=30><a href="exam.php">元素记忆</a></h2>
<p><?=nl2br($exam)?></p>
<?php
include 'foot.php';?>
    </section>
  </body>
</html>