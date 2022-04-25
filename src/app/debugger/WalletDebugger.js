import React from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import useMetaMask from "../../hooks/useMetaMask";

const WalletDebugger = () => {
	const { account, network } = useMetaMask();

	return (
		<Stack>
			<Typography>Debugger :</Typography>
			<Stack>
				<Typography>Account : {account}</Typography>
				<Typography>Network : {network}</Typography>
			</Stack>
		</Stack>
	);
}

export default WalletDebugger;