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
        "max-w-60 w-full text-nowrap px-5 md:px-12 min-h-8 bg-btn rounded-lg py-4  hover:bg-btnHover",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
