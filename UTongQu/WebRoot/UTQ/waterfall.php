
<?php
$getajax=json_decode (file_get_contents("php://input"));
if($getajax->title=='test'){
	      $data='{"data":[{"img":"8.jpg","content":"11","title":"童趣游戏","headpic":"afw_03.jpg","person":"黑子1","time":"2014-05-05 12:09:09","like":"10","dislike":"0","comment":"0"},
	                      {"img":"2.jpg","content":"22","title":"童趣回忆","headpic":"afw_03.jpg","person":"黑子2","time":"2012-04-15 17:07:28","like":"10","dislike":"0","comment":"0"},
						  {"img":"3.jpg","content":"33","title":"童趣玩具","headpic":"afw_03.jpg","person":"黑子3","time":"2012-05-05 12:09:09","like":"10","dislike":"0","comment":"0"},
						  {"img":"4.jpg","content":"4测试","title":"童趣动漫","headpic":"afw_03.jpg","person":"黑子4","time":"2012-04-15 17:07:28","like":"10","dislike":"0","comment":"0"},
						  {"img":"5.jpg","content":"5占位","title":"童趣动漫","headpic":"afw_03.jpg","person":"黑子5","time":"2012-05-05 12:09:09","like":"10","dislike":"0","comment":"0"},
						  {"img":"6.jpg","content":"6占位","title":"童趣动漫","headpic":"afw_03.jpg","person":"黑子6","time":"2012-04-15 17:07:28","like":"10","dislike":"0","comment":"0"},
						  {"img":"7.jpg","content":"占位","title":"童趣动漫","headpic":"afw_03.jpg","person":"黑子7","time":"2012-04-15 17:07:28","like":"10","dislike":"0","comment":"0"}
			   ]}';
	echo "$data";
}
?>