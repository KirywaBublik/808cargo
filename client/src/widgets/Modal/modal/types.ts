import {
  type ComponentProps,
  type Dispatch,
  type SetStateAction,
} from "react";

export interface ModalProps
  extends ComponentProps<"div"> {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}
