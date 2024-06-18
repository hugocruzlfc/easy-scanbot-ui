import React, { MouseEventHandler, ReactNode } from "react";

export interface FeatureListItemProps {
  text?: string;
  icon?: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const FeatureListItem: React.FC<FeatureListItemProps> = ({
  text,
  icon,
  onClick,
}) => {
  return (
    <div className="flex items-center p-0 m-0">
      <button
        onClick={onClick}
        className="flex items-center w-full p-4 hover:bg-gray-100 focus:outline-none"
      >
        <div className="mr-4">{icon}</div>
        <div className="flex-1">{text}</div>
      </button>
    </div>
  );
};
