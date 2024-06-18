

import { BarcodeScannerConfiguration } from "scanbot-web-sdk/@types/ui2/configuration";

export function applyUserGuidanceConfig(config: BarcodeScannerConfiguration) {

    // Hide/unhide the user guidance.
    config.userGuidance.visible = true;

    // Configure the title.
    config.userGuidance.title.text = "Move the finder over a barcode";
    config.userGuidance.title.color = "#FFFFFF";

    // Configure the background.
    config.userGuidance.background.fillColor = "#7A000000";
}