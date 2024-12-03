import React, { ReactNode } from "react";

interface TabButtonProps {
  children?: ReactNode;
  onSelect?: (selectedButton: any) => void;
  isSelected: boolean;
}

const TabButton: React.FC<TabButtonProps> = (props) => {
  const { children, onSelect, isSelected } = props;

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
