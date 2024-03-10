import type { ButtonHTMLAttributes } from "react";

export const BtnChangeLng = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}>{children}</button>;
};
