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
        "min-w-60 min-h-8 bg-btn rounded-lg py-4 px-12 hover:bg-btnHover",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
