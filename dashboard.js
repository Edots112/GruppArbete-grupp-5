//Funktioner för att scrolla menyerna

//Scrolla nyheter

const paragraphs = [
    'Här är en nyhet',
    'Här är en annan nyhet',
    'Här är en sista nyhet',
  ];
  
let currentParagraph = 0;

function changeParagraph(direction, elementId) {
    if (direction === 'next') {
      currentParagraph = (currentParagraph + 1) % paragraphs.length;
    } else if (direction === 'prev') {
      currentParagraph = (currentParagraph - 1 + paragraphs.length) % paragraphs.length;
    }
    console.log(currentParagraph);
    elementId.innerText = paragraphs[currentParagraph];
    console.log('change news');
}

document.getElementById('newsfeed').innerText = paragraphs[0];

document.getElementById('prevNewsBtn').addEventListener('click', () => {
    changeParagraph('prev');
});
  
document.getElementById('nextNewsBtn').addEventListener('click', () => {
    changeParagraph('next');
});

//Scrolla omröstningar

const votes = [
    'Första omröstningen',
    'Andra omröstningen',
    'Tredje omröstningen',
];

let currentVote = 0;

function changeVote(direction) {
    if (direction === 'next') {
        currentVote = (currentVote + 1) % votes.length;
    } else if (direction === 'prev') {
        currentVote = (currentVote - 1 + votes.length) % votes.length;
    }
    console.log(currentVote);
    document.getElementById('voteInput').innerText = votes[currentVote];
    console.log('change vote');
}

document.getElementById('voteInput').innerText = votes[0];

document.getElementById('prevVoteBtn').addEventListener('click', () => {
    changeVote('prev');
});

document.getElementById('nextVoteBtn').addEventListener('click', () => {
    changeVote('next');
});

//Scrolla deltaganden

const attend = [
    'Första deltagandet',
    'Andra deltagandet',
    'Tredje deltagandet',
];

let currentAttend = 0;

function changeAttend(direction) {
    if (direction === 'next') {
        currentAttend = (currentAttend + 1) % attend.length;
    } else if (direction === 'prev') {
        currentAttend = (currentAttend - 1 + attend.length) % attend.length;
    }
    console.log(currentAttend);
    document.getElementById('blockchainInput').innerText = attend[currentAttend];
    console.log('change deltagande');
}

document.getElementById('blockchainInput').innerText = attend[0];

document.getElementById('prevAttendBtn').addEventListener('click', () => {
    changeAttend('prev');
});

document.getElementById('nextAttendBtn').addEventListener('click', () => {
    changeAttend('next');
});