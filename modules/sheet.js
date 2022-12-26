import Time from "./time.js";

export default class Sheet {
    constructor() {
        //timeSheet från scritp.js
        this.timeSheet = [this.createGenesisBlock()];
        this.difficulty = 3;
        this.isPoll;
    }

    createGenesisBlock() {
        return new Time({"user": "Genesis", "work": 0, "isPoll": "not a poll" });
    }

    getLatestTime() {
        // HÄMTA FÖREGÅENDE TID
        return this.timeSheet[this.timeSheet.length -1];
    }

    async addTime(newTime) {
        // FÅNGA OCH PUSHA IN NYA TIDER
        // SPARA ÄVEN TIDIGARE HASH
        //Returnerar hash från föregående block
        newTime.prevHash = this.getLatestTime().hash;
        // MAJNA
        newTime.mineBlock(this.difficulty);
        // HASHA
        // newTime.hash = await newTime.calculateHash();
        // PUSHA
        this.timeSheet.push(newTime);

        let timeSheetString = JSON.stringify(this.timeSheet);

        localStorage.setItem("timeSheet", timeSheetString);
    }

    isChainValid() {
        // VALIDERA VÅR KEDJA
        for (let i = 1; i < this.timeSheet.length; i++) {
            const currentBlock = this.timeSheet[i];
            const prevBlock = this.timeSheet[i -1];

           // console.log("Testa block", currentBlock, prevBlock);

            let testHash = currentBlock.calculateHash().then(hash => {
                console.log("testHash", hash);
                if (currentBlock.hash !== hash) {
                    console.log("INVALID! Not same hash!", currentBlock.hash, hash);
                    // return false;
                }
            });

            if (currentBlock.prevHash !== prevBlock.hash) {
                console.log("Invalid: Not same prev hash");
               // return false;
            }

            console.log("VALID");
           // return true;
        }
    }
}