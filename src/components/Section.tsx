import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children?: ReactNode;
  id?: string;
}

export default function Section(props: SectionProps) {
  const { children, title, ...restProps } = props;

  return (
    <section {...restProps}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
