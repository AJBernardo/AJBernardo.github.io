document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("navbar-container").innerHTML = 
    `<nav class="navbar navbar-expand-lg p-0 fixed-top">
        <div class="container-fluid d-flex justify-content-between">
            <a class="navbar-brand" href="home.html"><img src="assets/img/dedsecLogo.webp" alt="DedSec" class="img-fluid"
                    style="max-height: 50px;"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link" aria-current="page" href="home.html">HOME</a>
                    <a class="nav-link" href="council.html">THE COUNCIL</a>
                    <a class="nav-link" href="about.html">ABOUT</a>
                    <a class="nav-link" href="https://www.ubisoft.com/en-sg/game/watch-dogs/watch-dogs-2" target="_blank">WATCHDOGS</a>
                </div>
            </div>
        </div>
    </nav>`;
})

function fadeInOutNavbar() {
    const navbar = document.querySelector('.navbar');

    if (window.innerWidth > 576) {
        if (window.scrollY < 695) {
            navbar.style.backgroundColor = 'transparent';
        } else {
            navbar.style.backgroundColor = 'var(--primaryBackgroundColor)';
        }
    } else {
        navbar.style.backgroundColor = 'var(--primaryBackgroundColor)';
    }
}

document.addEventListener('DOMContentLoaded', () => {    
    fadeInOutNavbar();
    window.addEventListener('scroll', fadeInOutNavbar);    
    window.addEventListener('resize', () => { 
        fadeInOutNavbar();
    });
});
