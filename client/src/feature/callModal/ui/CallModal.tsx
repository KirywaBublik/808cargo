import { FC } from "react";
import { ModalProps } from "../model/types";
import { CloseSvg } from "@shared/assets/CloseSvg";
/* eslint-disable prettier/prettier */
export const CallModal: FC<ModalProps> = ({
  actiive,
  handleClose,
  children,
  ...props
}) => {
  return (
    <div
      className={`z-50 h-dvh w-dvw backdrop-opacity-40 bg-gray-300/[.1] fixed top-0 left-0 flex items-center justify-center transform transition-all duration-400 ${actiive ? "opacity-100 pointer-events-auto" : "opacity-0 transition-all pointer-events-none"}`}
      {...props}
    >
      <div
        className={`p-5 max-w-64 rounded-xl bg-blue-950 relative ${actiive ? "scale-100" : "scale-50 transition-all duration-400"}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className="absolute top-1 right-2"
          onClick={handleClose}
        >
          <CloseSvg />
        </button>
        {children}
      </div>
    </div>
  );
};
