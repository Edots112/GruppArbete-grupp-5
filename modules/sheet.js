import Time from "./time.js";

class Sheet {
	constructor() {
		//timeSheet från scritp.js
		this.timeSheet = [this.createGenesisBlock()];
		this.difficulty = 0;
		this.isPoll;
	}

	createGenesisBlock() {
		let genesisBlock = new Time({
			user: "Genesis",
			work: 0,
			isPoll: "not a poll",
		});
		genesisBlock.mineBlock(this.difficulty);
		genesisBlock.hash = genesisBlock.calculateHash();
		return genesisBlock;
	}

	getLatestTime() {
		// HÄMTA FÖREGÅENDE TID
		return this.timeSheet[this.timeSheet.length - 1];
	}

	async addTime(newTime) {
		newTime.index = this.timeSheet.length;
		// FÅNGA OCH PUSHA IN NYA TIDER
		// SPARA ÄVEN TIDIGARE HASH
		//Returnerar hash från föregående block
		newTime.prevHash = this.getLatestTime().hash;
		// MAJNA

		// HASHA
		newTime.hash = await newTime.calculateHash();
		// PUSHA

		this.timeSheet.push(newTime);

		let timeSheetString = JSON.stringify(this.timeSheet);

		localStorage.setItem("timeSheet", timeSheetString);
	}

	async isChainValid() {
		// VALIDERA VÅR KEDJA
		for (let i = 1; i < this.timeSheet.length; i++) {
			const currentBlock = this.timeSheet[i];
			const prevBlock = this.timeSheet[i - 1];

			let currentBlockHash = await currentBlock.calculateHash();
			if (currentBlock.hash !== currentBlockHash) {
				console.log(
					"INVALID! Not same hash!",
					currentBlock.hash,
					currentBlockHash
				);
				return false;
			}

			if (currentBlock.prevHash !== prevBlock.hash) {
				console.log("Invalid: Not same prev hash");
				return false;
			}
		}
		console.log("VALID");
		return true;
	}
	findBlocksByUserId(userId) {
		const blocks = this.timeSheet.filter((block) => block.userId === userId);

		for (const block of blocks) {
			const blockElement = document.createElement("div");
			blockElement.className = "blockElement";
			blockElement.style = "overflow: scroll; padding: 10px; margin: 10px;";
			blockElement.innerHTML =
				"<p>" +
				"PREVIOUS HASH: " +
				block.prevHash +
				"<br/>" +
				block.data.user +
				"<br/>" +
				block.data.work +
				block.data.isPoll +
				"<br/>" +
				"THIS-HASH: " +
				"<br/>" +
				block.hash +
				" <br/> " +
				"UserId: " +
				block.userId +
				"</p>";

			document.getElementById("blockchain").appendChild(blockElement);
		}
	}

	findPollBlocks() {
		// Get the serialized time sheet from local storage
		const serializedTimeSheet = localStorage.getItem("timeSheet");
		// Parse the serialized time sheet string into an array of blocks
		const timeSheet = JSON.parse(serializedTimeSheet);
		// Filter the array to only include blocks with isPoll === 1
		const pollBlocks = timeSheet.filter((block) => block.data.isPoll === 1);

		// Iterate over the poll blocks and create HTML elements for each of them
		for (const pollBlock of pollBlocks) {
			// Create a new HTML element for the block
			const blockElement = document.createElement("div");
			blockElement.className = "blockElement";
			blockElement.style = "overflow: scroll; padding: 10px; margin: 10px;";
			blockElement.innerHTML =
				"<p>" +
				"PREVIOUS HASH: " +
				pollBlock.prevHash +
				"<br/>" +
				pollBlock.data.user +
				"<br/>" +
				pollBlock.data.work +
				pollBlock.data.isPoll +
				"<br/>" +
				"THIS-HASH: " +
				"<br/>" +
				pollBlock.hash +
				" <br/> " +
				"UserId: " +
				pollBlock.userId +
				"</p>";
			console.log("test", pollBlock);
			// Append the block element to the blockchain element in the HTML
			document.getElementById("blockchain").appendChild(blockElement);
		}
	}
}

export default Sheet;
