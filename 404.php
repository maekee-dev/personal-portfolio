<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php require_once $_SERVER['DOCUMENT_ROOT'].'/templates/head.html'; ?>
    <link rel="stylesheet" href="/assets/css/404.min.css">
    <title>Diego Mantegazza | Page Not Found [404]</title>
</head>
<body>
    <?php require_once $_SERVER['DOCUMENT_ROOT'].'/templates/layouts/header.html'; ?>
    <div class="text-container">
        <span>ERROR 404 - PAGE NOT FOUND </span>
        <h1>how did you end up here?</h1>
        <a href="/">BACK TO HOME <img src="/assets/img/button-arrow-dk.svg" alt=""></a>
    </div>
    <div id="panoramic"></div>
    <div class="mobile-container">
        <div></div>
    </div>
    <script type="module" src="/assets/js/404.min.js"></script>
    <script src="/assets/js/lib/gsap.min.js"></script>
    <script src="/assets/js/general.min.js"></script>
</body>


</html>