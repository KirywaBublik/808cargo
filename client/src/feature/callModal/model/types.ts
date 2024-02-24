/* eslint-disable prettier/prettier */
import { type ComponentProps } from "react";

export interface ModalProps
  extends ComponentProps<"div"> {
  active: boolean;
  handleClose: () => void;
}
