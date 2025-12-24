import React, { ReactNode } from "react";

interface TabButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  isSelected: boolean;
}

const TabButton: React.FC<TabButtonProps> = (props) => {
  const { children, isSelected, ...restProps } = props;

  return (
    <li>
      <button {...restProps} className={isSelected ? "active" : undefined}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
