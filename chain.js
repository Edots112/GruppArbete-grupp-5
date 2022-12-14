import Block from "./block.js";

export default class Chain {
    constructor() {
        this.block = [this.createGenesisBlock()];
        this.difficulty = 3;
    }

    createGenesisBlock() {
        return new Block({"user": "Genesis", "work": 0});
    }
}