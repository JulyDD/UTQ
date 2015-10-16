<?php
  // requires php5
  define('UPLOAD_DIR', 'images_new/');
  $getajax=json_decode (file_get_contents("php://input"));
  if($getajax->title=='avatar'){
  	$img = $getajax->data;
 	$img = str_replace('data:image/png;base64,', '', $img);
  	$img = str_replace(' ', '+', $img);
  	$data = base64_decode($img);
  	$file = UPLOAD_DIR . uniqid() . '.png';
  	$success = file_put_contents($file, $data);
  	print $success ? $file . '提交图片成功！' : 'Unable to save the file.';
  }
?>