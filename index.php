<?php 
    $data = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/assets/json/certification.json');
    $json = json_decode($data);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/index.min.css">
    <title>Diego Mantegazza | Web Designer :)</title>
    <meta name="description" content="This is the personal portfolio website of Diego Mantegazza, a web designer based in Milan (IT). Here you can find a brief description of what I do and see some of my project.">
    <link rel="canonical" href="https://diegomantegazza.me">
    <style>
    body{
        overflow-y: hidden;
    }
    .loading-container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #0A0A0A;
        z-index: 1000;
    }
    .loading{
        display: flex;
        flex-direction: column;
        position: relative;
        gap: 1rem;
    }
    .loading svg{
        width: 175px;
        height: 121px;
        animation: spin 2s linear infinite;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        50% { transform: rotate(45deg); }
        100% { transform: rotate(0deg); }
    }
    </style>
    <noscript>
        <meta http-equiv="refresh" content="0; url=https://lite.diegomantegazza.me">
    </noscript>
    <?php require_once $_SERVER['DOCUMENT_ROOT'].'/templates/head.html'; ?>
</head>
<body>
    <div class="loading-container">
        <div class="loading">
            <svg viewBox="0 0 485 335" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M483.758 28.2825C475.677 14.2902 429.007 24.7166 363.939 52.114C311.824 -2.76672 227.154 -17.0314 158.704 22.4535C90.2685 61.9527 60.2922 142.383 81.7858 214.923C25.5157 257.544 -6.8536 292.732 1.22797 306.725C9.30955 320.717 55.9791 310.291 121.047 282.893C173.162 337.76 257.832 352.039 326.282 312.539C394.718 273.04 424.694 192.61 403.2 120.07C459.47 77.449 491.854 42.2604 483.772 28.2682L483.758 28.2825ZM56.8244 274.659C53.4284 268.772 65.8375 254.422 89.2512 235.245C91.6585 240.659 94.3522 246.001 97.3756 251.257C100.413 256.499 103.695 261.511 107.177 266.295C78.8626 276.979 60.2204 280.545 56.8244 274.659ZM113.969 241.676C110.444 235.575 107.435 229.33 104.87 222.986C102.176 216.312 99.9977 209.538 98.3212 202.692C92.3174 178.173 92.776 152.881 99.1381 129.107C108.982 92.4149 132.768 59.5324 168.29 39.0381C203.812 18.5438 244.177 14.4047 280.902 24.215C304.674 30.5882 326.827 42.8335 345.068 60.2916C350.154 65.161 354.94 70.4314 359.368 76.1028C363.581 81.5021 367.492 87.2304 371.017 93.3171C374.542 99.4182 377.537 105.663 380.116 112.007C349.28 135.351 306.006 163.723 256.743 192.151C207.48 220.58 161.254 243.853 125.618 258.876C121.405 253.477 117.494 247.748 113.969 241.661V241.676ZM385.848 205.9C376.004 242.592 352.218 275.475 316.696 295.969C281.174 316.463 240.795 320.602 204.084 310.792C180.312 304.419 158.159 292.174 139.918 274.716C178.177 257.616 221.608 235.431 266.687 209.423C311.781 183.401 352.705 156.905 386.651 132.329C392.654 156.848 392.196 182.14 385.834 205.914L385.848 205.9ZM395.749 99.7762C393.342 94.3626 390.648 89.0208 387.625 83.779C384.601 78.5373 381.306 73.5247 377.824 68.7413C406.138 58.0573 424.78 54.4911 428.176 60.3773C431.572 66.2492 419.163 80.6138 395.749 99.7762Z" fill="white"/>
            </svg>       
        </div>
    </div>

    <?php require_once $_SERVER['DOCUMENT_ROOT'].'/templates/layouts/header.html'; ?>
    <main>
        <div class="hero-text-container">
            <div class="hero-bg"></div>
            <h1 id="hero-text-animation">
                <span id="hero-text-1">I'M DIEGO <span>&#126;</span></span>
                <span id="hero-text-2"><span>&#126;</span> WEB DESIGNER</span>
            </h1>
            <p>My goal is to design/build modern, easy-to-use and graphically appealing responsive website for both companies and individuals. Get in touch!</p>
            <div class="hero-socials">
                <a id="hero-link-1" href="https://github.com/maekee-dev">
                    <img src="/assets/img/index/hero-github.svg" alt="Github icon" loading="lazy">
                </a>
                <a id="hero-link-2" href="https://t.me/dmantee">
                    <img src="/assets/img/index/hero-telegram.svg" alt="Telegram icon" loading="lazy">
                </a>
                <a id="hero-link-3" href="https://www.linkedin.com/in/diegomantegazza/">
                    <img src="/assets/img/index/hero-linkedin.svg" alt="LinkedIn icon" loading="lazy">
                </a>
            </div>
        </div>
        <div class="hero-mobile-background" style="background-image: url(/assets/img/index/hero-mobile-bg-<?php echo rand(1, 3) ?>.png);">
            <div class="gradient"></div>
            <div class="div"></div>
        </div>
    </main>

    <div id="panoramic-container" class="panoramic-container">
        <div class="hero-mobile-header">
            <div class="hero-mobile-menu-bar">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            <div class="hero-mobile-navbar">
                <p>@b94e:5513:aa09:a8e9:026d:4d3f:48eb:76a1</p>
                <span>/</span>
                <p>CORPORATE</p>
                <span>/</span>
                <p>DRIVE</p>
                <span>/</span>
                <p>SECRET</p>
                <span>/</span>
                <p>CAMERA</p>
            </div>
        </div>
        <div id="panoramic" class="panoramic">
            <div class="ext-item-1 hud-border-ext"></div>
            <div class="ext-item-2 hud-border-ext"></div>
            <div class="ext-item-3 hud-border-ext"></div>
            <div class="ext-item-4 hud-border-ext"></div>
            <div class="inn-item-1 hud-border-inn"></div>
            <div class="inn-item-2 hud-border-inn"></div>
            <div class="inn-item-3 hud-border-inn"></div>
            <div class="inn-item-4 hud-border-inn"></div>
            <div class="scope-1"></div>
            <div class="scope-2"></div>
            <div class="rec-text">
                <div id="rec-light"></div>
                <span>REC</span>
            </div>
        </div>
        <!--<div class="panoramic-blur"></div>-->
    </div>

    <section class="about-me">
        <div class="about-me-title">
            <h2><span class="title-alternative">A BIT</span> ABOUT ME</h2>
            <p>My way of working and some general information on me. Check out the <a href="/about-me/">about me</a> page to see more.</p>
        </div>
        <div class="about-me-body">
            <div class="about-me-text">
                <div id="about-me-item-1" class="about-me-item" onclick="setInfo(1)">
                    <div>
                        <div class="about-me-selector">
                            <div id="about-me-selector-1"></div>
                        </div>
                        <h3>MYSELF</h3>
                    </div>
                    <p>In the field for many years, I recently decided to use my knowledge to develop websites, becoming a web designer. I usually work with methodological approaches, going to meet customer needs with good UIs.</p>
                </div>
                <div id="about-me-item-2" class="about-me-item" onclick="setInfo(2)">
                    <div>
                        <div class="about-me-selector">
                            <div id="about-me-selector-2"></div>
                        </div>
                        <h3>DESIGN</h3>
                    </div>
                    <p>I like to experiment with different styles and layouts, mantaining the right balance between the artistic and functional parts. I'm always on the lookout for new structures and typography, keeping abreast of trends.</p>
                </div>
                <div id="about-me-item-3" class="about-me-item" onclick="setInfo(3)">
                    <div>
                        <div class="about-me-selector">
                            <div id="about-me-selector-3"></div>
                        </div>
                        <h3>CODE & IT</h3>
                    </div>
                    <p>I have the right software and hardware tools to develop performant and secure websites. My background allows me to have a broad knowledge of computer science, both the programming side and the internet side.</p>
                </div>
                <a id="about-me-link" href="/about-me/">MORE ABOUT ME <img src="/assets/img/button-arrow.svg" alt="button arrow" style="width: 11px; height: 11px;" loading="lazy"></a>
            </div>
            <div class="about-me-image">
                <div id="particles-container" class="about-me-style"></div>
                <div class="about-me-mobile">
                    <div class="about-me-mobile-header">
                        <div class="about-me-mobile-menu-bar">
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>
                        <div class="about-me-mobile-navbar">
                            <p>CORPORATE</p>
                            <span>/</span>
                            <p>DRIVE</p>
                            <span>/</span>
                            <p>SECRET</p>
                            <span>/</span>
                            <p>BIO-DATA</p>
                        </div>
                    </div>
                    <div class="about-me-mobile-body">
                        <div class="scanner">
                            <img src="/assets/img/index/hero-mobile-scan.png" alt="Scanning line" loading="lazy">
                        </div>
                        <img id="hero-face-1" src="/assets/img/index/hero-mobile-1.png" alt="Digital face turned right" loading="lazy">
                        <img id="hero-face-2" src="/assets/img/index/hero-mobile-2.png" alt="Digital face" loading="lazy">
                        <img id="hero-face-3" src="/assets/img/index/hero-mobile-3.png" alt="Digital face turned left" loading="lazy">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="methodologies">
        <div id="methodologies-item-1" class="methodologies-item" onmouseenter="setMethod(1)" onmouseleave="unsetMethod()">
            <span>DESIGN</span>
            <p>The first phase of the project is to develop the design agreed with the client. If you don't like it, there is still time to change it.</p>
            <div id="methodologies-style-1-1" class="methodologies-style methodologies-style-1"></div>
            <div id="methodologies-style-2-1" class="methodologies-style methodologies-style-2"></div>
            <div id="methodologies-style-3-1" class="methodologies-style methodologies-style-3"></div>
        </div>
        <div id="methodologies-item-2" class="methodologies-item" onmouseenter="setMethod(2)" onmouseleave="unsetMethod()">
            <span>DEVELOPMENT</span>
            <p>Once the design is completed, we move on to the actual development of the website through appropriate technologies.</p>
            <div id="methodologies-style-1-2" class="methodologies-style methodologies-style-1"></div>
            <div id="methodologies-style-2-2" class="methodologies-style methodologies-style-2"></div>
            <div id="methodologies-style-3-2" class="methodologies-style methodologies-style-3"></div>
        </div>
        <div id="methodologies-item-3" class="methodologies-item" onmouseenter="setMethod(3)" onmouseleave="unsetMethod()">
            <span>DEPLOYMENT</span>
            <p>The developed website is deployed on the best hosting services at the lowest possible price, always keeping data security in mind.</p>
            <div id="methodologies-style-1-3" class="methodologies-style methodologies-style-1"></div>
            <div id="methodologies-style-2-3" class="methodologies-style methodologies-style-2"></div>
            <div id="methodologies-style-3-3" class="methodologies-style methodologies-style-3"></div>
        </div>
    </section>

    <section class="technologies">
        <h2>I WORK WITH THE BEST TECHNOLOGIES ONLY</h2>
        <div>
            <div class="tech-elem tech-elem-1">
                <img src="/assets/img/index/technologies/html-over.svg" alt="html icon" loading="lazy">
            </div>
            <div class="tech-elem tech-elem-2">
                <img src="/assets/img/index/technologies/js-over.svg" alt="javascript icon" loading="lazy">
            </div>
            <div class="tech-elem tech-elem-3">
                <img src="/assets/img/index/technologies/php-over.svg" alt="php icon" loading="lazy">
            </div>
            <div class="tech-elem tech-elem-4">
                <img src="/assets/img/index/technologies/figma-over.svg" alt="figma icon" loading="lazy">
            </div>
            <div class="tech-elem tech-elem-5">
                <img src="/assets/img/index/technologies/nodejs-over.svg" alt="node js icon" loading="lazy">
            </div>
            <div class="tech-elem tech-elem-6">
                <img src="/assets/img/index/technologies/sass-over.svg" alt="sass icon" loading="lazy">
            </div>
            <span>+</span>
        </div>
    </section>

    <section class="game-section">
        <div class="os-game-container">
            <div class="game-canvas">
                <canvas></canvas>
                <span id="game-score"></span>
            </div>
            <div class="os-game-header">
                <div class="game-menu-bar">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                <div class="game-navbar">
                    <p>HOME</p>
                    <span>/</span>
                    <p>DRIVE</p>
                    <span>/</span>
                    <p>PERSONAL</p>
                    <span>/</span>
                    <p>SYSDWD</p>
                    <span>/</span>
                    <p>GAMES</p>
                    <span>/</span>
                    <p>SPACE-INVADERS</p>
                </div>
            </div>
            <div class="os-game-body">
                <div class="game-errors">
                    <span>Your device isn't supported :(</span>
                </div>
                <div class="game-over">
                    <span>GAME OVER</span>
                    <div class="game-over-bg"></div>
                </div>
                <div class="game-overlay">
                    <span id="game-countdown">3</span>
                </div>
                <div class="console">
                    <p data-nosnippet> Encrypting files in C:\---\###\media\space-invaders\<br>
                    img <?php for($i = 0; $i < 15; $i++) echo '&nbsp;'; ?> [OK]<br>
                    index.html <?php for($i = 0; $i < 15; $i++) echo '&nbsp;'; ?>         [OK]<br>
                    index.js <?php for($i = 0; $i < 15; $i++) echo '&nbsp;'; ?>           [OK]<br>
                    <br>
                    3 file(s) [or directorie(s)] within 1 directorie(s) were encrypted.<br>
                    <br>
                    Converting files from plaintext to ciphertext may leave sections of old
                    plaintext on the disk volume(s). It is recommended to use command
                    CIPHER /W:directory to clean up the disk after all converting is done. <br>
                    <br>
                    TCP<?php for($i = 0; $i < 5; $i++) echo '&nbsp;'; ?>[::]:80<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>[::]:0<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>LISTENING<?php for($i = 0; $i < 15; $i++) echo '&nbsp;'; ?>12372<br>
                    TCP<?php for($i = 0; $i < 5; $i++) echo '&nbsp;'; ?>[::]:135<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>[::]:0<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>LISTENING<?php for($i = 0; $i < 15; $i++) echo '&nbsp;'; ?>1388<br>
                    TCP<?php for($i = 0; $i < 5; $i++) echo '&nbsp;'; ?>[::]:443<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>[::]:0<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>LISTENING<?php for($i = 0; $i < 15; $i++) echo '&nbsp;'; ?>12372<br>
                    TCP<?php for($i = 0; $i < 5; $i++) echo '&nbsp;'; ?>[::]:445<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>[::]:0<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>LISTENING<?php for($i = 0; $i < 15; $i++) echo '&nbsp;'; ?>4<br>
                    TCP<?php for($i = 0; $i < 5; $i++) echo '&nbsp;'; ?>[::]:1462<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>[::]:0<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>LISTENING<?php for($i = 0; $i < 15; $i++) echo '&nbsp;'; ?>4<br>
                    TCP<?php for($i = 0; $i < 5; $i++) echo '&nbsp;'; ?>[::]:5357<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>[::]:0<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>LISTENING<?php for($i = 0; $i < 15; $i++) echo '&nbsp;'; ?>4<br>
                    TCP<?php for($i = 0; $i < 5; $i++) echo '&nbsp;'; ?>[::]:8080<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>[::]:0<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>LISTENING<?php for($i = 0; $i < 15; $i++) echo '&nbsp;'; ?>4<br>
                    TCP<?php for($i = 0; $i < 5; $i++) echo '&nbsp;'; ?>[::]:49664<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>[::]:0 <?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>LISTENING<?php for($i = 0; $i < 15; $i++) echo '&nbsp;'; ?>1152<br>
                    TCP<?php for($i = 0; $i < 5; $i++) echo '&nbsp;'; ?>[::]:49667<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>[::]:0<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>LISTENING<?php for($i = 0; $i < 15; $i++) echo '&nbsp;'; ?>2580<br>
                    TCP<?php for($i = 0; $i < 5; $i++) echo '&nbsp;'; ?>[::]:49668<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>[::]:0<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>LISTENING<?php for($i = 0; $i < 15; $i++) echo '&nbsp;'; ?>3584<br>
                    TCP<?php for($i = 0; $i < 5; $i++) echo '&nbsp;'; ?>[::]:49670<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>[::]:0<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>LISTENING<?php for($i = 0; $i < 15; $i++) echo '&nbsp;'; ?>1128<br>
                    TCP<?php for($i = 0; $i < 5; $i++) echo '&nbsp;'; ?>[::1]:7679<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>[::]:0<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>LISTENING<?php for($i = 0; $i < 15; $i++) echo '&nbsp;'; ?>2416<br>
                    <br>
                    Interface: 192.168.1.50 --- 0xc<br>
                    Internet Address<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>Physical Address<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>Type<br>
                    192.168.1.1<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>e4-8f-34-21-a1-84<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>dynamic<br>
                    192.168.1.119<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>da-f0-6b-93-43-77<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>dynamic<br>
                    192.168.1.129<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>ae-a8-10-57-63-df<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>dynamic<br>
                    192.168.1.131<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>42-f2-14-c0-e2-a1<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>dynamic<br>
                    192.168.1.255<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>ff-ff-ff-ff-ff-ff<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>static<br>
                    224.0.0.2<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>01-00-5e-00-00-02<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>static<br>
                    224.0.0.22<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>01-00-5e-00-00-16<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>static<br>
                    224.0.0.251<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>01-00-5e-00-00-fb<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>static<br>
                    224.0.0.252<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>01-00-5e-00-00-fc<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>static<br>
                    239.255.255.250<?php for($i = 0; $i < 10; $i++) echo '&nbsp;'; ?>01-00-5e-7f-ff-fa     static<br>
                    <br>
                    @23.188.1.32 > _
                    </p>
                </div>
                <div class="game">
                    <h2><span>SPACE INVADERS</span>SPACE INVADERS</h2>
                </div>
                <div class="info">
                    <span id="info-game-hour">##:##</span>
                    <span id="info-game-date">##/##/####</span>
                </div>
                <div class="commands">
                    <div class="command-container">
                        <p>SHOOT</p>
                        <div>
                            <span>W</span>
                        </div>
                    </div>
                    <div class="command-container">
                        <p>LEFT</p>
                        <div>
                            <span>A</span>
                        </div>
                        <p>/</p>
                        <div>
                            <span>&larr;</span>
                        </div>
                    </div>
                    <div class="command-container">
                        <p>RIGHT</p>
                        <div>
                            <span>D</span>
                        </div>
                        <p>/</p>
                        <div>
                            <span>&rarr;</span>
                        </div>
                    </div>
                </div>
                <div class="folders">
                    <div>
                        <img src="/assets/img/space-invaders/folders/folder-1.png" alt="folder icon" style="width: 32px; height: 32px;" loading="lazy">
                    </div>
                    <div>
                        <img src="/assets/img/space-invaders/folders/folder-2.png" alt="folder icon" style="width: 32px; height: 32px;" loading="lazy">
                    </div>
                    <div>
                        <img src="/assets/img/space-invaders/folders/folder-3.png" alt="folder icon" style="width: 32px; height: 32px;" loading="lazy">
                    </div>
                    <div>
                        <img src="/assets/img/space-invaders/folders/folder-4.png" alt="folder icon" style="width: 32px; height: 32px;" loading="lazy">
                    </div>
                    <div>
                        <img src="/assets/img/space-invaders/folders/folder-5.png" alt="folder icon" style="width: 32px; height: 32px;" loading="lazy">
                    </div>
                    <div>
                        <img src="/assets/img/space-invaders/folders/folder-6.png" alt="folder icon" style="width: 32px; height: 32px;" loading="lazy">
                    </div>
                    <div>
                        <img src="/assets/img/space-invaders/folders/folder-7.png" alt="folder icon" style="width: 32px; height: 32px;" loading="lazy">
                    </div>
                </div>
                <div class="buttons">
                    <button onclick="startGame()">PLAY GAME <img src="/assets/img/space-invaders/button-game.svg" alt="game monster icon" loading="lazy"></button>
                    <a href="/projects/">SEE PROJECTS</a>
                </div>
                <div class="style-1">
                    <span>S.E.A. LEVELS</span>
                    <div id="os-style-1-0">
                        <div></div>
                    </div>
                    <div id="os-style-1-1">
                        <div></div>
                    </div>
                    <div id="os-style-1-2">
                        <div></div>
                    </div>
                    <div id="os-style-1-3">
                        <div></div>
                    </div>
                    <div id="os-style-1-4">
                        <div></div>
                    </div>
                    <div id="os-style-1-5">
                        <div></div>
                    </div>
                </div>
                <div class="style-2">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="style-3">
                    <span>###</span>
                    <div class="graph-grid">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <?php for($i = 0; $i < 40; $i++) echo '<div id="os-style-3-'.$i.'" class="s"></div>'; ?>
                </div>
                <div class="style-4">
                    <div class="line"></div>
                    <?php for($i = 0; $i < 20; $i++) echo '<div id="os-style-4-'.$i.'" class="d"></div>'; ?>
                </div>
            </div>
        </div>
    </section>

    <section class="projects">
        <div class="projects-title">
            <h2>PROJECTS <span class="title-alternative">SHOWCASE</span></h2>
            <p>A small collection of some of my projects developed for the web. If you are interested in seeing more, check out the <a href="/projects/" title="projects">projects</a> page.</p>
        </div>
        <div class="projects-body">
            <a href="https://edilmantegazza.it" target="_blank">
                <div class="projects-item projects-item-1">
                    <div>
                        <span>MANTEGAZZA SRL</span>
                    </div>
                    <div class="project-window" id="project-window-1"></div>
                </div>
            </a>
            <a href="https://valtrighebasketball.com" target="_blank">
                <div class="projects-item projects-item-2">
                    <div>
                        <span>VALTRIGHE BASKET</span>
                    </div>
                    <div class="project-window" id="project-window-2"></div>
                </div>
            </a>
            <a href="https://arkitechstp.it" target="_blank">
                <div class="projects-item projects-item-3">
                    <div>
                        <span>ARKITECH STP</span>
                    </div>
                    <div class="project-window" id="project-window-3"></div>
                </div>
            </a>
        </div>
        <a class="project-link" href="/projects/">MORE PROJECTS <img src="/assets/img/button-arrow.svg" alt="button arrow" style="width: 11px; height: 11px;" loading="lazy"></a>
    </section>

    <section class="design">
        <div class="design-title">
            <h2><span class="title-alternative">OTHER</span> DESIGN</h2>
            <p>A collection of some designs made with Figma. Click on the name to see the related image.</p>
        </div>
        <div class="design-body">
            <div class="design-selection">
                <div id="design-selector-1" class="design-selector" onclick="setDesign(1)">
                    <div class="selector-wrapper">
                        <span id="design-item-1"></span>
                        <div class="selector-active">
                            <div id="selector-active-1" class="selector-active-inner"></div>
                            <div class="selector-mobile selector-mobile-1"></div>
                            <div class="selector-mobile selector-mobile-2"></div>
                        </div>
                    </div>
                    <div class="mobile-design-viewer">
                        <div class="mobile-design-1"></div>
                    </div>
                </div>
                <div id="design-selector-2" class="design-selector" onclick="setDesign(2)">
                    <div class="selector-wrapper">
                        <span id="design-item-2"></span>
                        <div class="selector-active">
                            <div id="selector-active-2" class="selector-active-inner"></div>
                            <div class="selector-mobile selector-mobile-1"></div>
                            <div class="selector-mobile selector-mobile-2"></div>
                        </div>
                    </div>
                    <div class="mobile-design-viewer">
                        <div class="mobile-design-2"></div>
                    </div>
                </div>
                <div id="design-selector-3" class="design-selector" onclick="setDesign(3)">
                    <div class="selector-wrapper">
                        <span id="design-item-3"></span>
                        <div class="selector-active">
                            <div id="selector-active-3" class="selector-active-inner"></div>
                            <div class="selector-mobile selector-mobile-1"></div>
                            <div class="selector-mobile selector-mobile-2"></div>
                        </div>
                    </div>
                    <div class="mobile-design-viewer">
                        <div class="mobile-design-3"></div>
                    </div>
                </div>
                <div id="design-selector-4" class="design-selector" onclick="setDesign(4)">
                    <div class="selector-wrapper">
                        <span id="design-item-4"></span>
                        <div class="selector-active">
                            <div id="selector-active-4" class="selector-active-inner"></div>
                            <div class="selector-mobile selector-mobile-1"></div>
                            <div class="selector-mobile selector-mobile-2"></div>
                        </div>
                    </div>
                    <div class="mobile-design-viewer">
                        <div class="mobile-design-4"></div>
                    </div>
                </div>
                <div id="design-selector-5" class="design-selector" onclick="setDesign(5)">
                    <div class="selector-wrapper">
                        <span id="design-item-5"></span>
                        <div class="selector-active">
                            <div id="selector-active-5" class="selector-active-inner"></div>
                            <div class="selector-mobile selector-mobile-1"></div>
                            <div class="selector-mobile selector-mobile-2"></div>
                        </div>
                    </div>
                    <div class="mobile-design-viewer">
                        <div class="mobile-design-5"></div>
                    </div>
                </div>
                <div id="design-selector-6" class="design-selector" onclick="setDesign(6)">
                    <div class="selector-wrapper">
                        <span id="design-item-6"></span>
                        <div class="selector-active">
                            <div id="selector-active-6" class="selector-active-inner"></div>
                            <div class="selector-mobile selector-mobile-1"></div>
                            <div class="selector-mobile selector-mobile-2"></div>
                        </div>
                    </div>
                    <div class="mobile-design-viewer">
                        <div class="mobile-design-6"></div>
                    </div>
                </div>
                <div id="design-selector-7" class="design-selector" onclick="setDesign(7)">
                    <div class="selector-wrapper">
                        <span id="design-item-7"></span>
                        <div class="selector-active">
                            <div id="selector-active-7" class="selector-active-inner"></div>
                            <div class="selector-mobile selector-mobile-1"></div>
                            <div class="selector-mobile selector-mobile-2"></div>
                        </div>
                    </div>
                    <div class="mobile-design-viewer">
                        <div class="mobile-design-7"></div>
                    </div>
                </div>
            </div>
            <div class="design-viewer">
                <div class="design-container">
                    <div id="noise-effect">
                        <svg>
                            <filter id="noise">
                                <feTurbulence id="turbulence">
                                    <animate attributeName="baseFrequency" dur="50s" values="0.9 0.9;0.8 0.8; 0.9 0.9" repeatCount="indefinite"></animate>
                                </feTurbulence>
                                <feDisplacementMap in="SourceGraphic" scale="60"></feDisplacementMap>
                            </filter>
                        </svg>
                    </div>
                    <img class="design-image" id="design-image-1" src="/assets/img/index/design/other-design-img-1.webp" loading="lazy" alt="Landing page for an album release">
                    <img class="design-image" id="design-image-2" src="/assets/img/index/design/other-design-img-2.webp" loading="lazy" alt="Landing page for a social web app">
                    <img class="design-image" id="design-image-3" src="/assets/img/index/design/other-design-img-3.webp" loading="lazy" alt="Landing page for a workplace brochure download website">
                    <img class="design-image" id="design-image-4" src="/assets/img/index/design/other-design-img-4.webp" loading="lazy" alt="Landing page for an artistic website on art deco">
                    <img class="design-image" id="design-image-5" src="/assets/img/index/design/other-design-img-5.webp" loading="lazy" alt="Landing page for a photography studio">
                    <img class="design-image" id="design-image-6" src="/assets/img/index/design/other-design-img-6.webp" loading="lazy" alt="Landing page for a museum exhibition website">
                    <img class="design-image" id="design-image-7" src="/assets/img/index/design/other-design-img-7.webp" loading="lazy" alt="Amazon Prime Video redesign experiment">
                </div>
                <div class="design-info">
                    <span id="design-selection-name"></span>
                    <a id="design-selection-url" target="_blank"><img src="/assets/img/button-arrow-dk.svg" alt="button arrow" style="width: 11px; height: 11px;" loading="lazy"></a>
                </div>
            </div>
        </div>
    </section>

    <section class="certification">
        <div class="certification-title">
            <h2><span class="title-alternative">SOME</span> CERTIFICATION</h2>
            <p>Some certification obtained during my studies or independently. Click on the link to view the certificate.</p>
        </div>
        <div class="certification-first-line"></div>
        <a class="small certification-link" href="<?php echo $json->certification[0]->url ?>" target="_blank">
            <div class="certification-item">
                <span id="certification-item-1"><?php echo $json->certification[0]->nome ?></span>
                <div>
                    <img src="/assets/img/button-arrow.svg" alt="button arrow" style="width: 11px; height: 11px;" loading="lazy">
                </div>
            </div>
        </a>
        <div class="certification-connection"></div>
        <a class="certification-link" href="<?php echo $json->certification[1]->url ?>" target="_blank"> 
            <div class="certification-item">
                <span id="certification-item-2"><?php echo $json->certification[1]->nome ?></span>
                <div>
                    <img src="/assets/img/button-arrow.svg" alt="button arrow" style="width: 11px; height: 11px;" loading="lazy">
                </div>
            </div>
        </a>
        <div class="certification-connection"></div>
        <a class="certification-link" href="<?php echo $json->certification[2]->url ?>" target="_blank">
            <div class="certification-item">
                <span id="certification-item-3"><?php echo $json->certification[2]->nome ?></span>
                <div>
                    <img src="/assets/img/button-arrow.svg" alt="button arrow" style="width: 11px; height: 11px;" loading="lazy">
                </div>
            </div>
        </a>
        <div class="certification-connection"></div>
        <a class="certification-link" href="<?php echo $json->certification[3]->url ?>" target="_blank" >
            <div class="certification-item">
                <span id="certification-item-4"><?php echo $json->certification[3]->nome ?></span>
                <div>
                    <img src="/assets/img/button-arrow.svg" alt="button arrow" style="width: 11px; height: 11px;" loading="lazy">
                </div>
            </div>
        </a>
        <div class="certification-connection"></div>
        <a class="certification-link" href="<?php echo $json->certification[4]->url ?>" target="_blank">
            <div class="certification-item">
                <span id="certification-item-5"><?php echo $json->certification[4]->nome ?></span>
                <div>
                    <img src="/assets/img/button-arrow.svg" alt="button arrow" style="width: 11px; height: 11px;" loading="lazy">
                </div>
            </div>
        </a>
        <div class="certification-last-line"></div>
    </section>

    <?php require_once $_SERVER['DOCUMENT_ROOT'].'/templates/layouts/footer.html'; ?> 
    <?php require_once $_SERVER['DOCUMENT_ROOT'].'/templates/footer-scripts.html'; ?>
    <script src="/assets/js/lib/text-plugin.min.js" async defer></script>
    <script src="/assets/js/index.min.js" defer></script>
    <script>
        const loadDesktopScript = () => {
            if (window.innerWidth >= 1024) {
                const script = document.createElement("script")
                script.type = "module"
                script.src = "/assets/js/index-only-desktop.min.js"
                script.async = true
                script.defer = true
                document.body.appendChild(script)
            }
        }
        loadDesktopScript();
        window.addEventListener("resize", loadDesktopScript);
    </script>
    <script src="/assets/js/space-invaders/main.min.js" async defer></script> 
    <script>
        window.addEventListener("load", () => {
            gsap.to('.loading-container', {opacity: 0, display: 'none'})
            document.body.style.overflowY = 'auto'
        })
    </script>
</body>
</html>