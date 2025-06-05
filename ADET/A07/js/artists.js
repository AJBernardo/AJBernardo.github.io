var artistsPhoto = ["becky.png", "freen.png", "fay.png", "may.png", "frung.png", "pear.png", "ploy.png", "nam.png", "songjet.png"];

var artists = ["Becky Rebecca", "Freen Sarocha", "Fay Kunyaphat", "May Yada", "Frung Prompatcha", "Pear Neilinyah", "Ploy Rawintera", "Looknam Orntara", "Songjet Sarochinee"];

var fullNames = ["Rebecca Patricia Armstrong", "Sarocha Chankimha", "Kunyaphat Thanompolkul", "Yada Narilya Gulmongkolpech", "Prompatcha Na Songkhla", "Neilinyah Ratchada-rach", "Rawintera Sarasas", "Orntara Wongprasert", "Sarochinee Jetsadawisut"];

var artistsRoles = [
    "Fon, \"Mon\" Kornkamon, \"Anin\" Aninlaphat Sawettawarit",
    "Kongkwan, \"Sam\" Samanan Anantrakul, \"Pin\" Pilanthita Kasidit",
    "Dujdao, \"Wan\" Dawan",
    "\"Nee\" Pharanee, Khimhan",
    "\"Jessie\" Kirati",
    "Wi, Pam, \"On\" Alisara",
    "Dokrak",
    "Som, Jim, Mayris, Prik",
    "Samorn, Ueangfah"
];
var artistsSeries = [
    "Secret Crush On You (2022), GAP: The Series (2022), The Loyal Pin (2024)",
    "Secret Crush On You (2022), GAP: The Series (2022), The Loyal Pin (2024)",
    "The Sign (2023), My Marvellous Dream Is You (2024)",
    "The Sign (2023), My Marvellous Dream Is You (2024)",
    "My Marvellous Dream Is You (2024)",
    "The Sign (2023), My Marvellous Dream Is You (2024), The Loyal Pin (2024)",
    "My Marvellous Dream Is You (2024)",
    "Secret Crush On You (2022), GAP: The Series (2022), My Marvellous Dream Is You (2024), The Loyal Pin (2024)",
    "My Marvellous Dream Is You (2024), The Loyal Pin (2024)"
];
var artistsBirthday = ["December 5, 2002", "August 8, 1998", "December 2, 2001", "October 31, 1997", "April 17, 2002", "October 20, 1995", "November 24, 1993", "May 25, 1996", "November 7, 1997"];
var artistsZodiac = ["Sagittarius", "Leo", "Sagittarius", "Scorpio", "Aries", "Libra", "Sagittarius", "Gemini", "Scorpio"];
var artistsIntro = [
    "Rebecca Patricia Armstrong is a Thai-British actress, singer, and model. Armstrong began her acting career with the drama series TharnType 2: 7 Years of Love. She received greater recognition for starring in the drama Gap: The Series and the romance comedy movie Long Live Love!.",
    "Sarocha Chankimha, more commonly known by her nickname Freen, is a Thai actress, model, and singer who began her acting career with the drama series So Fit and Secret Crush on You. She gained greater recognition with her lead role in Gap: The Series as Sam and has appeared in films such as Uranus 2324. Additionally, she plays a lead role in the period romance drama The Loyal Pin. Her prominent work alongside Rebecca Patricia Armstrong has made them commonly known as \"FreenBecky.\"",
    "Fay, whose full name is Kunyaphat Na Nakorn, is an emerging actress in the Thai entertainment industry, best known for her role in the Girl's Love series \"My Marvellous Dream is You,\" produced by Idol Factory. Premiering on May 8, 2024, the series showcases her alongside co-star May Yada Watcharamusik, and the duo has quickly gained popularity among fans, earning the couple name \"FayMay.\" Their on-screen chemistry has resonated strongly with audiences, making them a notable pairing in the genre.",
    "May Yada is a talented Thai actress and model known for her vibrant performances in the entertainment industry. She has gained popularity for her roles in various series, including the upcoming \"Dream,\" which is produced by Idol Factory. May's work reflects her ability to connect with audiences, bringing depth and authenticity to her roles. With her growing influence in Thai dramas, she continues to captivate fans and showcase her skills in both acting and modeling",
    "Frung Prompatcha is an outstanding rising actress in the Idol Factory universe, known for her remarkable talent and captivating performances. Her journey in the entertainment industry has been marked by a series of dynamic roles that showcase her versatility and emotional range. With each project, including her prominent role in the series Marvellous Dream is You, Frung demonstrates a unique ability to connect with her characters and engage the audience.",
    "Pear Neilinyah, also known as Neilinyah Taweearayapat, is a talented actress in the Thai entertainment industry, recognized for her role as Pam in the GL series My Marvelous Dream is You. With her captivating performances, Pear adds depth to the series, which revolves around themes of dreams and romantic connections. The show has garnered attention for its intriguing plot and engaging characters, positioning Pear as a rising star to watch in the industry",
    "Ploy Rawintera Phanpatthana is a talented actress known for her role as Dokrak, Dawan's friend, in the Thai GL series My Marvelous Dream is You. In this series, she joins a notable cast that includes Kanyaphat Na Nakhon (Fay) and Yada Watcharamusik (May). Ploy's character adds depth to the story, which revolves around themes of dreams and connections between young women.",
    "Looknam Orntara, also known as Nam, is a rising Thai actress born on May 25, 1996, in Nonthaburi, Thailand. She has gained popularity in the Thai entertainment industry for her versatile performances, showcasing her acting skills across various genres. Looknam started her career in 2018 with an uncredited role in the drama series \"Be My Boy\" and has since appeared in several notable series, including \"My Marvellous Dream Is You,\" \"Secret Crush on You,\" and \"Hua Jai Sila.\"",
    "Songjet, also known as Jet, is a rising star in the Thai entertainment scene and is gaining attention for her role in the series Marvellous Dream Is You. Alongside fellow actresses, she is celebrated for her engaging performances and captivating screen presence. Songjet's character in the series adds depth to the narrative, which explores themes of dreams and young women's connections."

];

var hoverPhoto1 = ["becky-gal.png", "freen-gal.png", "fay-gal.png", "may-gal.png", "frung-gal.png", "pear-gal.png", "ploy-gal.png", "nam-gal.png", "songjet-gal.png"]

var artistsColumn = document.getElementById("artists-column");

artists.forEach((artist, i) => {
    artistsColumn.innerHTML += `<button onclick="showArtistsInfo('${i}')">${artist}</button>`;
});

function showArtistsInfo(index) {
    var artistName = document.getElementById("artist-name");
    var fullName = document.getElementById("full-name");
    var roles = document.getElementById("roles");
    var series = document.getElementById("series");
    var birthday = document.getElementById("birthday");
    var zodiacSign = document.getElementById("zodiac-sign");
    var intro = document.getElementById("intro");
    var artistPhoto = document.getElementById("artist-photo");
    var hoverPhotoOne = document.getElementById("hover-photo1");
    var hoverPhotoTwo = document.getElementById("hover-photo2");
    var hoverPhotoThree = document.getElementById("hover-photo3");

    artistPhoto.src = "img/" + `${artistsPhoto[index]}`;
    artistName.innerHTML = `${artists[index]}`;
    fullName.innerHTML = `${fullNames[index]}`;
    roles.innerHTML = `${artistsRoles[index]}`;
    series.innerHTML = `${artistsSeries[index]}`;
    birthday.innerHTML = `${artistsBirthday[index]}`;
    zodiacSign.innerHTML = `${artistsZodiac[index]}`;
    intro.innerHTML = `${artistsIntro[index]}`;
    hoverPhotoOne.src = "img/" + `${hoverPhoto1[index]}`;
    hoverPhotoTwo.src = "img/" + `${hoverPhoto1[index]}`;
    hoverPhotoThree.src = "img/" + `${hoverPhoto1[index]}`;
    
}



