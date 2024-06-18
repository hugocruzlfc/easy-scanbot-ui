


import { BarcodeScannerConfiguration } from "scanbot-web-sdk/@types/ui2/configuration";

export function applyTopBarConfig(config: BarcodeScannerConfiguration) {
    
    // Set the top bar mode.
    config.topBar.mode = "GRADIENT";

    // Set the background color which will be used as a gradient.
    config.topBar.backgroundColor = "#C8193C";

    // Configure the Cancel button.
    config.topBar.cancelButton.text = "Cancel";
    config.topBar.cancelButton.foreground.color = "#FFFFFF";
}