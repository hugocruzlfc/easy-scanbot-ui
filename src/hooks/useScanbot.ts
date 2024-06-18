import { useEffect } from "react";
import ScanbotSDK from "scanbot-web-sdk/ui";
import startScanner from "../lib/launcher";
import SBStorage from "../services/sb-storage.service";
import {
  applyAROverlayUseCaseConfig,
  applyActionBarConfig,
  applyBarcodeItemMapperConfig,
  applyMultipleScanUseCase,
  applyPaletteConfig,
  applySheetMode,
  applySingleScanningUseCase,
  applyTopBarConfig,
  applyUserGuidanceConfig,
} from "../utils/scanbot-config";

export function useScanbot() {
  const config = new ScanbotSDK.UI.Config.BarcodeScannerConfiguration();

  useEffect(() => {
    const LICENCE_KEY = import.meta.env.VITE_SDK_LICENSE_KEY;
    async function init() {
      await ScanbotSDK.initialize({
        licenseKey: LICENCE_KEY,
        engine: "/wasm/",
      });
    }
    init();
  }, []);

  const handleSingleScan = async () => {
    applySingleScanningUseCase(config);
    applyPaletteConfig(config);
    applyActionBarConfig(config);

    const result = await startScanner(config);
    if (result?.items) {
      SBStorage.instance.addBarcodes(result.items);
    }
  };

  const handleMultipleScan = async () => {
    applyMultipleScanUseCase(config);
    applySheetMode(config);
    applyBarcodeItemMapperConfig(config);
    const result = await startScanner(config);
    if (result?.items) {
      SBStorage.instance.addBarcodes(result.items);
    }
  };

  const handleMultiScannerAR = async () => {
    applyTopBarConfig(config);
    applyUserGuidanceConfig(config);
    applyMultipleScanUseCase(config);
    applyAROverlayUseCaseConfig(config);

    const result = await startScanner(config);
    if (result?.items) {
      SBStorage.instance.addBarcodes(result.items);
    }
  };

  return {
    handleSingleScan,
    handleMultipleScan,
    handleMultiScannerAR,
  };
}
