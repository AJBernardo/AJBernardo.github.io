function displayMember(member) {
    const name = member;
    let memberFName = '';
    let memberLName = '';
    let memberDescrip = '';

    const charName = [['MARCUS', 'HOLLOWAY'], ['SITARA', 'DHAWAN'], ['WRENCH', 'MASK BOY'], ['JOSH', 'SAUCHAK'], ['RAYMOND', 'KENNEY']];
    const descrip = [
        'The brilliant hacker and main character. Framed by CTOS 2.0 for a crime he didn\'t commit, Marcus joins DedSec to expose the corruption of corporations and reclaim freedom for the people.He\'s smart, witty, and deeply believes in using technology for liberation.',
        'DedSec’s creative genius. Sitara handles the art, propaganda, and public image of DedSec. She\'s fearless, stylish, and passionate about culture and activism, ensuring DedSec’s message stays powerful and rebellious.',
        'The anarchist engineer. Wrench is a wild, chaotic force who builds DedSec’s gear and weapons. Always seen wearing a spiked mask with animated eyes, he brings humor, rage, and technical expertise to the team. Loves explosions — and freedom.',
        'The introverted coding prodigy. Josh is DedSec’s technical wizard, a master of software, cryptography, and data mining. Though socially awkward, he\'s one of the most brilliant minds in the group — and deeply committed to the cause.',
        'The veteran hacker from the original Watch Dogs. T-Bone acts as a mentor and ally to the younger DedSec crew. He\'s a grizzled anarchist with deep knowledge of CTOS systems and a strong hate for corporate tyranny.'
    ]

    const memberName = document.getElementById('member-name');
    const memberAppearance = document.getElementById('member-appearance');
    const memberDescription = document.getElementById('member-description');

    switch (name) {
        case 'marcus':
            memberFName = charName[0][0];
            memberLName = charName[0][1];
            memberDescrip = descrip[0];
            break;
        case 'sitara':
            memberFName = charName[1][0];
            memberLName = charName[1][1];
            memberDescrip = descrip[1];
            break;
        case 'wrench':
            memberFName = charName[2][0];
            memberLName = charName[2][1];
            memberDescrip = descrip[2];
            break;
        case 'josh':
            memberFName = charName[3][0];
            memberLName = charName[3][1];
            memberDescrip = descrip[3];
            break;
        case 'ray':
            memberFName = charName[4][0];
            memberLName = charName[4][1];
            memberDescrip = descrip[4];
            break;
        default:
            memberFName = charName[0][0];
            memberLName = charName[0][1];
            memberDescrip = descrip[0];
    }

    memberName.innerHTML = `<h1 class="lg-heading text-white text-end"><span class="lg-heading" style="color: var(--highlightColor)">` + memberFName + `</span> ` + memberLName + `</h1>`;
    memberAppearance.innerHTML = `<img src="assets/img/` + name + `.webp" alt="` + memberFName + ' ' + memberLName + `" class="img-fluid" style="max-height: 600px;">`;
    memberDescription.innerHTML = `<p class="subheading w-75 text-white">` + memberDescrip + `</p>`;
}