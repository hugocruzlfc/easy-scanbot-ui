
import ScanbotSDK from "scanbot-web-sdk/ui";
import { BarcodeScannerConfiguration } from "scanbot-web-sdk/@types/ui2/configuration";

export function applySingleScanningUseCase(config: BarcodeScannerConfiguration) {

    const useCase = new ScanbotSDK.UI.Config.SingleScanningMode();

    useCase.confirmationSheetEnabled = true;
    useCase.sheetColor = "#FFFFFF";

    // Hide/unhide the barcode image.
    useCase.barcodeImageVisible = true;

    // Configure the barcode title of the confirmation sheet.
    useCase.barcodeTitle.visible = true;
    useCase.barcodeTitle.color = "#000000";

    // Configure the barcode subtitle of the confirmation sheet.
    useCase.barcodeSubtitle.visible = true;
    useCase.barcodeSubtitle.color = "#000000";

    // Configure the cancel button of the confirmation sheet.
    useCase.cancelButton.text = "Close";
    useCase.cancelButton.foreground.color = "#C8193C";
    useCase.cancelButton.background.fillColor = "#00000000";

    // Configure the submit button of the confirmation sheet.
    useCase.submitButton.text = "Submit";
    useCase.submitButton.foreground.color = "#FFFFFF";
    useCase.submitButton.background.fillColor = "#C8193C";

    config.useCase = useCase;
}