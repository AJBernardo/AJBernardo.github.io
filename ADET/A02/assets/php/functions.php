<?php
function createButtons()
{
    $index = 0;
    $pages = ["home", "menu", "staff", "faqs"];
    $btnLinks = ["Home" => "homeIcon", "Menu" => "menuIcon", "Our Staff" => "staffIcon", "FAQs" => "faqsIcon"];

    foreach ($btnLinks as $btnLink => $icon) {
        echo '<div class="col-3 col-xl-12 p-0">
                <a href="?page=' . $pages[$index] . '"><button class="button-link px-0 px-sm-1 px-md-3 text-center text-xl-start"><img src="assets/img/' . $icon . '.png" alt="' . $btnLink . '" class="img-fluid pe-0 pe-sm-3" style="max-height: 50px;"><span class="button-text">' . $btnLink . '</span></button></a>
            </div>';

        $index += 1;
    }
}

function showFAQs()
{
    $index = 0;
    $faqs = [
        "01 CAN I ENJOY A QUEIT MEAL, OR IS IT ALWAYS BUSY?" =>
            "Café LycoReco provides a cozy and relaxed atmosphere, so whether you're looking for a
                    quiet morning with a book or a lively afternoon with friends, there's a spot for you. We adjust the
                    ambiance based on the time of day.",
        "02 DO YOU OFFER ANY VEGAN OR GLUTEN-FREE OPTIONS?" =>
            "We have a variety of options that cater to different dietary needs, including our
                    vegan-friendly seasonal desserts and gluten-free rice bowls. Just ask our staff for recommendations
                    when you arrive!",
        "03 IS THERE WIFI AVAILABLE AT CAFE LYCORECO?" =>
            "Yes, we offer free Wi-Fi to all our customers! Whether you're working remotely,
                    studying, or just browsing, you can enjoy a relaxing visit while staying connected.",
        "04 DO YOU OFFER TAKEOUT OR DELIVERY?" =>
            "We do! For those on the go, you can order takeout directly from the café, or use our
                    delivery service through local partners. Enjoy your favorite dishes at home!",
        "05 ARE THERE ANY SPECIAL EVENTS OR PROMOTIONS AT CAFE LYCORECO?" =>
            "We host seasonal events, like Valentine’s Day special desserts or Christmas-themed
                    drinks, as well as weekly promotions. Stay tuned to our Instagram for the latest updates!"
    ];

    foreach ($faqs as $faq => $faqAnswer) {
        echo '<div class="row px-5 px-sm-3 px-lg-5 my-5">
                <div class="faqs-card card text-start px-3 px-sm-5 py-3">
                    <h4 class="head fs-4">' . $faq . '</h4>
                    <p class="body mt-3 mt-lg-0">' . $faqAnswer . '</p>
                </div>
            </div>';

        $index += 1;
    }
}

function createMenus()
{   
    $index = 0;
    $menuItems = [
        "ANPAN" => "A soft milk bun filled with smooth red bean paste — light and sweet for a gentle start to your day.",
        "MATCHA FINANCIER" => "A delicate, buttery almond cake with a subtle matcha twist. Perfect with a morning tea.",
        "SWEET POTATO YOKAN SLICE" => "Traditional jelly dessert made with Okinawan sweet potato — firm, mildly sweet, and refreshing.",
        "APPLE DAIFUKU" => "Mochi stuffed with spiced apple filling — a comforting mix of Japanese texture and seasonal flavor.",
        "STRAWBERRY SHORTCAKE" => "Soft sponge cake layered with fresh cream and juicy strawberries — a timeless café favorite.",
        "MITARASHI DANGO" => "Grilled mochi dumplings glazed in sweet soy sauce, served warm for that cozy afternoon treat.",
        "CHOCOLATE PARFAIT" => "Layers of chocolate ice cream, brownie cubes, cornflakes, whipped cream, and a cherry on top — café indulgence, the Japanese way.",
        "SEASONAL KAKIGORI" => "Fluffy shaved ice topped with your choice of seasonal syrups: matcha, yuzu, strawberry, or mango — with a drizzle of condensed milk.",
        "JAPANESE CUSTARD PURIN" => "Silky and chilled caramel pudding — soft, jiggly, and satisfyingly simple."
    ];
    ?>

    <div class="col-12 col-xl-6 mb-5 mb-xl-0 d-flex">
                    <div class="menu card text-center w-100 h-100">
                        <h1 class="title mt-5">Morning Menu</h1>
    <?php
    foreach ($menuItems as $menuItem => $menuInfo) {
        if($index < 4){
            echo '<div class="my-4">
                <h4>'. $menuItem .'</h4>
                <h6 class="px-5 xs-body">'. $menuInfo .'</h6>
            </div>';
        }
        $index += 1;
    }?>
        </div>
    </div>
    <div class="col-12 col-xl-6 d-flex">
                <div class="menu card text-center w-100 h-100">
                    <h1 class="title mt-5">Afternoon Menu</h1>
    <?php 
    $index = 0;
    foreach ($menuItems as $menuItem => $menuInfo) {
        if($index >= 4 && $index < 9){
            echo '<div class="my-4">
                <h4>'. $menuItem .'</h4>
                <h6 class="px-5 xs-body">'. $menuInfo .'</h6>
            </div>';
        }
        $index += 1;
    }?>
        </div>
    </div><?php
}

function loadCarouselSlides(){
    $index = 0;
    $slides = [
        ["feature1.jpg", "Our Store 💖", "A cozy retreat for warmth, coffee, and comfort"],
        ["feature2.png", "Our Beloved Staff", "Friendly faces, skilled hands — our staff serve with heart."],
        ["feature3.png", "Game On", "Laughter, lattes, and a little friendly chaos!"],
        ["feature4.png", "Santa on Cafe LycoReco", "Warm drinks, bright lights, and holiday cheer all around! Ho ho ho!"],
        ["feature5.png", "Cafe LycoReco Loves You", "Love brews here — one cup, one smile at a time."]
    ];

    foreach ($slides as $slide) {
        $isActive = $index === 0 ? 'active' : '';
        echo '<div class="carousel-item '. $isActive .'">
                <img src="assets/img/'. $slide[0] .'" class="img-fluid carousel-img" alt="'. $slide[1] .'">
                <div class="carousel-caption d-none d-md-block">
                    <h5>'. $slide[1] .'</h5>
                    <p class="text-wrap">'. $slide[2] .'</p>
                </div>
            </div>';

        $index += 1;
    }
}

function loadContacts(){
    $contacts = [
        ["CALL US", "03-5827-9645", "Call us to reserve your seat or leave a secret message. (We promise Chisato won't answer too cheerfully... or maybe she will (˶˃ ᵕ ˂˶)! )"],
        ["OUR EMAIL", "reservations@lycoreco.jp", "For bookings, questions, or a casual chat with our staff. (Kurumi might read it first ( ╹ -╹)? )"],
        ["OUR INSTAGRAM", "@lycoreco.okinawa", "Slide into our DMs for a booking. (Mizuki will handle it… in her own way. ( •̯́ ₃ •̯̀) )"],
    ];
    
    ?><div class="row text-center my-5"><?php
        foreach($contacts as $contact){
            echo '<div class="col-12 col-md-4 my-5">
                    <h4>'. $contact[0] .'</h4>
                    <a href="#"><h6 class="text-black">'. $contact[1] .'</h6></a>
                    <p class="mt-3 px-5 px-lg-3" style="font-size: 0.7rem;">'. $contact[2] .'</p>
                </div>';
        }?> 
    </div><?php
}
?>