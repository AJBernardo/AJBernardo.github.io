function changeColorMode() {
    const body = document.getElementById("body");
    const navbar = document.getElementById("navbar");

    colorMode = colorMode === "dark" ? "light" : "dark";
    body.setAttribute("data-bs-theme", colorMode);
    if (navbar.classList.contains("bg-light")) {
        navbar.classList.remove("bg-light");
        navbar.classList.add("bg-dark");
    } else {
        navbar.classList.remove("bg-dark");
        navbar.classList.add("bg-light");
    }
}

const navbarContainer = document.getElementById('navbarContainer');

navbarContainer.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-light shadow fixed-top" id="navbar">
      <div class="container-fluid d-flex justify-content-between">
        <a class="navbar-brand" href="index.html"><img class="img-fluid" src="img/logo.png" alt="IdolFactory Logo"
            style="max-height: 40px;"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-sm-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active me-4" aria-current="page" href="index.html">HOME</a>
            <a class="nav-link me-4" href="artists.html">ARTISTS</a>
            <a class="nav-link me-4" href="#" onclick="changeColorMode()">MODE</a>
          </div>
        </div>
      </div>
    </nav>`;