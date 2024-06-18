

import { BarcodeScannerConfiguration } from "scanbot-web-sdk/@types/ui2/configuration";

export function applyPaletteConfig(config: BarcodeScannerConfiguration) {

    config.palette.sbColorPrimary = "#C8193C";
    config.palette.sbColorPrimaryDisabled = "#F5F5F5";
    config.palette.sbColorNegative = "#FF3737";
    config.palette.sbColorPositive = "#4EFFB4";
    config.palette.sbColorWarning = "#FFCE5C";
    config.palette.sbColorSecondary = "#FFEDEE";
    config.palette.sbColorSecondaryDisabled = "#F5F5F5";
    config.palette.sbColorOnPrimary = "#FFFFFF";
    config.palette.sbColorOnSecondary = "#C8193C";
    config.palette.sbColorSurface = "#FFFFFF";
    config.palette.sbColorOutline = "#EFEFEF";
    config.palette.sbColorOnSurfaceVariant = "#707070";
    config.palette.sbColorOnSurface = "#000000";
    config.palette.sbColorSurfaceLow = "#2600000";
    config.palette.sbColorSurfaceHigh = "#7A00000";
    config.palette.sbColorModalOverlay = "#A300000";
}