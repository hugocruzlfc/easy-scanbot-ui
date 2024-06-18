import { ArrowBigLeft } from "lucide-react";
import React from "react";

export interface NavBarProps {
  isBackButtonVisible?: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ isBackButtonVisible }) => {
  return (
    <div className="flex items-center h-16 bg-red-400">
      <BackButton isVisible={isBackButtonVisible ?? false} />
      <div className="flex items-center pl-4">
        <span className="font-semibold text-lg">RTU UI</span>
        <span className="text-sm font-light ml-1">Example</span>
      </div>
    </div>
  );
};

export function BackButton(props: { isVisible: boolean }) {
  if (!props.isVisible) {
    return null;
  }
  return (
    <button
      className="p-2"
      aria-label="back"
      onClick={() => {
        window.history.back();
      }}
    >
      <ArrowBigLeft />
    </button>
  );
}
