import React from "react";

import Stack from "@mui/material/Stack";

import WalletButton from "./buttons/WalletButton";
import WalletDebugger from "./debugger/WalletDebugger";

const App = ({ type }) => {
		const renderWidget = () => {
			switch(type) {
				case "wallet-connect":
					return <WalletButton />
				case "wallet-debugger":
					return <WalletDebugger />
				default:
				return <Stack>Lib Error</Stack>
			}
		}

		return (
			<>
				{ renderWidget() }
			</>
		);

}

export default App;