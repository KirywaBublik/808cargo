import { useTranslation } from "react-i18next";
import { type Language } from "./types";
export const changeLanguage = async (
  lng: Language,
) => {
  const { t, i18n } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  i18n.changeLanguage(lng);
  return { t, i18n };
};
