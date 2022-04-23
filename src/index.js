import React from "react";
import * as ReactDOM from "react-dom";

import App from "./app/App"

// module.exports = {
// 	test: () => { console.log("Hello World !") }
// };

(() => {
	if (!document) return;
	document.addEventListener('DOMContentLoaded', () => {
		const walletButton = document.getElementById("wallet-connect");
		if (!walletButton) {
			console.log("No Wallet Button Found !");
		} else {
			ReactDOM.render(
				<App />,
				walletButton
			);
		}
	})
})()