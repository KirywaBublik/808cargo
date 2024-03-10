import { useTranslation } from "react-i18next";

export const InfoTextMainPage = () => {
  const { t } = useTranslation(
    "infoTextMainPage",
  );
  return (
    <div className="max-w-[1170px] my-0 mx-auto">
      <div className="flex flex-col gap-5">
        <p className="space-medium-18 pt-7">
          808CARGO
        </p>
        <p className="space-bold-font text-5xl -ml-1">
          {t(
            "Перевозим грузы из Шеньчженя в любую точку РФ быстро и без задержек",
          )}
        </p>
        <p className="roboto-font max-w-xl">
          {t(
            "Занимаемся логистикой уже более 12 лет. Перевозим любые грузы, от игрушек дометаллопроката. Работаем сжелезнодорожными, морскими иавиаперевозками. Все таможенные исопутствующие расходы берём на себя",
          )}
        </p>
        <div className="space-bold-font flex gap-20 pt-10">
          <p className="flex flex-col items-center border-dashed border-r-2 border-white pr-10 text-4xl">
            26К
            <span className="roboto-font">
              {t("Довольных клиентов")}
            </span>
          </p>
          <p className="flex flex-col items-center -ml-10 text-4xl">
            12+
            <span className="roboto-font">
              {t("Лет опыта")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
