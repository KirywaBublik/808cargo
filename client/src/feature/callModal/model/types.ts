/* eslint-disable prettier/prettier */
import { type ComponentProps } from "react";

export interface ModalProps
  extends ComponentProps<"div"> {
  actiive: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}
