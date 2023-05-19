<?php 
    $data = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/assets/json/projects.json');
    $json = json_decode($data);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/projects.min.css">
    <title>Diego Mantegazza | Projects </title>
    <meta name="description" content="Here some of the stuff i coded or designed. Let's have a look!">
    <link rel="canonical" href="https://diegomantegazza.me/projects/">
    <noscript>
        <meta http-equiv="refresh" content="0; url=https://lite.diegomantegazza.me/projects/">
    </noscript>
    <?php require_once $_SERVER['DOCUMENT_ROOT'].'/templates/head.html'; ?>
</head>
<body>
    <?php require_once $_SERVER['DOCUMENT_ROOT'].'/templates/layouts/header.html'; ?>
    <main>
        <div class="projects-container">
            <h1>SHOWCASE</h1>
            <div class="projects-grid">
                <?php foreach($json->projects as $project){ ?>
                    <a href="<?php echo $project->url ?>" target="_blank">
                        <div class="projects-item">
                            <span><?php echo $project->nome ?></span>
                            <div>
                                <img src="/assets/img/button-arrow.svg" alt="button arrow" loading="lazy">
                            </div>
                        </div>
                    </a>
                <?php } ?> 
            </div>
            <div class="other-projects-container">
                <h3>OTHER PROJECTS</h3>
                <?php foreach($json->other_projects as $project){ ?>
                    <a href="<?php echo $project->url ?>" target="_blank">
                        <div class="other-projects-item">
                            <span><?php echo $project->nome ?></span>
                        </div>
                    </a>
                <?php } ?> 
            </div>
        </div>
    </main>
    <?php require_once $_SERVER['DOCUMENT_ROOT'].'/templates/layouts/footer.html'; ?> 
    <?php require_once $_SERVER['DOCUMENT_ROOT'].'/templates/footer-scripts.html'; ?>
</body>
</html>