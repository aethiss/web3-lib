import React, { useEffect, useState } from "react";

import Web3 from "web3";

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
				setAccount(null);
				setNetwork(null);
			}
		}
	}

	useEffect(() => {
		if (ethereum) {
			(async function () {
				console.log("inside function")
				const web3Instance = new Web3(ethereum);
				const accounts = await web3Instance.eth.getAccounts();
				const provider = await web3Instance.currentProvider;
				console.log(provider);
				if (accounts) {
					setAccount(accounts[0]);
				}
			})()
		}
	}, [])

	return { account, network, connectMetaMask }
}

export default useMetaMask;