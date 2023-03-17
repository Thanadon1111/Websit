const express = require('express');
const mydata = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CPE499NodeJS</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
</head>
<body>
    <style>
        *{
            background-color: antiquewhite;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            margin: 0;
            padding: 10px;
        }
        h2{
            text-align: center;
            color: red;
            font-weight: bold;
            background-color: white;
        }
        img {
            display: block;
            width: 400px;
            border-radius: 1rem;
            margin-left: 200px;
            margin-right: 200px;
        }
        .nav-bar{
            font-size: 20px;
        }
        .nav-bar ul li{
            display: inline-block;
            padding: 5px;
            font-weight: bold;
            padding-left: 200px ;
        }
        .nav-bar ul li a {
            text-decoration: none;
            text-align: center;
            color: rgb(211, 73, 9);
            transition: 0.5ms all ease;
        }
        .nav-bar ul li a:hover{
            color: white;
        }
        footer {
            text-align: center;
            font-weight: bold;
            font-size: 20px;
            color: red;
        }
    </style>
    <h2>ร้านกาแฟ</h2>
    <img src="https://s1.eestatic.com/2017/02/13/cocinillas/cocinillas_193495389_116293002_1024x576.jpg" alt="">
    <div class="nav-bar">
        <ul>
            <li><a href="#">หน้าแรก</a></li>
            <li><a href="#">ประเภทร้านกาแฟ</a></li>
            <li><a href="#">เกี่ยวกับเรา</a></li>
            <li><a href="#">เข้าสู่ระบบ</a></li>
        </ul>
    </div>
    <h4>ร้านกาแฟ</h4>
    <img src="https://sites.google.com/site/thurkicrankafae098/_/rsrc/1423060710283/home/health4-4.jpg" width="200px" alt="">
    <p>ร้านกาแฟ หรือ คาเฟ่ (อังกฤษ: Café) เป็นร้านประกอบกิจการเกี่ยวกับกาแฟ  ลักษณะร้านแบบคาเฟ่นั้น เป็นการผสมรูปแบบระหว่าง "ภัตตาคาร" และ "บาร์" เข้าด้วยกัน โดยทั่วไปคาเฟ่จะไม่จำหน่ายเครื่องที่มีแอลกอฮอล์ จะเน้นไปที่เครื่องดื่มประเภท กาแฟ ชา หรือ ช็อกโกแลต และอาจมีอาหารว่าง ซุป แชนวิช ขนมอบและขนมหวานที่เสิร์ฟเคียงกับเครื่องดื่ม เช่น เค้กหรือคุกกี้ไว้บริการด้วย</p>
    <h4>ประเภทร้านกาแฟ</h4>
    <p>ร้านกาแฟแบ่งเป็น 2 ประเภทหลักคือ แบบมีโต๊ะนั่งและแบบไม่มีโต๊ะนั่ง ซึ่งเมนูของร้านกาแฟจะเปลี่ยนแปลงไปตามเจ้าของร้านกาแฟนั้น ๆ เพื่อรสชาติที่เป็นเอกลักษณ์ มีการรวบรวมข้อมูลรีวิวร้านกาแฟ 2 ประเภทหลักเท่านั้น ปัจจุบันในประเทศไทยมีร้านกาแฟที่แพร่หลายเกือบทุกที่ไม่ว่าจะเป็นแบบรถเขน แบบบูธ เคาร์เตอร์ ร้านกาแฟคีออส และได้มีรวบรวม ร้านกาแฟทั่วประเทศเพื่อเป็นแหล่งเรียนรู้และแลกเปลี่ยนความรู้สำหรับคนที่ทำธุรกิจร้านกาแฟ</p>
    <footer>® By Sirawich Corp.</footer>
</body>
</html>`;
module.exports = mydata;