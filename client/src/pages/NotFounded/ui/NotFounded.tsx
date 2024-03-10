import { notFound } from "@shared/assets";
import { useTranslation } from "react-i18next";
const NotFounded = () => {
  const { t } = useTranslation("notFound");
  return (
    <div className="flex justify-center flex-col items-center pt-20 pb-20">
      <div>
        <img src={notFound} alt="" />
      </div>
      <p className="pt-10 roboto-font">
        {t("Похоже здесь ничего нет :(")}
      </p>
    </div>
  );
};

export default NotFounded;
