<?php

$recepient = "monkeysbrain@yandex.ru";
$sitename = "fex";


$phone = trim($_POST["fio"]);
$age1 = trim($_POST["birth1"]);
$age2 = trim($_POST["birth2"]);
$age3 = trim($_POST["birth3"]);
$phone = trim($_POST["phone"]);

$message = "Имя: $name \nТелефон: $phone \nВозраст: $age1, $age2, $age3";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>