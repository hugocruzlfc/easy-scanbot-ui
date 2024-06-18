import { NavBar } from "../conmponents";
import SBStorage from "../services/sb-storage.service";

export default function BarcodeResultPage() {
  return (
    <div className="w-full h-full bg-white">
      <NavBar isBackButtonVisible={true} />
      {SBStorage.instance.getBarcodes()?.map((barcode, index) => (
        <div key={index} className="p-2 border-b border-gray-300">
          <div className="flex flex-row">
            <div className="font-semibold text-base text-red-600">
              {barcode.text}
            </div>
            <div className="pl-1 text-base text-gray-600">({barcode.type})</div>
            <div className="pl-1 text-base text-black">x{barcode.count}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
