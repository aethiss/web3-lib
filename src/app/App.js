import React from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import useMetaMask from "../hooks/useMetaMask";

const App = () => {
		const { account, network, connectMetaMask } = useMetaMask();

		return (
			<>
				<Stack>
					<Button variant="outlined" onClick={connectMetaMask} sx={{ maxWidth: 250 }}>
						<Typography mr={2}>Connect Wallet</Typography>
						<img
							src="https://raw.githubusercontent.com/blakewood84/react-metamask/main/public/images/metamask.svg"
							width={25}
							height={25}
						/>
					</Button>
				</Stack>
				<Stack>
					<Typography>Debugger :</Typography>
					<Stack>
						<Typography>Account : {account}</Typography>
						<Typography>Network : {network}</Typography>
					</Stack>
				</Stack>
			</>
		);

}

export default App;