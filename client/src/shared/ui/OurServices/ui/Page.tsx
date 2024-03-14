import { cards } from "../model/constants";
import { CardItem } from "./Card/Card";
import { useTranslation } from "react-i18next";
import "@shared/assets/styles/adaptive.css";

export const OurServices = () => {
  const { t } = useTranslation("services");
  return (
    <div className="bg-bgReviews text-bg">
      <div className="max-w-[1170px] mx-auto py-[110px] flex flex-col items-center">
        <div className="mb-16 text-center">
          <h2 className="text-blue-800 mb-3">
            {t("НАШИ УСЛУГИ")}
          </h2>
        </div>
        <div className="flex flex-wrap justify-between services">
          {cards.map(
            (
              { title, typography, alt, img },
              index,
            ) => (
              <CardItem
                title={t(`${title}`)}
                typography={t(`${typography}`)}
                alt={alt}
                img={img}
                key={index}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};
