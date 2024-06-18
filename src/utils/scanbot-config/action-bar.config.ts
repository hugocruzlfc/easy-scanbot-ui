

import { BarcodeScannerConfiguration } from "scanbot-web-sdk/@types/ui2/configuration";

export function applyActionBarConfig(config: BarcodeScannerConfiguration) {

	config.actionBar.flashButton.visible = true;

	// Configure the inactive state of the flash button.
	config.actionBar.flashButton.backgroundColor = "#7A000000";
	config.actionBar.flashButton.foregroundColor = "#FFFFFF";

	// Configure the active state of the flash button.
	config.actionBar.flashButton.activeBackgroundColor = "#FFCE5C";
	config.actionBar.flashButton.activeForegroundColor = "#000000";

	// Hide/unhide the zoom button.
	config.actionBar.zoomButton.visible = true

	// Configure the inactive state of the zoom button.
	// The zoom button has no active state - it only switches between zoom levels. 
	// For configuring those please refer to camera configuring
	config.actionBar.zoomButton.backgroundColor = "#7A000000";
	config.actionBar.zoomButton.foregroundColor = "#FFFFFF";

	// Hide/unhide the flip camera button.
	config.actionBar.flipCameraButton.visible = true

	// Configure the inactive state of the flip camera button.
	config.actionBar.flipCameraButton.backgroundColor = "#7A000000";
	config.actionBar.flipCameraButton.foregroundColor = "#FFFFFF";
}