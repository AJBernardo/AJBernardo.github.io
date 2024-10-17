var colorMode = "light";

function changeColorMode() {
    var body = document.getElementById("body");
    colorMode = colorMode == "dark" ? "light" : "dark";
    body.setAttribute("data-bs-theme", colorMode);
}

var shows = ["Secret Crush On You", "GAP The Series", "My Marvellous Dream Is You", "The Sign", "Uranus2324", "The Loyal Pin"]
var showsPosters = ["scoy.png", "gap.png", "dream.png", "sign.png", "uranus.png", "tlp.png"]
var hoverPosters = ["becky.png", "becky.png", "becky.png", "becky.png", "becky.png", "becky.png"]

var display = "none";

for (var i = 0; i < shows.length; i++) {
    var showsList = document.getElementById("showsList");

    showsList.innerHTML +=
    `<div class="col-md-4 col-12 mb-5">
        <div class="shows-item">
          <img src="img/${hoverPosters[i]}" alt="SCOY" id="hover-poster${i}">
          <img src="img/${showsPosters[i]}" alt="SCOY" id="poster${i}"  onmouseover="crossFadeEffect('poster${i}')" onmouseout="resetImage('poster${i}')")> 
        </div>
        <h3 class="my-2" style="font-weight: 400;">${shows[i]}</h3>
        <button class="btn btn-outline-secondary" id="btnSeeInfo${i}" onclick="expandShowInfo('expanded-info${i}', 'btnSeeInfo${i}')">See Info</button>
    </div>

    <div class="expanded-info col-md-8 mb-5 shadow" id="expanded-info${i}" style="display: none;">
        <div class="row my-3">
          <h3>SYPNOSIS</h3>
          <p>Loren Ipsum</p>
          <div>
            <img src="img/becky.png" alt="artist-1">
            <img src="img/becky.png" alt="artist-1">
          </div>
        </div>
    </div>`
}

function crossFadeEffect(id) {
    var poster = document.getElementById(id);
    poster.classList.add('fade');



}

function resetImage(id) {
    var poster = document.getElementById(id);
    poster.classList.remove('fade');
}

function expandShowInfo(id, btnId) {
    var expandedInfo = document.getElementById(id);
    var btnSeeInfo = document.getElementById(btnId);

    if (display == "none") {
        expandedInfo.style.display = "block";
        display = "block";
        btnSeeInfo.innerHTML = "Close";
    } else {
        expandedInfo.style.display = "none";
        display = "none";
        btnSeeInfo.innerHTML = "See Info";
    }
}

