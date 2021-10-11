<?php
$name = $_POST['name'];
$name = htmlspecialchars($name);
$name = urldecode($name);
$name = trim($name);

$phone = $_POST['phone'];
$phone = htmlspecialchars($phone);
$phone = urldecode($phone);
$phone = trim($phone);

$comment = $_POST['comment'];
$comment = htmlspecialchars($comment);
$comment = urldecode($comment);
$comment = trim($comment);

$divan = $_POST['divan'];
$divan = htmlspecialchars($divan);
$divan = urldecode($divan);
$divan = trim($divan);

$matras = $_POST['matras'];
$matras = htmlspecialchars($matras);
$matras = urldecode($matras);
$matras = trim($matras);

$kover = $_POST['kover'];
$kover = htmlspecialchars($kover);
$kover = urldecode($kover);
$kover = trim($kover);

$furniture = $_POST['furniture'];
$furniture = htmlspecialchars($furniture);
$furniture = urldecode($furniture);
$furniture = trim($furniture);


$urlSource = $_POST['urlSource'];
$urlSource = htmlspecialchars($urlSource);
$urlSource = urldecode($urlSource);
$urlSource = trim($urlSource);

$urlAd = $_POST['urlAd'];
$urlAd = htmlspecialchars($urlAd);
$urlAd = urldecode($urlAd);
$urlAd = trim($urlAd);

$subject = "=?utf-8?B?".base64_encode("Заявка Сlean City")."?=";
$headers = "From: cleancityminsk@gmail.com\r\nContent-type: text/html; charset=utf-8\r\n";
$message = 'Имя: ' .$name. '<br/>Номер телефона: +' .$phone. '<br/>Комментарий: ' .$comment. '<br/> Мебель: ' .$divan. '<br/>' .$kover. '<br/>' .$matras. '<br/>' .$furniture. '<br/> Источник: ' .$urlSource. '<br/> Объявление: ' .$urlAd;  

if (mail("cleancityminsk@gmail.com", $subject, $message ,$headers))
{header("Location: thanks.html");}     

?>
