module.exports = {
	test: () => { console.log("Hello World !") }
};

(() => {
	if (!document) return;
	document.addEventListener('DOMContentLoaded', () => {
		console.log("Document Ready")
		const walletButton = document.getElementById("wallet-connect");
		if (!walletButton) {
			console.log("No Wallet Button Found !");
		} else {
			console.log("Found Wallet Button");
		}
	})
})()