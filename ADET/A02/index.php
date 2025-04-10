<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Café LycoReco</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
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
        }

        .main-container{
            background: linear-gradient(310deg, #F9F1F0 15.23%, #FADCD9 33.31%);
        }

        .card {
            height: calc(100vh - 134px);
        }
    </style>
</head>

<body>
    <div>
        <nav class="navbar bg-navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="assets/img/CafeLycoReco_Wordmark.png" class="main-logo img-fluid">
                </a>
            </div>
        </nav>

        <div class="container-fluid">
            <div class=" main-container row">
                <div class="col-12 col-md-3 p-4">
                    <div class="card rounded-4 shadow">

                    </div>
                </div>
                <div class=" col-12 col-md-9 py-4 pe-4 ps-4 ps-md-0">
                    <div class="card rounded-4 shadow">

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