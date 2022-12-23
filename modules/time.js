export default class Time {
    constructor(data, index = 0, prevHash = "", isPoll) {
        this.index = index;
        //Vad som röstas om
        this.data = data;
        this.timestamp = Date.now();
        this.prevHash = prevHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    async calculateHash() {
        // RÄKNA UT BLOCKETS HASH
        //Encodar data, index, timestamp, prevHash och nonce till bytes
        let msgInt8 = new TextEncoder().encode("salt1234salt"+JSON.stringify(this.data)+this.index+this.timeStamp+this.prevHash+this.nonce);
        //Krypterar msgInt8 med SHA-256 alg
        let hashBuffer = await crypto.subtle.digest("SHA-256", msgInt8);
        //Loop genom hashbuffer och skapar en array
        let hashArray = Array.from(new Uint8Array(hashBuffer));
        //Loopar genom arrayen i basen 16, alla variabler som kommer ut ska bli två bokstäver lång, om den inte läggs 0 på, sedan paras alla variabler ihop med join""
        let hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
        // console.log("hashHex", hashHex);
        return hashHex;  
    }

    async mineBlock(difficulty) {
        // MAJNA ETT BLOCK
        let tryHash = await this.calculateHash();
        // console.log("tryHash", tryHash);

        //Kollar om hashHex börjar med 0 * difficulty, så länge den inte gör det så ökar difficulty med ett?
        while (!tryHash.toString().startsWith("0".repeat(difficulty))) {
            this.nonce++;
            //Updaterar difficulty
            tryHash = await this.calculateHash(this.nonce);
            //console.log("tryHash", tryHash);
        }
        this.hash = tryHash;
    }

}