//Funktioner för att scrolla menyerna

//Scrolla inbox

const inbox = [
    'Här är ett meddelande',
    'Här är ett annat meddelande',
    'Här är ett sista meddelande'
  ];
  
let currentInbox = 0;

function changeInbox(direction) {
    if (direction === 'next') {
      currentInbox = (currentInbox + 1) % inbox.length;
    } else if (direction === 'prev') {
      currentInbox = (currentInbox - 1 + inbox.length) % inbox.length;
    }
    console.log(currentInbox);
    document.getElementById('inboxText').innerText = inbox[currentInbox];
    console.log('change inbox');
}

document.getElementById('inboxText').innerText = inbox[0];

document.getElementById('prevInboxBtn').addEventListener('click', () => {
    changeInbox('prev');
});
  
document.getElementById('nextInboxBtn').addEventListener('click', () => {
    changeInbox('next');
});

//Scrolla ongoing Votes

const ongVotes = [
    'Första omröstningen',
    'Andra omröstningen',
    'Tredje omröstningen'
  ];
  
let currentOngVote = 0;

function changeOngVote(direction) {
    if (direction === 'next') {
      currentOngVote = (currentOngVote + 1) % ongVotes.length;
    } else if (direction === 'prev') {
      currentOngVote = (currentOngVote - 1 + ongVotes.length) % ongVotes.length;
    }
    console.log(currentOngVote);
    document.getElementById('ongoingText').innerText = ongVotes[currentOngVote];
    console.log('change ongoing votes');
}

document.getElementById('ongoingText').innerText = ongVotes[0];

document.getElementById('prevOngBtn').addEventListener('click', () => {
    changeOngVote('prev');
});
  
document.getElementById('nextOngBtn').addEventListener('click', () => {
    changeOngVote('next');
});