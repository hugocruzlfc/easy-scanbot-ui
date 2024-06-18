


import { BarcodeItem, BarcodeMappedData, BarcodeScannerConfiguration } from "scanbot-web-sdk/@types/ui2/configuration";

export function applyBarcodeItemMapperConfig(config: BarcodeScannerConfiguration) {

    config.useCase.barcodeInfoMapping.barcodeItemMapper = (barcode: BarcodeItem): Promise<BarcodeMappedData> => {
        return new Promise((resolve) => {
            resolve({
                /** 
                 * TODO: process scan result as needed to get your mapped data,
                 * e.g. query your server to get product image, title and subtitle.
                 */
                title: `Some product ${barcode.text}`,
                subtitle: barcode.type,
                barcodeImage: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            })
        });
    }
}