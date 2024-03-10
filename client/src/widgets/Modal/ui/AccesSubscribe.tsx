import { useTranslation } from "react-i18next";

export const AccessSubscribe = () => {
  const { t } = useTranslation("contacts");
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-75 h-64 space-bold-font text-base">
      <p>{t("Заявка принята!")}</p>
      <p>{t("Наш менеджер свяжется с вами")}</p>
    </div>
  );
};
