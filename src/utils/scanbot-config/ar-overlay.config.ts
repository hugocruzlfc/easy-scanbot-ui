


import { BarcodeScannerConfiguration } from "scanbot-web-sdk/@types/ui2/configuration";

export function applyAROverlayUseCaseConfig(config: BarcodeScannerConfiguration) {
    // Configure AR Overlay.
    config.useCase.arOverlay.visible = true;
    config.useCase.arOverlay.automaticSelectionEnabled = false;
}