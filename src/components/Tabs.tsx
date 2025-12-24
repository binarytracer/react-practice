import { ReactNode } from "react";

interface TabsProps {
  children?: ReactNode;
  buttons?: ReactNode;
  ButtonsContainer?: React.ElementType;
}

export default function Tabs(props: TabsProps) {
  const { children, buttons, ButtonsContainer = "menu" } = props;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
