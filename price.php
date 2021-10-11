<?php
$name = $_POST['name'];
$name = htmlspecialchars($name);
$name = urldecode($name);
$name = trim($name);

$phone = $_POST['phone'];
$phone = htmlspecialchars($phone);
$phone = urldecode($phone);
$phone = trim($phone);

$typeclean = $_POST['typeclean'];
$typeclean = htmlspecialchars($typeclean);
$typeclean = urldecode($typeclean);
$typeclean = trim($typeclean);

$valueKomnat = $_POST['valueKomnat'];
$valueKomnat = htmlspecialchars($valueKomnat);
$valueKomnat = urldecode($valueKomnat);
$valueKomnat = trim($valueKomnat);

$valueTualet = $_POST['valueTualet'];
$valueTualet = htmlspecialchars($valueTualet);
$valueTualet = urldecode($valueTualet);
$valueTualet = trim($valueTualet);

$valueWindow = $_POST['valueWindow'];
$valueWindow = htmlspecialchars($valueWindow);
$valueWindow = urldecode($valueWindow);
$valueWindow = trim($valueWindow);

$nadoVimitStemi = $_POST['nadoVimitStemi'];
$nadoVimitStemi = htmlspecialchars($nadoVimitStemi);
$nadoVimitStemi = urldecode($nadoVimitStemi);
$nadoVimitStemi = trim($nadoVimitStemi);

$uborkalastrenovation = $_POST['uborkalastrenovation'];
$uborkalastrenovation = htmlspecialchars($uborkalastrenovation);
$uborkalastrenovation = urldecode($uborkalastrenovation);
$uborkalastrenovation = trim($uborkalastrenovation);

$NeedDryCleaning = $_POST['NeedDryCleaning'];
$NeedDryCleaning = htmlspecialchars($NeedDryCleaning);
$NeedDryCleaning = urldecode($NeedDryCleaning);
$NeedDryCleaning = trim($NeedDryCleaning);


$needCleanTrudno = $_POST['needCleanTrudno'];
$needCleanTrudno = htmlspecialchars($needCleanTrudno);
$needCleanTrudno = urldecode($needCleanTrudno);
$needCleanTrudno = trim($needCleanTrudno);


$furniture = $_POST['furniture'];
$furniture = htmlspecialchars($furniture);
$furniture = urldecode($furniture);
$furniture = trim($furniture);

$area = $_POST['area'];
$area = htmlspecialchars($area);
$area = urldecode($area);
$area = trim($area);


$needSushka = $_POST['needSushka'];
$needSushka = htmlspecialchars($needSushka);
$needSushka = urldecode($needSushka);
$needSushka = trim($needSushka);

$email = $_POST['email'];
$email = htmlspecialchars($email);
$email = urldecode($email);
$email = trim($email);



$subject = "=?utf-8?B?".base64_encode("Заявка Clean City")."?=";
$headers = "From: cleancityminsk@gmail.com\r\nContent-type: text/html; charset=utf-8\r\n";
$message = 'Имя: ' .$name. '<br/>Номер телефона: +' .$phone. '<br/>Тип уборки: ' .$typeclean. '<br/>Площадь помещения: ' .$area. '<br/>Количесьвл комнат: ' .$valueKomnat. '<br/>Количество сан узлов: ' .$valueTualet. '<br/>Количество окон: ' .$valueWindow. '<br/>Дополнительные опции: <br/>' .$nadoVimitStemi. '<br/>' .$uborkalastrenovation. '<br/>' .$NeedDryCleaning. '<br/>' .$needCleanTrudno. '<br/>' .$furniture. '<br/>' .$needSushka;  

$subject1 = "=?utf-8?B?".base64_encode("Price List на услуги Clean City")."?=";
$headers1 = "From: cleancityminsk@gmail.com\r\nContent-type: text/html; charset=utf-8\r\n";
$message1 = '
<h1 align=center> Добрый день! </h1>
        <div style="display: flex; width: 420px; margin: 0 auto; flex-direction: column;">
        <a href="https://yadi.sk/d/4mOiUGsiPNNuBA" style="color: green"> Ссылка на Price List + Зафиксированная скидка 35% </a>
        <a href="https://yadi.sk/d/4mOiUGsiPNNuBA" style=" width: 420px; margin: 10px auto"><button style="cursor: pointer; height: 50px; width: 420px;background-color: #ffc228; color: black;font-size: 16px;border: 0;border-radius: 6px;margin: 10px 0 30px 0px;">Price List</button></a>
    </div>
';  


if (mail($email, $subject1, $message1 ,$headers1))
{header("");}     

if (mail("cleancityminsk@gmail.com", $subject, $message ,$headers))
{header("Location: thanks.html");}     

?>
