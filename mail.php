<?php

$recepient = "gamanm.web@yandex.ru";
$sitename = "BTN group";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$from = trim($_POST["from"]);
$where = trim($_POST["where"]);
$message = "Имя: $name \nТелефон: $phone \nОткуда: $from \nКуда: $where";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");