import { useTranslation } from "react-i18next";
import "@shared/assets/styles/adaptive.css";

export const InfoTextMainPage = () => {
  const { t } = useTranslation(
    "infoTextMainPage",
  );
  return (
    <div className="max-w-[1170px] my-0 mx-auto pad">
      <div className="flex flex-col gap-5 padpad">
        <div className="space-medium-18 pt-7">
          <p className="headerTitleMin">
            808CARGO
          </p>
        </div>
        <div className="space-bold-font text-5xl -ml-1">
          <p className="headerMinText textText">
            {t(
              "Перевозим грузы из Шеньчженя в любую точку РФ быстро и без задержек",
            )}
          </p>
        </div>
        <div className="roboto-font max-w-xl">
          <p className="headerMinText">
            {t(
              "Занимаемся логистикой уже более 12 лет. Перевозим любые грузы, от игрушек дометаллопроката. Работаем сжелезнодорожными, морскими иавиаперевозками. Все таможенные исопутствующие расходы берём на себя",
            )}
          </p>
        </div>
        <div className="space-bold-font flex gap-20 pt-10 flexFlex">
          <div className="flex flex-col items-center border-dashed border-r-2 border-white pr-10 text-4xl textInf">
            <div className="textMin">
              26К
              {window.innerWidth <= 425 && (
                <br></br>
              )}
              <div className="roboto-font">
                <p className="textMinMin">
                  {t("Довольных клиентов")}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center -ml-10 text-4xl">
            <div className="textMin">
              12+
              {window.innerWidth <= 425 && (
                <br></br>
              )}
              <p className="roboto-font">
                <span className="textMinMin">
                  {t("Лет опыта")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
