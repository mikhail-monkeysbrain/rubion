<?php

$recepient = "zelenin-v@mail.ru";
$sitename = "rubikon";


$name = trim($_POST["name2"]);
$phone = trim($_POST["phone2"]);

$message = "Имя: $name \nТелефон: $phone ";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>