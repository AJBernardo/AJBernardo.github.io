<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Café LycoReco</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
    <link href="assets/fonts/font.css" rel="stylesheet">
    <link href="assets/img/CafeLycoReco_Logo.svg" rel="icon">
    <style>
        .navbar {
            background-image: url(assets/img/navBg.gif);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: top center;
        }

        .main-logo {
            max-height: 60px;
            object-fit: contain;
        }

        .main-container {
            background: linear-gradient(310deg, #F9F1F0 15.23%, #FADCD9 33.31%);
        }

        a {
            text-decoration: none;
        }

        .title {
            font-family: 'Vatona', sans-serif;
            color: #f79489;
            margin-bottom: 0px;
            padding-top: 20px;
            text-shadow:
                -2px -2px 0 #fff,
                2px -2px 0 #fff,
                -2px 2px 0 #fff,
                2px 2px 0 #fff,
                0 0 4px #fff;
        }

        .card {
            height: calc(100vh - 116px);
        }

        .button-link {
            font-family: "Vatona";
            font-size: 1.5rem;
            color: #f79489;
            text-align: start;
            height: 60px;
            border: 0px none;
            background-color: #F9F1F0;
        }

        .button-link:hover {
            background-color: #FADCD9;
        }

    </style>
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
                <div class="col-12 col-lg-3 p-4">
                    <div class="card rounded-3 shadow" style="background-color: #F9F1F0;">
                        <div class="container-fluid">
                            <div class="row p-2 rounded-top" style="background-color: #F8AFA6;">
                                <img src="assets/img/CafeLycoReco_Wordmark.png" alt="Cafe LycoReco"
                                    class="main-logo img-fluid">
                            </div>
                            <div class="row">
                                <button class="button-link"><img src="assets/img/homeIcon.svg" class="img-fluid pe-3" style="max-height: 50px;">Home</button>
                                <button class="button-link"><img src="assets/img/menuIcon.svg" class="img-fluid pe-3" style="max-height: 50px;">Menu</button>
                                <button class="button-link"><img src="assets/img/latestIcon.svg" class="img-fluid pe-3" style="max-height: 50px;">LycoReco Latest</button>
                                <button class="button-link"><img src="assets/img/staffIcon.svg" class="img-fluid pe-3" style="max-height: 50px;">Our Staff</button>
                                <button class="button-link"><img src="assets/img/faqsIcon.svg" class="img-fluid pe-3" style="max-height: 50px;">FAQs</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" col-12 col-lg-9 py-4 pe-4 ps-4 ps-md-0">
                    <div class="card rounded-3 shadow">

                    </div>
                </div>
            </div>

        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
        crossorigin="anonymous"></script>
    <!-- <script>
        document.addEventListener("scroll", () => {
            const navbar = document.querySelector(".navbar");
            if (window.scrollY > 100) {
                navbar.style.opacity = "1";
                navbar.style.visibility = "visible";
            } else {
                navbar.style.opacity = "0";
                navbar.style.visibility = "hidden";
            }
        });
    </script> -->
</body>

</html>