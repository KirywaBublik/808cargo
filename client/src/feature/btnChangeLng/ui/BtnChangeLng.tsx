import classNames from "classnames";
import { useTranslation } from "react-i18next";

import { saveState } from "@/shared/lib/useLocaleStorege";
import { type BtnChangeLngProps } from "../model/types";

export const BtnChangeLng = ({
  className,
  currentLng,
  children,
  ...props
}: BtnChangeLngProps) => {
  const { i18n } = useTranslation();
  const onClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    i18n.changeLanguage(currentLng);
    saveState(i18n.language, "language");
  };

  return (
    <button
      className={classNames(
        "cursor-pointer",
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
