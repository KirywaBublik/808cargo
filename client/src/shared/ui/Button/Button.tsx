import { type ButtonHTMLAttributes } from "react";
import classNames from "classnames";
export const Button = ({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={classNames(
        "bg-btn rounded-lg py-4 px-12",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
