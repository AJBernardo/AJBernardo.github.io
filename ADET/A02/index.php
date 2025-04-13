<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Café LycoReco</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700&display=swap"
        rel="stylesheet">
    <link href="assets/fonts/font.css" rel="stylesheet">
    <link href="assets/img/CafeLycoReco_Logo.svg" rel="icon">
    <link href="assets/css/style.css" rel="stylesheet">
</head>

<body>
    <div>
        <nav class="navbar bg-navbar py-0">
            <div class="container-fluid d-flex justify-content-center align-content-center">
                <a href="#">
                    <h1 class="diplay-1 title text-center">Cafe LycoReco</h1>
                </a>
            </div>
        </nav>

        <div class="container-fluid">
            <div class=" main-container row">
                <div class="col-12 col-xl-4 col-xxl-3 p-4">
                    <div class="card main-card rounded-3 shadow" style="background-color: #F9F1F0;">
                        <div class="container-fluid">
                            <div class="row p-2 rounded-top" style="background-color: #F8AFA6;">
                                <img src="assets/img/CafeLycoReco_Wordmark.png" alt="Cafe LycoReco"
                                    class="main-logo img-fluid">
                            </div>
                            <div class="row">
                                <button class="button-link"><img src="assets/img/homeIcon.svg" class="img-fluid pe-3"
                                        style="max-height: 50px;">Home</button>
                                <button class="button-link"><img src="assets/img/menuIcon.svg" class="img-fluid pe-3"
                                        style="max-height: 50px;">Menu</button>
                                <button class="button-link"><img src="assets/img/latestIcon.svg" class="img-fluid pe-3"
                                        style="max-height: 50px;">LycoReco Latest</button>
                                <a href="" class="m-0"><button class="button-link"><img src="assets/img/staffIcon.svg" class="img-fluid pe-3"
                                        style="max-height: 50px;">Our Staff</button></a>
                                <button class="button-link"><img src="assets/img/faqsIcon.svg" class="img-fluid pe-3"
                                        style="max-height: 50px;">FAQs</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" col-12 col-xl-8 col-xxl-9 py-4 pe-4 ps-4 ps-xl-0">
                    <div class="card main-card rounded-3 shadow overflow-hidden">
                        <?php include('pages/menu.php'); ?>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
        crossorigin="anonymous"></script>
</body>

</html>