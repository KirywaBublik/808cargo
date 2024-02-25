import { type Language } from "@/shared/config/i18n/types";
import { type ComponentProps } from "react";

export interface BtnChangeLngProps
  extends ComponentProps<"button"> {
  currentLng: Language;
}
