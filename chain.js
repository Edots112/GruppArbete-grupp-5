import Block from "./block.js";
// import vote from "./vote.js";

export default class Chain {
    constructor() {
        this.blockchain = [this.createGenesisBlock()];
        this.difficulty = 1;
    }

    createGenesisBlock() {
        return new Block({"id": "Genesis", "onGoingVote": "Bastu eller gym?",
        "vote": "", "voterId": ""});
    }

    getLatestBlock() {
        // HÄMTA FÖREGÅENDE BLOCK
        return this.blockchain[this.blockchain.length -1];
    }

    async addBlock(newBlock) {
        // FÅNGA OCH PUSHA IN NYA BLOCK
        // SPARA TIDIGARE HASH
        newBlock.prevHash = this.getLatestBlock().hash;
        // MINA
        // HASHA
        newBlock.hash = await newBlock.calculateHash();
        // PUSHA
        this.blockchain.push(newBlock);
    }

    isChainValid() {
        // VALIDERA VÅR KEDJA
    }
}