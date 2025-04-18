<div class="page container-fluid p-0">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                class="carousel-btn active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" class="carousel-btn" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" class="carousel-btn" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            <button type="button" class="carousel-btn" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
            <button type="button" class="carousel-btn" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner">
            <?php loadCarouselSlides(); ?>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <div class="container px-5 my-5">
        <h1 class="title text-center">Welcome to Cafe LycoReco</h1>
        <p class="mt-5 text-center">Step inside and leave the world behind. Here, the coffee is brewed with care, the
            sweets are made with love,
            and every guest is treated like family. But there’s more to us than meets the eye. Behind the smiles of our
            cheerful staff lies a story full of surprises, courage, and connection. Whether you're here for a quiet
            moment, a cozy chat, or just the best homemade treats in town — you're always welcome. At Café LycoReco,
            every visit is a little adventure. Come for the coffee, stay for the warmth.
        </p>
    </div>

    <div class="container my-5">
        <div class="row px-3 px-lg-5">
            <div class="col-12 col-md-6 mb-5 mb-md-0">
                <div class="card text-center">
                    <h1 class="title">Cafe Hours</h1>
                    <h4 class="mt-3">MON -THURS</h4>
                    <h6 class="mb-3" style="font-weight: 200;">8:00 AM TO 8:00PM</h6>
                    <h4 class="mt-3">FRI</h4>
                    <h6 class="mb-3" style="font-weight: 200;">8:00 AM TO 9:00PM</h6>
                    <h4 class="mt-3">SAT</h4>
                    <h6 class="mb-3" style="font-weight: 200;">9:00 AM TO 9:00PM</h6>
                    <h4 class="mt-3">SUN</h4>
                    <h6 class="mb-3" style="font-weight: 200;">9:00 AM TO 7:00PM</h6>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="card text-center">
                    <h1 class="title">Store Location</h1>
                    <p class="px-5">Okinawa Nakagami-gun Chatancho Mihama 15-69 Carnival Park Mihama 214, Japan</p>
                    <div class="map d-flex justify-content-center overflow-hidden mb-5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3621.503321594295!2d125.1827158226718!3d24.81245543138888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ4JzQ0LjMiTiAxMjXCsDEwJzU3LjUiRQ!5e0!3m2!1sen!2sph!4v1744482111101!5m2!1sen!2sph"
                            class="location" style="border:0; border-radius: 10px; width: 400px; height: 240px;"
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="tour container-fluid my-5">
        <h1 class="text-white text-center py-5">Look Around Our Store</h1>
        <div class="container d-flex justify-content-center pb-5">
            <iframe width="720" height="405"
                src="https://www.youtube.com/embed/0AOIWBBymOs?autoplay=1&mute=1&loop=1&playlist=0AOIWBBymOs"
                class="rounded-2" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
    </div>

    <div class="container px-3 px-lg-5 my-5">
        <h1 class="title text-center">Want to Book A Reservation</h1>
        <p class="mt-5 text-center fs-6 fs-lg-5">To book a reservation, please contact us directly — we’ll be happy to save you the
            perfect seat! Whether you're planning a quiet coffee break or a special gathering, our cozy café is ready to
            welcome you.
        </p>
        <?php loadContacts(); ?>
    </div>


</div>