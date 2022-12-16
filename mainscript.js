import Chain from "./chain.js";
import Block from "./block.js";

const submitQuestion = document.getElementById("submitQuestion");
const submitQuestionBtn = document.getElementById("submitQuestionBtn");
const mainContent = document.getElementById("mainContent");
const voteContent = document.getElementById("voteContent");
const vote = document.getElementById("vote");
const voteBtn = document.getElementById("voteBtn");


let blockchain = new Chain();
localStorage.setItem("blockchain", JSON.stringify(blockchain));



// if (localStorage.getItem("voteArray")) {
//     console.log("Det finns LS");
// } else {
//     console.log("Det finns inget LS");

//     let voteArray = [
//         {id: 1, onGoingVote: "Bastu eller gym?", vote: "Bastu", voterId: "Fredrik"},
//         {id: 2, onGoingVote: "Bastu eller gym?", vote: "Gym", voterId: "Nicolai"},
//         {id: 3, onGoingVote: "Bastu eller gym?", vote: "Bastu", voterId: "Daniel"}
//     ];

//     localStorage.setItem("voteArray", JSON.stringify(voteArray));
// }
submitQuestionBtn.addEventListener("click", () => {
    submitQuestion.innerHTML = "";
    console.log("click");

    let questionLabel = document.createElement("label");
    questionLabel.innerHTML = "What are we voting on?" + "<br>";
    let question = document.createElement("input");
    question.id = "question";
    submitQuestion.appendChild(questionLabel);
    submitQuestion.appendChild(question);
    let publishVoteBtn = document.createElement("button");
    publishVoteBtn.innerText = "Publish vote";
    submitQuestion.appendChild(publishVoteBtn);

    publishVoteBtn.addEventListener("click", () => {

        let newVote = {
            id: blockchain.blockchain.length,
            onGoingVote: question.value,
        }

        console.log("newVote", newVote);

        blockchain.addBlock(new Block(newVote));
    })
    

})




voteBtn.addEventListener("click", () => {
    // let voteArray = JSON.parse(localStorage.getItem("voteArray"));

    let newBlock = {
        id: blockchain.blockchain.length,
        onGoingVote: "Bastu eller gym?",
        vote: vote.value,
        voterId: "Anonym"
    }

    // console.log("newBlock", newBlock);

    blockchain.addBlock(new Block(newBlock));

    // localStorage.setItem("voteArray", JSON.stringify(voteArray));

    console.log("blockchain", blockchain);

    setTimeout(printVotes, 100);
})

function printVotes() {
    voteContent.innerHTML = "";

    // let blockchain = JSON.parse(localStorage.getItem("blockchain"));
    // console.log("Hämtad från LS", blockchain);

    blockchain.blockchain.map(block => {
        // console.log("Blocken för sig", block);

        let blockBox = document.createElement("div");
        blockBox.style.border = "1px solid black";
        blockBox.style.padding = "20px";
        blockBox.style.margin = "20px";
        blockBox.id = block.id;
        blockBox.innerHTML = "<p>" + block.data.id + "<br>" + block.data.onGoingVote + "<br>"
        + block.data.vote + "<br>" + block.data.voterId + "</p>";

        // STYLA BOXARNA I CSS ISTÄLLET
        // blockBox.classList = "namnPaKlassen"

        voteContent.appendChild(blockBox);
    })
}

//INIT
// printVotes();