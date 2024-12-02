import React, { ReactNode } from "react";

interface TabButtonProps {
  children?: ReactNode;
  onSelect?: (selectedButton: any) => void;
}

const TabButton: React.FC<TabButtonProps> = (props) => {
  const { children, onSelect } = props;

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};

export default TabButton;
