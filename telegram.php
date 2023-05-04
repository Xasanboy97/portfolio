<?php

// https://api.telegram.org/bot5993416767:AAFXxShydk2JWY95kNxk33UJZx_jM-9Te2E/getUpdates, 
$name = $_POST['user_name'];
$email = $_POST['user_email'];
$phone = $_POST['user_phone'];
$messages = $_POST['user_messages'];
$token = "5993416767:AAFXxShydk2JWY95kNxk33UJZx_jM-9Te2E";
$chart_id = "-1001953251423";
$arr = arry(
    'Имя пользователя: ' => $name,
    'Email: ' => $email,
    'Телефон: ' => $phone,
    'текст ' => $messages
);

foreach($arr as $key => $value){
    $text.="<b>".$key."</b>".$value."%0A";

   
}
$sendTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$text}","r");

if ($sendTelegram){
    echo'malumot yuborildi'
   
} 

