

import ScanbotSDK from "scanbot-web-sdk/ui";
import { BarcodeScannerConfiguration } from "scanbot-web-sdk/@types/ui2/configuration";

export default function startScanner(config: BarcodeScannerConfiguration) {
	// TODO: Configure as needed
	const result = ScanbotSDK.UI.createBarcodeScanner(config);
	// TODO: Process & present the result as needed
	return result;
}