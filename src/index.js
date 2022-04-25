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
		const debuggerArea = document.getElementById("wallet-debugger");
		if (walletButton) {
			ReactDOM.render(
				<App type="wallet-connect" />,
				walletButton
			);
		}
		if (debuggerArea) {
			ReactDOM.render(
				<App type="wallet-debugger" />,
				debuggerArea
			)
		}
	})
})()