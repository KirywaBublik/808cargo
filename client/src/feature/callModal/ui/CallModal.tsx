import { type FC } from "react";
import { type ModalProps } from "../model/types";
import { close } from "@/shared/assets";
const CallModal: FC<ModalProps> = ({
  active,
  handleClose,
  children,
  ...props
}) => {
  const handleBackdropClick = (
    e: React.MouseEvent<
      HTMLDivElement,
      MouseEvent
    >,
  ) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
  return (
    <div
      className={`z-50 h-dvh w-dvw backdrop-opacity-40 bg-gray-300/[.1] fixed top-0 left-0 flex items-center justify-center transform transition-all duration-400 ${active ? "opacity-100 pointer-events-auto" : "opacity-0 transition-all pointer-events-none"}`}
      {...props}
      onClick={(e) => {
        handleBackdropClick(e);
      }}
    >
      <div
        className={` p-5 max-w-md w-75 rounded-xl bg-blue-950 relative ${active ? "scale-100" : "scale-50 transition-all duration-400"}`}
      >
        <button
          className="absolute top-1 right-2"
          onClick={handleClose}
        >
          <img src={close} alt="" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default CallModal;
