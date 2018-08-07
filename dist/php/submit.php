<?php

$recepient = "zenchenko.michail@gmail.com";
$sitename  = "Tea";//имя сайта

$email      = trim($_POST["email"]);
$pfone     = trim($_POST["pfone"]);
$message      = trim($_POST["message"]);
$message   = "Имя: $email \nТелефон: $pfone \nСообщение: $message";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");






// if(!empty($_POST['email']) AND !empty($_POST['pfone']) AND !empty($_POST['message'])) {
// 	$headers = 'From: Michail Zenchenko\r\n'.
// 			   'Reply-To: zenchenko.michail@gmail.com\r\n'.
// 			   'X-Mailer: PHP/'. phpversion();

// 	$theme   = 'Новое сообщение';

// 	$letter = 'Данные сообщения с Tea:\r\n';
// 	$letter .='Email: '.$_POST['email'].'\r\n';
// 	$letter .='Телефон: '.$_POST['pfone'].'\r\n';
// 	$letter .='Сообщение: '.$_POST['message'].'\r\n';

// 	if (mail('zenchenko.michail@gmail.com', $theme, $letter, $headers)) {
// 		header('Location:/dist/php/submit.php');
// 	} else {
// 		headers('Location:/thankyou.php');
// 	}
// } else {
// 	header('Location:/');
// }












// Рабочая форма ))))))))))))))16 05 2018г.
/* форма в index.php
<form  action="/dist/php/submit.php" method="POST">

	<input name="email" id="" class="" type="email" placeholder="    @mail для связи">

	<input name="pfone" id="" class="" type="text" placeholder="    телефон для связи">

	<textarea name="message" id="" class="" type="text" placeholder="   Опишите заказ" cols="30" rows="10"></textarea>

	<button type="submit" class="">
		<h2>Заказать</h2>
	</button>

</form.
*/