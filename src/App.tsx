import { List, QrCode, ScanLine } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FeatureListItem, NavBar } from "./conmponents";
import { useScanbot } from "./hooks";

function App() {
  const navigate = useNavigate();
  const { handleSingleScan, handleMultipleScan, handleMultiScannerAR } =
    useScanbot();

  return (
    <main>
      <div className="w-full bg-white">
        <NavBar />
        <div>
          <FeatureListItem
            text="Single-Barcode Scanner"
            icon={<QrCode />}
            onClick={handleSingleScan}
          />
          <FeatureListItem
            text="Multi-Barcode Scanner"
            icon={<QrCode />}
            onClick={handleMultipleScan}
          />
          <FeatureListItem
            text="Multi-Scanner with AR Overlay"
            icon={<ScanLine />}
            onClick={handleMultiScannerAR}
          />
          <hr className="my-4 border-t border-gray-300" />
          <FeatureListItem
            text="Scan Results"
            icon={<List />}
            onClick={async () => {
              navigate("scan-results");
            }}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
