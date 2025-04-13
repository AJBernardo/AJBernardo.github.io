<?php
function createButtons()
{
    $index = 0;
    $pages = ["home", "menu", "staff", "faqs"];
    $btnLinks = ["Home" => "homeIcon", "Menu" => "menuIcon", "Our Staff" => "staffIcon", "FAQs" => "faqsIcon"];

    foreach ($btnLinks as $btnLink => $icon) {
        echo '<div class="col-3 col-xl-12 p-0">
                <a href="?page=' . $pages[$index] . '"><button class="button-link px-0 px-sm-1 px-md-3 text-center text-xl-start"><img src="assets/img/' . $icon . '.png" class="img-fluid pe-0 pe-sm-3" style="max-height: 50px;"><span class="button-text">' . $btnLink . '</span></button></a>
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
?>