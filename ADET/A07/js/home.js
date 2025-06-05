var colorMode = "light";
var navbarColor = "white";
var display = "none";

var shows = ["Secret Crush On You", "GAP The Series", "My Marvellous Dream Is You", "The Sign", "Uranus2324", "The Loyal Pin"]
var showsPosters = ["scoy.png", "gap.png", "dream.png", "sign.png", "uranus.png", "tlp.png"]
var hoverPosters = ["scoy2.png", "gap2.png", "dream2.png", "sign2.png", "uranus2.png", "tlp2.png"]
var ostSingers = ["Ice Sarunyu", "Becky Rebecca, Freen Sarocha", "Fay Kunyaphat, May Yada", "Zom Marie", "Gam Wichaynee", "Keng Tachaya"]
var ostComposers = ["Pinpin", "Pinpin", "Boy Sompob", "Amp Achariya", "สมาน กาญจนะผลิน", "อนุชิต ธนัญชัย"]
var ostProducers = ["Pinpin", "Pinpin", "Boy Sompob", "Amp Achariya", "Pinpin", "อนุชิต ธนัญชัย"]
var ostName = ["แอบหลงรักเดอะซีรีส์ Secret Crush On You", "ทฤษฎีสีชมพู GAP The series", "My Marvellous Dream is You ฝันรักห้วงนิทรา OST", "Uranus2324 OST", "The Loyal Pin ปิ่นภักดิ์ OST", "The Sign - From The Sign"]
var ostAlbums = [
    "https://open.spotify.com/embed/album/60bSRkoRb8bpGIlhAeeg2u?utm_source=generator",
    "https://open.spotify.com/embed/album/1T32D0t65nWGFQv5YvgUTy?utm_source=generator",
    "https://open.spotify.com/embed/playlist/4QmryvqFFLiW7HybxuxX9g?utm_source=generator",
    "https://open.spotify.com/embed/playlist/7rzf9RnMc36qjyd4UUfFst?utm_source=generator",
    "https://open.spotify.com/embed/playlist/0r6eiauGSjickKmKCMK1Sw?utm_source=generator",
    "https://open.spotify.com/embed/track/3hnGruwxXD6F3sN7WwSLAL?utm_source=generator"
]

var sypnosis = [
  "Discover the secret of a nerdy young man who falls in love with a third-year senior. Because his dream is so far from reach, observing is the only thing he could do. “Kaojao told me I was falling in love. Som said I was seriously sick. Daisy said I was gay. But I think I’m a completely novice stalker.” However, one auspicious day, the world devises an opportunity for Toh to make himself known to Neua, the person he has been in love with for a long time. This unforeseen opportunity produces head-spinning chaos for Toh and the gang. Whether Toh keeps his love a secret that must be hidden or acts with daring and recklessness, the heart is not up to it, and the opportunity is not easy to find. Will this work or will it fail? What will a beginner stalker do with his love?",
  "Ever since Sam (Sarocha Chankimha) came to her aid years ago, Mon (Rebecca Patricia Armstrong) has always considered the former as her role model. When Mon graduates from University, she decides to apply for a job at Sam's company, yet Sam's distant and icy exterior surprises her. The closer Mon gets to Sam, and the more of Sam's barriers she breaks, the more Mon's feelings gradually change from idolizing to love and Sam's world becomes brighter. However, between them lie many obstacles such as gender barriers, the 8-year age gap, company rules, and social class, as Sam is a descendant of royalty.",
  "I'm Dawan, and since I can remember, I have always had strange dreams about a quiet girl who often played with me in my dreams. One day, a new neighbor moved in, which led to my family falling apart when my father ran away with the man next door, who turned out to be the father of Khimhan, the quiet and small girl from next door. Initially, we were not close at all, but circumstances brought us closer and helped us understand each other. However, Khimhan was unaware that while in the real world we were just friends, in my dreams, she and I did things that went far beyond that. So, I kept my feelings concealed because I couldn't let her know, and I never realized that in those dreams, I was not the only one dreaming.",
  "Tharn and Phaya first met as kids when Tharn saved Phaya from drowning in the Mekong River and gave him a necklace to cement their new found friendship. While in the river, Phaya saw a strange serpent and ever since then he has been hearing strange whispers and voices, and a recurring message about an unknown woman through his dreams and nightmares. Meanwhile, Tharn has grown up with a natural sixth sense, and when he was first presented with the necklace that he later gave to Phaya, he was told he would instinctively know who to give it to when the time was right. It was a significant bond between them and their friendship grew into one of unbreakable love. Now, Tharn and Phaya are reincarnations of their past life; brought together again by the strength and evolution of their love, and in their present roles as partners in the Special Investigations Unit, their bond is about to be tested once again by a mysterious psychiatrist.",
  "In Uranus 2324, the poignant tale follows Kath, an aspiring Olympic free diver, and Lin, a Thai astronaut who finds herself stranded on the Uratis space station during a catastrophic solar storm. As Kath navigates the depths of the ocean, she is haunted by the memories of Lin, who battles the vastness of space. Their love story unfolds across a multiverse filled with challenges that test their connection, as each encounter brings new barriers, leading to heartbreak and separation. Ultimately, the narrative poses the question of whether they can overcome fate's cruel designs to reunite and find true happiness together​.",
  "Her Serene Highness Aninlaphat, or Princess Anin, shares a deep bond with her childhood friend Mom Rajawongse Pilanthita, affectionately known as Khunying Pin. When Anin turns fifteen, she embarks on a journey to England for her studies, creating a significant distance between them. This separation becomes a transformative experience for Anin, allowing her to discover her true feelings for Khunying Pin. Upon returning to Thailand, Princess Anin is determined to confess her love, but she faces an insurmountable obstacle: Khunying Pin is already engaged to Khun Chai Kueakiat, making Anin's quest for closeness seem all the more challenging."
]

for (var i = 0; i < shows.length; i++) {
    var showsList = document.getElementById("showsList");
    var ostContainer = document.getElementById("ost-container")

    showsList.innerHTML +=
    `<div class="col-lg-4 col-sm-6 col-12 mb-5">
        <div class="shows-item container-fluid">
          <img class="shadow" src="img/${hoverPosters[i]}" alt="SCOY" id="hover-poster${i}">
          <img class="shadow" src="img/${showsPosters[i]}" alt="SCOY" id="poster${i}"  onmouseover="crossFadeEffect('poster${i}')" onmouseout="resetImage('poster${i}')")> 
        </div>
        <h3 class="my-2" style="font-weight: 400;">${shows[i]}</h3>
        <button class="btn btn-outline-secondary" id="btnSeeInfo${i}" onclick="expandShowInfo('expanded-info${i}', 'btnSeeInfo${i}')">See Info</button>
    </div>

    <div class="expanded-info col-md-8 mb-5 shadow" id="expanded-info${i}" style="display: none;">
        <div class="row my-3">
          <h3>${shows[i]}</h3>
          <p>${sypnosis[i]}</p>
        </div>
    </div>`

    ostContainer.innerHTML += 
    `<div class="row my-5">
      <div class="col-md-10 border-end">
        <iframe style="border-radius:12px" src="${ostAlbums[i]}" width="100%" height="500" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="col-md-2">
        <h3 class="mb-3" style="font-size: 20px;">${ostName[i]}</h3>
        <h5>Performed By</h5>
        <p>${ostSingers[i]}</p>
        <h5>Writen By</h5>
        <p>${ostComposers[i]}</p>
        <h5>Produced By</h5>
        <p>${ostProducers[i]}</p>
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








