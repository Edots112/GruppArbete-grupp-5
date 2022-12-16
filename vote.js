export default class Vote {
    constructor(question, alternativeOne, alternativeTwo) {
        this.votes = [];
        this.question = question;
        this.alternativeOne = alternativeOne;
        this.alternativeTwo = alternativeTwo;
    }

    addVote(newVote) {
        this.votes.push(newVote);
    }

    
}