import React, { useEffect, useState } from "react";

const useMetaMask = () => {
	const { ethereum } = window;

	const [account, setAccount] = useState(null);
	const [network, setNetwork] = useState(null);

	const connectMetaMask = async () => {
		console.log("connectMetaMask")
		if (ethereum && ethereum.isMetaMask) {
			try {
				const accounts = await ethereum.request({
					method: "eth_requestAccounts"
				});
				const networkId = await ethereum.request({
					method: "net_version"
				});
				setAccount(accounts[0]);
				setNetwork(networkId);
				console.log("connected metamask", accounts, networkId);
			} catch (e) {
				console.log("Error on connectWithMetaMask", e);
				// Clean Wrapper Status
				setAccount(null);
				setNetwork(null);
			}
		}
	}

	return { account, network, connectMetaMask }
}

export default useMetaMask;