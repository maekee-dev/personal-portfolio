<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php require_once $_SERVER['DOCUMENT_ROOT'].'/templates/head.html'; ?>
    <link rel="stylesheet" href="/assets/css/404.min.css">
    <title>Diego Mantegazza | About Me</title>
</head>
<body>
<?php require_once $_SERVER['DOCUMENT_ROOT'].'/templates/layouts/header.html'; ?>
    <div class="text-container">
        <span>WORK IN PROGRESS </span>
        <h1>it seems you've arrived too early!</h1>
        <a href="/">BACK TO HOME <img src="/assets/img/button-arrow-dk.svg" alt=""></a>
    </div>
    <div id="panoramic"></div>
    <div class="mobile-container">
        <div></div>
    </div>

    <script type="module">
        import*as THREE from"/assets/js/lib/three-js.min.js";const containerPano=document.getElementById("panoramic");let containerWidth=containerPano.offsetWidth,containerHeight=containerPano.offsetHeight;const scenePano=new THREE.Scene,cameraPano=new THREE.PerspectiveCamera(75,containerWidth/containerHeight,.1,1e3),rendererPano=new THREE.WebGLRenderer;rendererPano.setSize(containerWidth,containerHeight),containerPano.appendChild(rendererPano.domElement);const geometryPano=new THREE.SphereGeometry(500,60,40);geometryPano.scale(-1,1,1);const loader=new THREE.TextureLoader;let texture=loader.load("/assets/img/about-me/panoramic-temp.jpeg");const materialPano=new THREE.MeshBasicMaterial({map:texture}),spherePano=new THREE.Mesh(geometryPano,materialPano);scenePano.add(spherePano),cameraPano.position.set(0,0,.1);let lastTime=0;const rotationSpeed=1e-4,animatePanoramic=time=>{if(requestAnimationFrame(animatePanoramic),window.innerWidth<1024)return;const delta=time-lastTime;lastTime=time,spherePano.rotation.y+=1e-4*delta,rendererPano.render(scenePano,cameraPano)};animatePanoramic(0),window.addEventListener("resize",()=>{containerWidth=containerPano.offsetWidth,containerHeight=containerPano.offsetHeight,rendererPano.setSize(containerWidth,containerHeight),cameraPano.aspect=containerWidth/containerHeight,cameraPano.updateProjectionMatrix()});
    </script>
    <script src="/assets/js/lib/gsap.min.js"></script>
    <script src="/assets/js/general.min.js"></script>
</body>


</html>