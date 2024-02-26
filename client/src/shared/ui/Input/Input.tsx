import {
  forwardRef,
  type InputHTMLAttributes,
} from "react";
import classNames from "classnames";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      className={classNames(
        "w-64 h-12 bg-bgInput rounded-lg py-5 px-4 border-2 border-solid border-borderInput placeholder-borderInput space-medium-14 cursor-pointer hover:bg-bgInputHover focus:cursor-auto",
        className,
      )}
      {...props}
      ref={ref}
    />
  );
});
Input.displayName = "input";
