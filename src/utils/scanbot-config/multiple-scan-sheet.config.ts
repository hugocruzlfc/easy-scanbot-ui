import {
  BarcodeScannerConfiguration,
  MultipleScanningMode,
} from "scanbot-web-sdk/@types/ui2/configuration";

export function applySheetMode(config: BarcodeScannerConfiguration) {
  const useCase = config.useCase as MultipleScanningMode;

  useCase.sheet.mode = "COLLAPSED_SHEET";

  // Set the height for the collapsed sheet.
  useCase.sheet.collapsedVisibleHeight = "LARGE";

  // Configure the submit button on the sheet.
  useCase.sheetContent.submitButton.text = "Submit";
  useCase.sheetContent.submitButton.foreground.color = "#000000";
}
